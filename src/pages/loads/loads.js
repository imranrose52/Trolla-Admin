import View from "./view";
import Edit from "./edit";
import Delete from "./delete";
import Add from "./add";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import { UserStatusIndicator } from "../../component";
import { getAllLoads, getLoad, deleteLoad } from "../../store/slice/load-slice";
import { getAll } from "../../store/slice/loader-slice";

const Loads = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLoads());
  }, []);

  const loads = useSelector((state) => state.load.loads);

  const load = useSelector((state) => state.load.load);
  // const loader = useSelector((state) => state.loader.loader);

  return (
    <div className="content-wrapper">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Loads</h4>
            <button
              type="button"
              class="btn btn-primary btn-icon-text"
              data-toggle="modal"
              data-target="#modal-load-add"
            >
              <i class="ti-truck btn-icon-prepend"></i>
              Add Loads
            </button>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>SI NO</th>
                    <th>Load no</th>
                    <th>Loader</th>
                    <th>Vehicle</th>
                    <th>Material</th>
                    <th>Weight</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Expected Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loads &&
                    loads.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.load_no}</td>

                          <td>{item?.loader?.user_name}</td>
                          <td>{item.vehicle_type}</td>
                          <td>{item.meterial_type}</td>
                          <td>{item.weight}</td>
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
                          <td>{item.date}</td>
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
                                  data-target="#modal-load-details"
                                  onClick={() => {
                                    dispatch(getLoad(item._id));
                                  }}
                                >
                                  View Details
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal-load-edit"
                                  onClick={() => {
                                    dispatch(getLoad(item._id));
                                  }}
                                >
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal-load-delete"
                                  onClick={() => {
                                    dispatch(getLoad(item._id));
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

      {/* CRUD modal --------------------------------------*/}
      <Add />
      {!load || (
        <>
          <Add />
          <View data={load} />
          <Edit data={load} />
          <Delete
            onClick={() => {
              dispatch(deleteLoad(load._id))
                .unwrap()
                .then((r) => {
                  toast.warn("Deleted Successfuly...", { type: "success" });
                })
                .catch((e) => {
                  toast.warn("Something Wrong !", { type: "error" });
                });
            }}
          />{" "}
        </>
      )}

      <ToastContainer />
    </div>
  );
};

export default Loads;
