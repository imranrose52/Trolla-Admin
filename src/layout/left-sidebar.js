import React from "react";
import { NavLink, Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <>
      {/* <!-- partial -->
      <!-- partial:partials/_sidebar.html --> */}
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="icon-grid menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i class="ti-user menu-icon"></i>
              <span className="menu-title">Members</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <NavLink className="nav-link" to="/transporters">
                    Transporters
                  </NavLink>
                </li>
                <li className="nav-item">
                  {" "}
                  <NavLink className="nav-link" to="/loaders">
                    Loaders
                  </NavLink>
                </li>
                <li className="nav-item">
                  {" "}
                  <NavLink className="nav-link" to="/drivers">
                    Drivers
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/loads">
              <i className="ti-package menu-icon"></i>
              <span className="menu-title">Loads</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/vehicles">
              <i className="ti-truck menu-icon"></i>
              <span className="menu-title">Vehicles</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#booking-sec"
              aria-expanded="false"
              aria-controls="booking-sec"
            >
              <i className="icon-layout menu-icon"></i>
              <span className="menu-title">Booking</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="booking-sec">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <NavLink className="nav-link" to="/quotes">
                    Quotes
                  </NavLink>
                </li>
                <li className="nav-item">
                  {" "}
                  <NavLink className="nav-link" to="/confirmed">
                    Confirmed
                  </NavLink>
                </li>
                <li className="nav-item">
                  {" "}
                  <NavLink className="nav-link" to="/complete-trips">
                    Complete Trips
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="ti-id-badge menu-icon"></i>
              <span className="menu-title">Subscriptions</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#close-trip-sec"
              aria-expanded="false"
              aria-controls="close-trip-sec"
            >
              <i className="icon-layout menu-icon"></i>
              <span className="menu-title">Report</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="close-trip-sec">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <NavLink className="nav-link" to="/close-trips">
                    Close trips
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          {/* master db section ------------------------------------ */}

          <hr />
          <h4>MasterDb</h4>

          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#add-types-sec"
              aria-expanded="false"
              aria-controls="add-types-sec"
            >
              <i className="ti-server menu-icon"></i>
              <span className="menu-title">Add types</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="add-types-sec">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <NavLink className="nav-link" to="/vehicle-types">
                    Vehicle Types
                  </NavLink>
                </li>
                <li className="nav-item">
                  {" "}
                  <NavLink className="nav-link" to="/meterial-types">
                    Material types
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="icon-paper menu-icon"></i>
              <span className="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LeftSideBar;
