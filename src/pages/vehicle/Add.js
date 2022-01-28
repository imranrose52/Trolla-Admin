import React, { useState } from "react";
import { ModalSubmit } from "../../component";
import { useDispatch, useSelector } from "react-redux";
import {
  createVehicle,
  setTransporterName,
  setVehicleNumber,
  setVehicleType,
  setBodyType,
  setCapacity,
  setTyre,
} from "../../store/slice/vehicle-slice";

import { ToastContainer, toast } from "react-toastify";


const Add = () => {
  const dispatch = useDispatch();

  const transporters = useSelector((state) => state.transporter.transporters);
  // const vehicle = useSelector((state) => state.vehicle.vehicle);

  const [vehicle, setVehicle] = useState({
    transporter_name: "",
    tyre: "",
    vehicle_type: "",
    vehicle_number: "",
    body_type: "",
    capacity: "",
  });
  return (
    <div>
      <ModalSubmit
        title="Add User"
        modalId="modal-vehicle-add"
        onClick={() => {
          dispatch(createVehicle(vehicle))
            .unwrap()
            .then((originalPromiseResult) => {
              toast.warn("User Added successfully...", { type: "success" });
            })
            .catch((rejectedValueOrSerializedError) => {
              toast.warn("User Exist !", { type: "error" });
            });
        }}
      >
        <form className="forms-sample">
          <div className="form-group">
            <label for="#">Transporter Name</label>

            <select
              class="custom-select"
              // onChange={(e) => dispatch(setTransporterName(e.target.value))}
              onChange={(e) =>
                setVehicle((pev) => ({
                  ...pev,
                  transporter_name: e.target.value,
                }))
              }
            >
              {transporters.map((item) => {
                return <option value={item._id}>{item.user_name}</option>;
              })}
            </select>
          </div>

          <div className="form-group">
            <label for="#">Vehicle Number</label>
            <input
              type="text"
              className="form-control"
              id="#"
              // onChange={(e) => dispatch(setVehicleNumber(e.target.value))}

              onChange={(e) =>
                setVehicle((pev) => ({
                  ...pev,
                  vehicle_number: e.target.value,
                }))
              }
              placeholder="Vehicle Number"
            />
          </div>
          <div className="form-group">
            <label for="#">Vehicle Type</label>
            <input
              type="text"
              className="form-control"
              id="#"
              onChange={(e) =>
                setVehicle((pev) => ({
                  ...pev,
                  vehicle_type: e.target.value,
                }))
              }

              // onChange={(e) => dispatch(setVehicleType(e.target.value))}
              placeholder="Vehicle Type"
            />
          </div>
          <div className="form-group">
            <label for="#">Body Type</label>
            <input
              type="text"
              className="form-control"
              id="#"
              // onChange={(e) => dispatch(setBodyType(e.target.value))}

              onChange={(e) =>
                setVehicle((pev) => ({ ...pev, body_type: e.target.value }))
              }
              placeholder="Body Type"
            />
          </div>

          <div className="form-group">
            <label for="#">Capacity</label>
            <input
              type="text"
              className="form-control"
              id="#"
              // onChange={(e) => dispatch(setCapacity(e.target.value))}

              onChange={(e) =>
                setVehicle((pev) => ({ ...pev, capacity: e.target.value }))
              }
              placeholder="Capacity"
            />
          </div>
          <div className="form-group">
            <label for="#">Tyre</label>
            <input
              type="number"
              className="form-control"
              id="#"
              // onChange={(e) => dispatch(setTyre(e.target.value))}

              onChange={(e) =>
                setVehicle((pev) => ({ ...pev, tyre: e.target.value }))
              }
              placeholder="Tyre"
            />
          </div>
        </form>
      </ModalSubmit>
    </div>
  );
};

export default Add;
