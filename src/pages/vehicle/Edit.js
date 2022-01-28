import React, { useEffect, useState } from "react";
import { ModalSubmit } from "../../component";
import { ToastContainer, toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

import {
  setTransporterName,
  setVehicleNumber,
  setBodyType,
  setCapacity,
  setVehicleType,
  setTyre,
  updateVehicle,
} from "../../store/slice/vehicle-slice";
import { getAll } from "../../store/slice/transporter-slice";

const Edit = ({ data: vehicle }) => {
  // store all the vehicle to allVehicle state---------------------

  const update_vehicle = useSelector((state) => state.vehicle.vehicle);

  const transporters = useSelector((state) => state.transporter.transporters);

  // useEffect(() => {
  //   dispatch(getAll());
  // }, []);

  // onchange vehicle -------------------------

  // const [allVehicle, setAllVehicle] = useState({
  //   transporter_name: "",
  //   vehicle_number: "",
  //   vehicle_type: "",
  //   capacity: "",
  //   body_type: "",
  //   tyre: "",
  // });
  const dispatch = useDispatch();

  return (
    <div>
      <ModalSubmit
        title="Edit Vehicle"
        modalId="modal-vehicle-edit"
        onClick={() => {
          dispatch(updateVehicle(update_vehicle))
            .unwrap()
            .then((originalPromiseResult) => {
              toast.warn("Vehicle Updated successfully...", {
                type: "success",
              });
            })
            .catch((rejectedValueOrSerializedError) => {
              toast.warn("Something wrong !", { type: "error" });
            });
        }}
      >
        <form className="forms-sample">
          <div className="form-group">
            <label for="#">Transporter Name</label>

            <select
              class="custom-select"
              onChange={(e) => dispatch(setTransporterName(e.target.value))}
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
              value={vehicle.vehicle_number}
              placeholder="Vehicle Number"
              onChange={(e) => dispatch(setVehicleNumber(e.target.value))}
              // onChange={(e) =>
              //   setAllVehicle({
              //     ...allVehicle,
              //     vehicle_number: e.target.value,
              //   })
              // }
            />
          </div>
          <div className="form-group">
            <label for="#">Vehicle Type</label>
            <input
              type="text"
              className="form-control"
              id="#"
              value={vehicle.vehicle_type}
              placeholder="Vehicle Type"
              onChange={(e) => dispatch(setVehicleType(e.target.value))}
              // onChange={(e) =>
              //   setAllVehicle({
              //     ...allVehicle,
              //     vehicle_type: e.target.value,
              //   })
              // }
            />
          </div>

          <div className="form-group">
            <label for="#">Capacity</label>
            <input
              type="text"
              className="form-control"
              id="#"
              value={vehicle.capacity}
              placeholder="Capacity"
              onChange={(e) => dispatch(setCapacity(e.target.value))}
              // onChange={(e) =>
              //   setAllVehicle({
              //     ...allVehicle,
              //     capacity: e.target.value,
              //   })
              // }
            />
          </div>
          <div className="form-group">
            <label for="#">Body Type</label>
            <input
              type="text"
              className="form-control"
              id="#"
              value={vehicle.body_type}
              placeholder="Vehicle type"
              onChange={(e) => dispatch(setBodyType(e.target.value))}
              // onChange={(e) =>
              //   setAllVehicle({
              //     ...allVehicle,
              //     body_type: e.target.value,
              //   })
              // }
            />
          </div>
          <div className="form-group">
            <label for="#">Tyre</label>
            <input
              type="number"
              className="form-control"
              id="#"
              value={vehicle.tyre}
              placeholder="Tyre"
              onChange={(e) => dispatch(setTyre(e.target.value))}
              // onChange={(e) =>
              //   setAllVehicle({
              //     ...allVehicle,
              //     tyre: e.target.value,
              //   })
              // }
            />
          </div>
        </form>
      </ModalSubmit>
      <ToastContainer />
    </div>
  );
};

export default Edit;
