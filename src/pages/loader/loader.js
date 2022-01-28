import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAll,
  deleteLoader,
  getLoader,
  statusChange
} from "../../store/slice/loader-slice";

import { ToastContainer, toast } from "react-toastify";
import { UserStatusIndicator } from "../../component";
import View from "./view";
import Edit from "./edit";
import Delete from "./delete";
import Add from "./add";

const Loader = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);

  const loaders = useSelector((state) => state.loader.loaders);
  const loader = useSelector((state) => state.loader.loader);

  return (
    <div className="content-wrapper">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Loaders</h4>
            <button
              type="button"
              class="btn btn-primary btn-icon-text"
              data-toggle="modal"
              data-target="#modal-loader-add"
            >
              <i class="ti-user btn-icon-prepend"></i>
              Add Loader
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
                  {loaders.map((item, index) => {
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
                              {/* <h6 className="dropdown-header">Action</h6> */}
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#modal-loader-details"
                                onClick={() => {
                                  dispatch(getLoader(item._id));
                                }}
                              >
                                View Details
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#modal-loader-edit"
                                onClick={() => {
                                  dispatch(getLoader(item._id));
                                }}
                              >
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#modal-loader-delete"
                                onClick={() => {
                                  dispatch(getLoader(item._id));
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
      {/* CURD modal ----------------------------------------------------------- */}
      {!loaders || (
        <>
          <Add />
          <View data={loader} />
          <Edit data={loader} />
          <Delete
            onClick={() => {
              dispatch(deleteLoader(loader._id))
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

export default Loader;
