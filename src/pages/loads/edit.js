import { useState, useEffect } from "react";
import { ModalSubmit } from "../../component";

import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import {
  updateLoad,
  setLoader,
  setPickup,
  setDelivery,
  setVehicleType,
  setMeterialType,
  setWeight,
  setValue,
  setRemark,
} from "../../store/slice/load-slice";

const Edit = ({ data: load }) => {
  const dispatch = useDispatch();

  const update_load = useSelector((state) => state.load.load);
  const loaders = useSelector((state) => state.loader.loaders);

  // store all the loads to useState --------------------
  // useEffect(() => {
  //   setAllLoad(load);
  // }, [load]);

  return (
    <ModalSubmit
      title="Edit Meterial"
      modalId="modal-load-edit"
      onClick={() => {
        dispatch(updateLoad(update_load))
          .unwrap()
          .then((originalPromiseResult) => {
            toast.warn("Loads Updated successfully...", { type: "success" });
          })
          .catch((rejectedValueOrSerializedError) => {
            toast.warn("Something wrong !", { type: "error" });
          });
      }}
    >
      <form className="forms-sample">
        <div className="form-group">
          <label for="#"> Loader</label>
          <input
            type="text"
            className="form-control"
            id="#"
            value={load.load_no}
            // onChange={(e) => dispatch(setLoader(e.target.value))}
            placeholder="Loader"
          />
        </div>

        <div className="form-group">
          <label for="#">Loaders</label>
          <select
            class="custom-select"
           value={load.loader?.user_name}
            onChange={(e) => dispatch(setLoader(e.target.value))}
          >
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
            id="#"
            value={load.pickup.address}
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
            value={load.delivery.address}
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
            value={load.vehicle_type}
            onChange={(e) => dispatch(setVehicleType(e.target.value))}
            placeholder="Vehicle Type "
          />
        </div>

        <div className="form-group">
          <label for="#"> Value</label>
          <input
            type="number"
            className="form-control"
            id="#"
            value={load.value}
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
            value={load.weight}
            onChange={(e) => dispatch(setWeight(e.target.value))}
            placeholder="Weight "
          />
        </div>

        <div className="form-group">
          <label for="#"> Material Type</label>
          <input
            type="text"
            className="form-control"
            id="#"
            value={load.meterial_type}
            onChange={(e) => dispatch(setMeterialType(e.target.value))}
            placeholder="Material Type "
          />
        </div>

        <div className="form-group">
          <label for="#"> Remark</label>
          <textarea
            className="form-control"
            id="#"
            value={load.remark}
            onChange={(e) => dispatch(setRemark(e.target.value))}
            placeholder=" remark.... "
          />
        </div>
      </form>
    </ModalSubmit>
  );
};

export default Edit;
