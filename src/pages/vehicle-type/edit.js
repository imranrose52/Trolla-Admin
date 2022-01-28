import { useState, useEffect } from "react";
import { ModalSubmit } from "../../component";
import {
  setVehicleType,
  updateVihecleType,
  setLength,
  setTyre,
  setBodyType,
  setCapacity,
} from "../../store/slice/vehicle-type-slice";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";

const Edit = ({ data: vehicle_type }) => {
  const dispatch = useDispatch();

  const updated_vehicle_type = useSelector(
    (state) => state.vehicle_type.vehicle_type
  );

  return (
    <ModalSubmit
      title="Edit Meterial"
      modalId="modal-vehicle-type-edit"
      onClick={() => {
        dispatch(updateVihecleType(updated_vehicle_type))
          .unwrap()
          .then((originalPromiseResult) => {
            toast.warn("Meterial Updated successfully...", { type: "success" });
          })
          .catch((rejectedValueOrSerializedError) => {
            toast.warn("Something wrong !", { type: "error" });
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
            value={vehicle_type.vehicle_type}
            onChange={(e) => dispatch(setVehicleType(e.target.value))}
            placeholder="Vihecle Name"
          />
        </div>

        <div className="form-group">
          <label for="#"> Vehicle Capacity</label>
          <input
            type="number"
            className="form-control"
            id="#"
            value={vehicle_type.capacity}
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
            value={vehicle_type.body_type}
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
            value={vehicle_type.tyre}
            onChange={(e) => dispatch(setTyre(e.target.value))}
            placeholder="Tyre"
          />
        </div>

        <div className="form-group">
          <label for="#"> Vehicle Length</label>
          <input
            type="number"
            className="form-control"
            id="#"
            value={vehicle_type.length}
            onChange={(e) => dispatch(setLength(e.target.value))}
            placeholder="Vehicle Length"
          />
        </div>
      </form>
    </ModalSubmit>
  );
};

export default Edit;
