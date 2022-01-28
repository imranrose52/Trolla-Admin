import { ModalSubmit } from "../../component";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserName,
  setMobilePrimary,
  setEmail,
  setAddress,
  updateLoader,
} from "../../store/slice/loader-slice";

const Edit = ({ data: loader }) => {
  const dispatch = useDispatch();
  const loader_update = useSelector((state) => state.loader.loader);
  return (
    <ModalSubmit
      title="Edit User"
      modalId="modal-loader-edit"
      onClick={() => {
        dispatch(updateLoader(loader_update))
          .unwrap()
          .then((originalPromiseResult) => {
            toast.warn("Loader Updated successfully...", { type: "success" });
          })
          .catch((rejectedValueOrSerializedError) => {
            toast.warn("Something wrong !", { type: "error" });
          });
      }}
    >
      <form className="forms-sample">
        <div className="form-group">
          <label for="#">Username</label>
          <input
            type="text"
            className="form-control"
            id="#"
            value={loader.user_name}
            onChange={(e) => dispatch(setUserName(e.target.value))}
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <label for="#">Mobile Primary</label>
          <input
            type="number"
            className="form-control"
            id="#"
            value={loader.mobile_primary}
            onChange={(e) => dispatch(setMobilePrimary(e.target.value))}
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
            value={loader.address}
            onChange={(e) => dispatch(setAddress(e.target.value))}
            placeholder="Address"
          />
        </div>
      </form>
    </ModalSubmit>
  );
};

export default Edit;
