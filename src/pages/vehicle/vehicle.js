import React, { useEffect, useState } from "react";
import Add from "./Add";
import View from "./View";
import Delete from "./Delete";
import { ToastContainer, toast } from "react-toastify";
import { UserStatusIndicator } from "../../component";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteVehicle,
  getAllVehicle,
  getVehicle,
} from "../../store/slice/vehicle-slice";

import { getAll } from "../../store/slice/transporter-slice";

import Edit from "./Edit";

const Vehicle = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVehicle(vehicles));
    dispatch(getAll());
  }, []);

  const vehicles = useSelector((state) => state.vehicle.vehicles);
  const vehicle = useSelector((state) => state.vehicle.vehicle);
  // useEffect(() => {
  //   setAllVehicles(vehicles);
  // }, [vehicles]);
  return (
    <div className="content-wrapper">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Vehicles</h4>
            <button
              type="button"
              class="btn btn-primary btn-icon-text"
              data-toggle="modal"
              data-target="#modal-vehicle-add"
            >
              <i class="ti-truck btn-icon-prepend"></i>
              Add Vehicle
            </button>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>SI NO</th>
                    <th>Transporter</th>
                    <th>Registration Number</th>
                    <th>Vehicle type</th>
                    <th>Capacity</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles &&
                    vehicles.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item?.transporter_name?.user_name}</td>
                          <td>{item.vehicle_number}</td>
                          <td>{item.vehicle_type}</td>
                          <td>{item.capacity}</td>
                          <td>
                            <UserStatusIndicator status={item.status} />
                          </td>
                          <td>{item.date}</td>
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
                                <i className="ti-truck"></i>
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
                                  data-target="#modal-vehicle-view"
                                  onClick={() => {
                                    dispatch(getVehicle(item._id));
                                  }}
                                >
                                  View Details
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal-vehicle-edit"
                                  onClick={() => {
                                    dispatch(getVehicle(item._id));
                                  }}
                                >
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal-vehicle-delete"
                                  onClick={() => {
                                    dispatch(getVehicle(item._id));
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

      {/* CRUD vehicle modal--------------------------- */}

      <Add />
      {!vehicle || (
        <>
          <View data={vehicle} />
          <Add />
          <Edit data={vehicle} />
          {/* <Edit data={loader} /> */}
          <Delete
            onClick={() => {
              dispatch(deleteVehicle(vehicle._id))
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

export default Vehicle;
