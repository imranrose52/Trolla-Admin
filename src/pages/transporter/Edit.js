import React from "react";
import { ModalSubmit } from "../../component";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import {
  setMobilePrimary,
  setMobileSecondary,
  setUserName,
  setEmail,
  setAddress,
  setVerifiedBy,
  setVerifiedAt,
  updateTransporter,
} from "../../store/slice/transporter-slice";

const Edit = ({ data: transporter }) => {
  const dispatch = useDispatch();

  const update_transporter = useSelector(
    (state) => state.transporter.transporter
  );
  return (
    <div>
      <ModalSubmit
        title="Edit Transporter"
        modalId="modal-transporter-edit"
        onClick={() => {
          dispatch(updateTransporter(update_transporter))
            .unwrap()
            .then((originalPromiseResult) => {
              toast.warn("transporter Updated successfully...", {
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
            <label for="#">Unique Mobile Number</label>
            <input
              type="number"
              className="form-control"
              id="#"
              value={transporter.mobile_primary}
              onChange={(e) => dispatch(setMobilePrimary(e.target.value))}
              placeholder="Mobile Primary"
            />
          </div>

          <div className="form-group">
            <label for="#">Name</label>
            <input
              type="text"
              className="form-control"
              id="#"
              value={transporter.user_name}
              onChange={(e) => dispatch(setUserName(e.target.value))}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label for="#">Mobile Secondary</label>
            <input
              type="number"
              className="form-control"
              id="#"
              value={transporter.mobile_secondary}
              onChange={(e) => dispatch(setMobileSecondary(e.target.value))}
              placeholder="Mobile Secondary"
            />
          </div>
          <div className="form-group">
            <label for="#">Email address</label>
            <input
              type="email"
              className="form-control"
              id="#"
              value={transporter.email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              placeholder="Email"
            />
          </div>

          <div className="form-group">
            <label for="#">Address</label>
            <input
              type="text"
              className="form-control"
              id="#"
              value={transporter.address}
              onChange={(e) => dispatch(setAddress(e.target.value))}
              placeholder="Address"
            />
          </div>

          <div className="form-group">
            <label for="#">Verified By</label>
            <input
              type="text"
              className="form-control"
              id="#"
              value={transporter.verified_by}
              onChange={(e) => dispatch(setVerifiedBy(e.target.value))}
              placeholder="Verified by"
            />
          </div>

          <div className="form-group">
            <label for="#">Verified At</label>
            <input
              type="text"
              className="form-control"
              id="#"
              value={transporter.verified_at}
              onChange={(e) => dispatch(setVerifiedAt(e.target.value))}
              placeholder="Verified at"
            />
          </div>
        </form>
      </ModalSubmit>
      <ToastContainer />
    </div>
  );
};

export default Edit;
