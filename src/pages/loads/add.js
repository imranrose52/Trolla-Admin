/** @format */

import { useState } from "react";
import { ModalSubmit } from "../../component";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import {
  createLoads,
  setLoader,
  setPickup,
  setDelivery,
  setMeterialType,
  setVehicleType,
  setValue,
  setWeight,
  setRemark,
} from "../../store/slice/load-slice";

const Add = () => {
  const dispatch = useDispatch();
  const load = useSelector((state) => state.load.load);
  const loaders = useSelector((state) => state.loader.loaders);

  return (
    <ModalSubmit
      title="Add Meterial"
      modalId="modal-load-add"
      onClick={() => {
        dispatch(createLoads(load))
          .unwrap()
          .then((originalPromiseResult) => {
            toast.warn("Loads Added successfully...", { type: "success" });
          })
          .catch((rejectedValueOrSerializedError) => {
            toast.warn("Something Went Wrong !", { type: "error" });
          });
      }}>
      <form className="forms-sample">
        <div className="form-group">
          <label for="#"> Loader Name</label>
          
          {/* <input
            type="text"
            className="form-control"
            id="#"
            onChange={(e) => dispatch(setLoader(e.target.value))}
            placeholder="Loader Name"
          /> */}
          <select
            class="custom-select"
            onChange={(e) => dispatch(setLoader(e.target.value))}>
            {loaders.map((item) => {
              return <option value={item._id}>{item.user_name}</option>;
            })}
          </select>
        </div>

        <div className="form-group">
          <label for="#"> Pickup Address</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => dispatch(setPickup(e.target.value))}
            placeholder="Pickup Address"
          />
        </div>

        <div className="form-group">
          <label for="#"> Delevery Address</label>
          <input
            type="text"
            className="form-control"
            id="#"
            onChange={(e) => dispatch(setDelivery(e.target.value))}
            placeholder="delevery address"
          />
        </div>

        <div className="form-group">
          <label for="#"> Vehicle Type</label>
          <input
            type="text"
            className="form-control"
            id="#"
            onChange={(e) => dispatch(setVehicleType(e.target.value))}
            placeholder="Vehicle Type "
          />
        </div>

        <div className="form-group">
          <label for="#"> Value</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => dispatch(setValue(e.target.value))}
            placeholder="Value"
          />
        </div>

        <div className="form-group">
          <label for="#"> Weight</label>
          <input
            type="text"
            className="form-control"
            id="#"
            onChange={(e) => dispatch(setWeight(e.target.value))}
            placeholder="Weight "
          />
        </div>

        <div className="form-group">
          <label for="#"> Material Type</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => dispatch(setMeterialType(e.target.value))}
            placeholder="Material Type "
          />
        </div>

        <div className="form-group">
          <label for="#"> Remark</label>
          <textarea
            className="form-control"
            onChange={(e) => dispatch(setRemark(e.target.value))}
            placeholder=" remark.... "
          />
        </div>
      </form>
    </ModalSubmit>
  );
};

export default Add;
