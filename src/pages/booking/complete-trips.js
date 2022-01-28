import React from "react";

const CompleteTrip = () => {
  return (
    <div className="content-wrapper">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Complete trips</h4>
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
                    <th>Destination</th>
                    <th>Balace</th>
                    <th>Driver</th>
                    <th>Driver Mobile</th>
                    <th>Vehicle</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>8</td>
                    <td>Ganpat Transpoters</td>
                    <td>John doe</td>
                    <td>guwahati to Haldia</td>
                    <td>2000</td>
                    <td>Dilbar Sing</td>
                    <td>12345678799</td>
                    <td>AS-01 BZ5458</td>
                    <td>21-12-2021</td>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteTrip;
