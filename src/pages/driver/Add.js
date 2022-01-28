/** @format */

import React, { useEffect, useState } from "react";
import { ModalSubmit } from "../../component";
import { createDriver } from "../../store/slice/driver-slice";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../store/slice/transporter-slice";
// import {
//   setTransporter,
//   setDriverName,
//   setMobilePrimary,
//   setMobileSecondary,
//   setEmail,
//   setAddress,
//   addDriver,
// } from "../../store/slice/driver-slice";

const Add = () => {
  useEffect(() => {
    dispatch(getAll());
  }, []);

  // fetch all transporters
  const alltrans = useSelector((state) => state.transporter.transporters);
  // const driver = useSelector((state) => state.driver.driver);

  const dispatch = useDispatch();
  const [driver, setDriver] = useState({
    driver_name: "",
    transporter: "",
    mobile_primary: "",
    email: "",
    mobile_secondary: "",
    address: "",
  });
  return (
    <div>
      <ModalSubmit
        title="Add user"
        modalId="modal-driver-add"
        onClick={() => {
          dispatch(createDriver(driver))
            .unwrap()
            .then((originalPromiseResult) => {
              toast.warn("Driver Added successfully...", { type: "success" });
            })
            .catch((rejectedValueOrSerializedError) => {
              toast.warn("Something Went Wrong !", { type: "error" });
            });
        }}>
        <form className="forms-sample">
          <div className="form-group">
            <label for="#">Transporter</label>

            <select
              class="custom-select"
              onChange={(e) =>
                setDriver((pev) => ({
                  ...pev,
                  transporter: e.target.value,
                }))
              }>
              {alltrans.map((item) => {
                return <option value={item._id}>{item.user_name}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label for="#">Unique Mobile Number</label>
            <input
              type="number"
              className="form-control"
              id="#"
              onChange={(e) =>
                setDriver((pev) => ({
                  ...pev,
                  mobile_primary: e.target.value,
                }))
              }
              placeholder="Mobile Primary"
            />
          </div>

          <div className="form-group">
            <label for="#">Driver Name</label>
            <input
              type="text"
              className="form-control"
              id="#"
              onChange={(e) =>
                setDriver((pev) => ({
                  ...pev,
                  driver_name: e.target.value,
                }))
              }
              placeholder="Driver Name"
            />
          </div>
          <div className="form-group">
            <label for="#">Mobile Secondary</label>
            <input
              type="number"
              className="form-control"
              id="#"
              onChange={(e) =>
                setDriver((pev) => ({
                  ...pev,
                  mobile_secondary: e.target.value,
                }))
              }
              placeholder="Mobile Secondary"
            />
          </div>
          <div className="form-group">
            <label for="#">Email address</label>
            <input
              type="email"
              className="form-control"
              id="#"
              onChange={(e) =>
                setDriver((pev) => ({
                  ...pev,
                  email: e.target.value,
                }))
              }
              placeholder="Email"
            />
          </div>

          <div className="form-group">
            <label for="#">Address</label>
            <input
              type="text"
              className="form-control"
              id="#"
              onChange={(e) =>
                setDriver((pev) => ({
                  ...pev,
                  address: e.target.value,
                }))
              }
              placeholder="Address"
            />
          </div>
        </form>
      </ModalSubmit>
    </div>
  );
};

export default Add;
