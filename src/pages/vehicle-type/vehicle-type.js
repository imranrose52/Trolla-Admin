import View from "./view";
import Edit from "./edit";
import Delete from "./delete";
import Add from "./add";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import { UserStatusIndicator } from "../../component";
import {
  deleteVehicleType,
  getAllVihecleType,
  setVehicleTypeName,
  updateVihecleType,
  getVehicleType,
} from "../../store/slice/vehicle-type-slice";

const VehicleType = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVihecleType());
    console.log(vehicle_type);
  }, []);

  const vehicle_types = useSelector(
    (state) => state.vehicle_type.vehicle_types
  );

  const vehicle_type = useSelector((state) => state.vehicle_type.vehicle_type);

  return (
    <div className="content-wrapper">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Vehicle types</h4>
            <button
              type="button"
              class="btn btn-primary btn-icon-text"
              data-toggle="modal"
              data-target="#modal-vehicle-type-add"
            >
              <i class="ti-truck btn-icon-prepend"></i>
              Add Vehicle type
            </button>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>SI NO</th>
                    <th>Vehicle Type</th>
                    <th>Capacity</th>
                    <th>Body type</th>
                    <th>Tyre</th>
                    <th>Length</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicle_types.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.vehicle_type}</td>
                        <td>{item.capacity}</td>
                        <td>{item.body_type}</td>
                        <td>{item.tyre}</td>
                        <td>{item.length} FT</td>
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
                                data-target="#modal-vehicle-type-details"
                                onClick={() => {
                                  dispatch(getVehicleType(item._id));
                                }}
                              >
                                View Details
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#modal-vehicle-type-edit"
                                onClick={() => {
                                  dispatch(getVehicleType(item._id));
                                }}
                              >
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#modal-vehicle-type-delete"
                                onClick={() => {
                                  dispatch(getVehicleType(item._id));
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
      <View data={vehicle_type} />
      <Edit data={vehicle_type} />
      <Delete
        onClick={() => {
          dispatch(deleteVehicleType(vehicle_type._id))
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

export default VehicleType;
