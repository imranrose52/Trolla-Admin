import React, { useEffect } from "react";
import Add from "./Add";
import View from "./View";
import Delete from "./Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDriver,
  getAll,
  getDriver,
} from "../../store/slice/driver-slice";
import { ToastContainer, toast } from "react-toastify";
import { UserStatusIndicator } from "../../component";
const Driver = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const drivers = useSelector((state) => state.driver.drivers);
  const driver = useSelector((state) => state.driver.driver);

  return (
    <div className="content-wrapper">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Drivers</h4>
            <button
              type="button"
              class="btn btn-primary btn-icon-text"
              data-toggle="modal"
              data-target="#modal-driver-add"
            >
              <i class="ti-user btn-icon-prepend"></i>
              Add Driver
            </button>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>SI NO</th>
                    <th>Transporter</th>
                    <th>Driver Name</th>
                    <th>Mobile (ID)</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {drivers.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item?.transporter?.user_name}</td>
                        <td>{item.driver_name}</td>
                        <td>{item.mobile_primary}</td>
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
                                data-target="#modal-driver-view"
                                onClick={() => {
                                  dispatch(getDriver(item._id));
                                }}
                              >
                                View Details
                              </a>
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#modal-driver-delete"
                                onClick={() => {
                                  dispatch(getDriver(item._id));
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
      {/*  CRUD Modal-------------------------------------- */}

      {!drivers || (
        <>
          <View data={driver} />
          <Add />
          <Delete
            onClick={() => {
              dispatch(deleteDriver(driver._id))
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

export default Driver;
