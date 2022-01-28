import React, { useEffect, useState } from "react";
import AddModal from "./addModal";
import View from "./View";
import Edit from "./Edit";
import Delete from "./Delete";
import { UserStatusIndicator } from "../../component";

import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import {
  getAll,
  createTransporter,
  deleteTransporter,
  changeStatus,
  getTransporter,
} from "../../store/slice/transporter-slice";

const Transporter = () => {
  const dispatch = useDispatch();

  const transporters = useSelector((state) => state.transporter.transporters);
  const transporter = useSelector((state) => state.transporter.transporter);

  useEffect(() => {
    dispatch(getAll());
  }, []);
  // use state for submit data---------

  return (
    <div className="content-wrapper">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Transporters</h4>
            <button
              type="button"
              class="btn btn-primary btn-icon-text"
              data-toggle="modal"
              data-target="#modal-transport-add"
            >
              <i class="ti-user btn-icon-prepend"></i>
              Add Transporter
            </button>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>SI NO</th>
                    <th>Name</th>
                    <th>Mobile (ID)</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {transporters.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.user_name}</td>
                        <td>{item.mobile_primary}</td>
                        <td>
                          <UserStatusIndicator status={item.status} />
                        </td>
                        <td>{item.created_date}</td>
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
                              <i className="ti-user"></i>
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuIconButton9"
                            >
                              <h6 className="dropdown-header">Action</h6>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#modal-transporter-view"
                                onClick={() => {
                                  dispatch(getTransporter(item._id));
                                }}
                              >
                                View Details
                              </a>

                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#modal-transporter-edit"
                                onClick={() => {
                                  dispatch(getTransporter(item._id));
                                }}
                              >
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#modal-transporter-delete"
                                onClick={() => {
                                  dispatch(getTransporter(item._id));
                                }}
                              >
                                Delete
                              </a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">
                                Verify Details
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

      {/* CRUD operation  ---------------------*/}
      {!transporters || (
        <>
          <AddModal />
          <View data={transporter} />
          <Edit data={transporter} />
          <Delete
           
            onClick={() => {
              dispatch(deleteTransporter(transporter._id))
                .unwrap()
                .then((r) => {
                  toast.warn("Deleted Successfuly...", { type: "success" });
                })
                .catch((e) => {
                  toast.warn("Something Wrong !", { type: "error" });
                });
            }}
          />
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default Transporter;
