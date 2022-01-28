import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ModalSubmit } from "../../component";
import { createTransporter, setAddress } from "../../store/slice/transporter-slice";
import { ToastContainer, toast } from "react-toastify";

const AddModal = () => {
  const dispatch = useDispatch();

  const [transporter, setTransporter] = useState({
    user_name: "",
    mobile_primary: "",
    email: "",
    mobile_secondary: "",
    address: "",
    verified_at: "",
    verified_by: "",
  });
  return (
    <div>
      <ModalSubmit
        title="Add User"
        modalId="modal-transport-add"
        onClick={() => {
          dispatch(createTransporter(transporter))
            .unwrap()
            .then((originalPromiseResult) => {
              toast.warn("Transporter Added successfully...", {
                type: "success",
              });
            })
            .catch((rejectedValueOrSerializedError) => {
              toast.warn("Something Went Wrong !", { type: "error" });
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
              onChange={(e) =>
                setTransporter((pev) => ({
                  ...pev,
                  mobile_primary: e.target.value,
                }))
              }
              placeholder="Mobile Primary"
              
            />
          </div>

          <div className="form-group">
            <label for="#">Name</label>
            <input
              type="text"
              className="form-control"
              id="#"
              onChange={(e) =>
                setTransporter((pev) => ({
                  ...pev,
                  user_name: e.target.value,
                }))
              }
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label for="#">Mobile Secondary</label>
            <input
              type="number"
              className="form-control"
              id="#"
              onChange={(e) =>
                setTransporter((pev) => ({
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
                setTransporter((pev) => ({
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
                setTransporter((pev) => ({
                  ...pev,
                  address: e.target.value,
                }))
              }
              placeholder="Address"
            />
          </div>

          <div className="form-group">
            <label for="#">Verified By</label>
            <input
              type="text"
              className="form-control"
              id="#"
              onChange={(e) =>
                setTransporter((pev) => ({
                  ...pev,
                  verified_by: e.target.value,
                }))
              }
              placeholder="Verified by"
            />
          </div>

          <div className="form-group">
            <label for="#">Verified At</label>
            <input
              type="text"
              className="form-control"
              id="#"
              onChange={(e) =>
                setTransporter((pev) => ({
                  ...pev,
                  verified_at: e.target.value,
                }))
              }
              placeholder="Verified at"
            />
          </div>
        </form>
      </ModalSubmit>
      <ToastContainer />
    </div>
  );
};

export default AddModal;
