import React from "react";
import View from "./view";
import Edit from "./edit";
import Delete from "./delete";
import Add from "./add";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import { UserStatusIndicator } from "../../component";
import {
  deleteMaterial,
  getAll,
  getMaterial,
} from "../../store/slice/material-slice";

const MaterialType = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);

  const materials = useSelector((state) => state.material.materials);

  const material = useSelector((state) => state.material.material);

  return (
    <div className="content-wrapper">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Meterial types</h4>
            <button
              type="button"
              class="btn btn-primary btn-icon-text"
              data-toggle="modal"
              data-target="#modal-meterial-add"
            >
              <i class="ti-package btn-icon-prepend"></i>
              Add Meterial
            </button>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>SI NO</th>
                    <th>Meterial Name</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((item, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.material_name}</td>
                        <td>
                          {item.visible ? (
                            <label className="badge badge-success">
                              Visible
                            </label>
                          ) : (
                            <label className="badge badge-danger">
                              Not Visible
                            </label>
                          )}
                        </td>
                        <td>{item.createdAt}</td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-success dropdown-toggle"
                              id="dropdownMenuIconButton9"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ti-package"></i>
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuIconButton9"
                            >
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#modal-meterial-details"
                                onClick={() => {
                                  dispatch(getMaterial(item._id));
                                }}
                              >
                                View Details
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#modal-meterial-edit"
                                onClick={() => {
                                  dispatch(getMaterial(item._id));
                                }}
                              >
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#modal-meterial-delete"
                                onClick={() => {
                                  dispatch(getMaterial(item._id));
                                }}
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Add />
      <View data={material} />
      <Edit data={material} />
      <Delete
        onClick={() => {
          dispatch(deleteMaterial(material._id))
            .unwrap()
            .then((r) => {
              toast.warn("Deleted Successfuly...", { type: "success" });
            })
            .catch((e) => {
              toast.warn("Something Wrong !", { type: "error" });
            });
        }}
      />

      <ToastContainer />
    </div>
  );
};

export default MaterialType;
