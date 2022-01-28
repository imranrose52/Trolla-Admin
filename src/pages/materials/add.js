import { useState } from "react";
import { ModalSubmit } from "../../component";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import { createMaterial } from "../../store/slice/material-slice";

const Add = () => {
  const dispatch = useDispatch();
  const [material, setMeterial] = useState({
    material_name: "",
  });
  return (
    <ModalSubmit
      title="Add Meterial"
      modalId="modal-meterial-add"
      onClick={() => {
        dispatch(createMaterial(material))
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
          <label for="#">Unique Merterial Name</label>
          <input
            type="text"
            className="form-control"
            id="#"
            onChange={(e) =>
              setMeterial((pev) => ({ ...pev, material_name: e.target.value }))
            }
            placeholder="Meterial Name"
          />
        </div>
        {/* 
        <div className="form-group">
          <label for="#">Name</label>
          <input
            type="text"
            className="form-control"
            id="#"
            onChange={(e) =>
              setLoader((pev) => ({ ...pev, user_name: e.target.value }))
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
              setLoader((pev) => ({ ...pev, mobile_secondary: e.target.value }))
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
              setLoader((pev) => ({ ...pev, email: e.target.value }))
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
              setLoader((pev) => ({ ...pev, address: e.target.value }))
            }
            placeholder="Address"
          />
        </div> */}
      </form>
    </ModalSubmit>
  );
};

export default Add;
