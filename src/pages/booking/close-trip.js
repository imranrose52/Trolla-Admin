/** @format */

import React, { useEffect } from "react";

import { getAllTrip } from "../../store/slice/complete-trip-slice";
import { useDispatch, useSelector } from "react-redux";

const CloseTrip = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTrip());
  }, []);

  const trips = useSelector((state) => state.complete_trip.complete_trips);

  return (
    <div className="content-wrapper">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Close trips</h4>
            {/* <button type="button" class="btn btn-primary btn-icon-text">
              <i class="ti-package btn-icon-prepend"></i>
              Create Loads
            </button> */}

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>SI NO</th>
                    <th>Trip No</th>
                    <th>Transporter</th>
                    <th>Loader</th>
                    <th>Driver</th>
                    <th>Destination</th>
                    <th>Totat Amount</th>
                    <th>Vehicle</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {trips.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.trip_no}</td>
                        <td>{item.transporter}</td>
                        <td>{item.loader}</td>
                        <td>{item.driver}</td>
                        <td>
                          {item.pickup} - {item.destination}
                        </td>
                        <td>{item.amount}</td>
                        <td>AS-01 BZ5458</td>
                        <td></td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-success dropdown-toggle"
                              id="dropdownMenuIconButton9"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false">
                              <i className="ti-package"></i>
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuIconButton9">
                              <h6 className="dropdown-header">Action</h6>
                              <a className="dropdown-item" href="#">
                                View Details
                              </a>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">
                                Location History
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
    </div>
  );
};

export default CloseTrip;
