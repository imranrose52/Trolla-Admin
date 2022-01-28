import { useState } from "react";
import { ModalSubmit } from "../../component";
import { useDispatch, useSelector } from "react-redux";
import {
  createLoader,
  // setMobilePrimary,
  // setMobileSecondary,
  // setUserName,
  // setEmail,
  // setAddress,
  addLoader,
} from "../../store/slice/loader-slice";

import { ToastContainer, toast } from "react-toastify";

const Add = () => {
  const [loader, setLoader] = useState({
    user_name: "",
    mobile_primary: "",
    email: "",
    mobile_secondary: "",
    address: "",
  });
  const dispatch = useDispatch();
  // const loader = useSelector((state) => state.loader.loader);

  return (
    <ModalSubmit
      title="Add User"
      modalId="modal-loader-add"
      onClick={() => {
        dispatch(createLoader(loader))
          .unwrap()
          .then((r) => {
            toast.warn("Loader added  Successfuly...", { type: "success" });
          })
          .catch((e) => {
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
              setLoader((pev) => ({ ...pev, mobile_primary: e.target.value }))
            }
            // onChange={(e) => dispatch(setMobilePrimary(e.target.value))}
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
              setLoader((pev) => ({ ...pev, user_name: e.target.value }))
            }
            // onChange={(e) => dispatch(setUserName(e.target.value))}
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
            // onChange={(e) => dispatch(setMobileSecondary(e.target.value))}
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
            // onChange={(e) => dispatch(setEmail(e.target.value))}
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
            // onChange={(e) => dispatch(setAddress(e.target.value))}
            placeholder="Address"
          />
        </div>
      </form>
    </ModalSubmit>
  );
};

export default Add;
