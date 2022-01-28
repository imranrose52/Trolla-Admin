import { useState } from "react";
import { ModalSubmit } from "../../component";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import {
  createVehicleType,
  setVehicleType,
  setBodyType,
  setCapacity,
  setLength,
  setTyre,
} from "../../store/slice/vehicle-type-slice";

const Add = () => {
  const dispatch = useDispatch();
  const vehicle_type = useSelector((state) => state.vehicle_type.vehicle_type);
  return (
    <ModalSubmit
      title="Add Meterial"
      modalId="modal-vehicle-type-add"
      onClick={() => {
        dispatch(createVehicleType(vehicle_type))
          .unwrap()
          .then((originalPromiseResult) => {
            toast.warn("Meterial Added successfully...", { type: "success" });
          })
          .catch((rejectedValueOrSerializedError) => {
            toast.warn("Meterial Exist !", { type: "error" });
          });
      }}
    >
      <form className="forms-sample">
        <div className="form-group">
          <label for="#"> Vihecle Type</label>
          <input
            type="text"
            className="form-control"
            id="#"
            // value={vehicle_type.vehecle_type}
            onChange={(e) => dispatch(setVehicleType(e.target.value))}
            placeholder="Vihecle Name"
          />
        </div>

        <div className="form-group">
          <label for="#"> Vihecle Capacity</label>
          <input
            type="number"
            className="form-control"
            id="#"
            onChange={(e) => dispatch(setCapacity(e.target.value))}
            placeholder="Vihecle Capacity"
          />
        </div>

        <div className="form-group">
          <label for="#"> Body Type</label>
          <input
            type="text"
            className="form-control"
            id="#"
            onChange={(e) => dispatch(setBodyType(e.target.value))}
            placeholder="Body type"
          />
        </div>

        <div className="form-group">
          <label for="#"> Tyre</label>
          <input
            type="number"
            className="form-control"
            id="#"
            onChange={(e) => dispatch(setTyre(e.target.value))}
            placeholder="Tyre"
          />
        </div>

        <div className="form-group">
          <label for="#"> Vehicle Lenght</label>
          <input
            type="number"
            className="form-control"
            id="#"
            onChange={(e) => dispatch(setLength(e.target.value))}
            placeholder="Vehicle Length"
          />
        </div>
      </form>
    </ModalSubmit>
  );
};

export default Add;
