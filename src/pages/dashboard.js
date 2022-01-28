/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getLoadCount,
  getLoaderCount,
  getDriverCount,
  getTransporterCount,
  getVehicleCount,
  getCloseTripCount,
} from "../store/slice/dashboard-slice";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoadCount());
    dispatch(getLoaderCount());
    dispatch(getDriverCount());
    dispatch(getTransporterCount());
    dispatch(getVehicleCount());
    dispatch(getCloseTripCount());
  }, []);

  const { name } = useSelector((state) => state.user.user);

  const {
    loader_count,
    load_count,
    driver_count,
    transporter_count,
    vehicle_count,
    trip_close_count,
  } = useSelector((state) => state.dashboard);
  return (
    <>
      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="row">
              <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                <h3 className="font-weight-bold text-primary">
                  Welcome, Mr. {name}
                </h3>
              </div>
              {/* <div className="col-12 col-xl-4">
                <div className="justify-content-end d-flex">
                  <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                    <button
                      className="btn btn-sm btn-light bg-white dropdown-toggle"
                      type="button"
                      id="dropdownMenuDate2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      <i className="mdi mdi-calendar"></i> Today (10 Jan 2021)
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuDate2"
                    >
                      <a className="dropdown-item" href="#">
                        January - March
                      </a>
                      <a className="dropdown-item" href="#">
                        March - June
                      </a>
                      <a className="dropdown-item" href="#">
                        June - August
                      </a>
                      <a className="dropdown-item" href="#">
                        August - November
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <p className="card-title">Today's Report Details</p>
        <div className="row">
          <div className="col-md-6 grid-margin transparent">
            {/* <p className="card-title">Today's Report Details</p> */}
            <div className="row">
              <div className="col-md-6 mb-4 stretch-card transparent">
                <div className="card card-tale">
                  <div className="card-body">
                    <p className="mb-4">Loads</p>
                    <p className="fs-30 mb-2">{load_count}</p>
                    {/* <p>10.00% (30 days)</p> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4 stretch-card transparent">
                <div className="card card-dark-blue">
                  <div className="card-body">
                    <p className="mb-4">Confrimed Loads</p>
                    <p className="fs-30 mb-2">{load_count}</p>
                    {/* <p>22.00% (30 days)</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                <div className="card card-light-blue">
                  <div className="card-body">
                    <p className="mb-4">In-transit Trips</p>
                    <p className="fs-30 mb-2">2000</p>
                    {/* <p>2.00% (30 days)</p> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 stretch-card transparent">
                <div className="card card-light-danger">
                  <div className="card-body">
                    <p className="mb-4">Closed Trips</p>

                    <p className="fs-30 mb-2">{trip_close_count}</p>
                    {/* <p>0.22% (30 days)</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 grid-margin transparent">
            {/* <p className="card-title">Today's Report Details</p> */}
            <div className="row">
              <div className="col-md-6 mb-4 stretch-card transparent">
                <div className="card card-tale">
                  <div className="card-body">
                    <p className="mb-4">New Loader</p>
                    <p className="fs-30 mb-2">{loader_count}</p>
                    {/* <p>10.00% (30 days)</p> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4 stretch-card transparent">
                <div className="card card-dark-blue">
                  <div className="card-body">
                    <p className="mb-4">New Partner</p>
                    <p className="fs-30 mb-2">{transporter_count}</p>
                    {/* <p>22.00% (30 days)</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                <div className="card card-light-blue">
                  <div className="card-body">
                    <p className="mb-4">Vehicle Added</p>
                    <p className="fs-30 mb-2">{vehicle_count}</p>
                    {/* <p>2.00% (30 days)</p> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 stretch-card transparent">
                <div className="card card-light-danger">
                  <div className="card-body">
                    <p className="mb-4">Driver Added</p>
                    <p className="fs-30 mb-2">{driver_count}</p>
                    {/* <p>0.22% (30 days)</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <p className="card-title">Loader Apps Details</p>
                <p className="font-weight-500">Report of Trolla Loader App</p>
                <div className="d-flex flex-wrap mb-5">
                  <div className="mr-5 mt-3">
                    <p className="text-muted">Downloads</p>
                    <h3 className="text-primary fs-30 font-weight-medium">
                      3000+
                    </h3>
                  </div>
                  <div className="mr-5 mt-3">
                    <p className="text-muted">Total user</p>
                    <h3 className="text-primary fs-30 font-weight-medium">
                      2800
                    </h3>
                  </div>
                  <div className="mr-5 mt-3">
                    <p className="text-muted">App Crash</p>
                    <h3 className="text-primary fs-30 font-weight-medium">
                      20
                    </h3>
                  </div>
                  <div className="mt-3">
                    <p className="text-muted">Total Review</p>
                    <h3 className="text-primary fs-30 font-weight-medium">
                      220
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <p className="card-title">Transporter Apps Details</p>
                <p className="font-weight-500">
                  Report of Trolla Transporter App
                </p>
                <div className="d-flex flex-wrap mb-5">
                  <div className="mr-5 mt-3">
                    <p className="text-muted">Downloads</p>
                    <h3 className="text-primary fs-30 font-weight-medium">
                      2000+
                    </h3>
                  </div>
                  <div className="mr-5 mt-3">
                    <p className="text-muted">Total user</p>
                    <h3 className="text-primary fs-30 font-weight-medium">
                      1600
                    </h3>
                  </div>
                  <div className="mr-5 mt-3">
                    <p className="text-muted">App Crash</p>
                    <h3 className="text-primary fs-30 font-weight-medium">8</h3>
                  </div>
                  <div className="mr-5 mt-3">
                    <p className="text-muted">Total Review</p>
                    <h3 className="text-primary fs-30 font-weight-medium">
                      100
                    </h3>
                  </div>

                  <div className="mr-5 mt-3">
                    <p className="text-muted">Total Subscription</p>
                    <h3 className="text-primary fs-30 font-weight-medium">
                      1100
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
