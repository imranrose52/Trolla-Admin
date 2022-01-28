import { useState, useEffect } from "react";
import { ModalSubmit } from "../../component";
import {
  setMaterialName,
  updateMeterial,
} from "../../store/slice/material-slice";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";

const Edit = ({ data }) => {
  const dispatch = useDispatch();

  const material = useSelector((state) => state.material.material);

  return (
    <ModalSubmit
      title="Edit Meterial"
      modalId="modal-meterial-edit"
      onClick={() => {
        dispatch(updateMeterial(material))
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
          <label for="#">Meterial Name</label>
          <input
            type="text"
            className="form-control"
            id="#"
            value={material.material_name}
            placeholder="Meterial Name"
            onChange={(e) => dispatch(setMaterialName(e.target.value))}
          />
        </div>
        {/* <div className="form-group">
          <label for="#">Mobile Secondary</label>
          <input
            type="number"
            className="form-control"
            id="#"
            value={loader.mobile_secondary}
            placeholder="Mobile Secondary"
          />
        </div>
        <div className="form-group">
          <label for="#">Email address</label>
          <input
            type="email"
            className="form-control"
            id="#"
            value={loader.email}
            placeholder="Email"
          />
        </div>

        <div className="form-group">
          <label for="#">Address</label>
          <input
            type="text"
            className="form-control"
            id="#"
            value={loader.address}
            placeholder="Address"
          />
        </div> */}
      </form>
    </ModalSubmit>
  );
};

export default Edit;
