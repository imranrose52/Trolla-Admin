import { Link } from "react-router-dom";
import { ModalView, StatushChangerButton } from "../../component";
import { statusChange } from "../../store/slice/loader-slice";

const View = ({ data: loader }) => {
  return (
    <ModalView
      title="Loader Details"
      modalId="modal-loader-details"
      cancelButtonText="Ok"
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="form-group">
          <StatushChangerButton
            bootstapId="status-changer-1"
            status={loader.status}
            id={loader._id}
            changeStatus={statusChange}
          />
        </div>
        <img
          src={`${process.env.REACT_APP_PUBLIC_STORAGE}profiles/${loader.profile_pic}`}
          className="img-fluid img-thumbnail"
          style={{ width: 100, height: 100 }}
          alt="imagess"
        />
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">User Name : {loader.user_name}</li>
        <li className="list-group-item">
          Mobile Primary : {loader.mobile_primary}
        </li>
        <li className="list-group-item">
          Mobile Secondary : {loader.mobile_secondary}
        </li>
        <li className="list-group-item">Email : {loader.email}</li>
        <li className="list-group-item">Address : {loader.address}</li>
        <li className="list-group-item">
          Created date : {loader.created_date}
        </li>
        <li className="list-group-item">
          Verified date : {loader.verified_at}
        </li>
        {/* <li className="list-group-item">
          ID Proof :{" "}
          <a
            target="_blank"
            href={`${process.env.REACT_APP_PUBLIC_STORAGE}kyc_document/${loader.documents.id_proof}`}
          >
            <button
              type="button"
              class="btn btn-primary btn-sm ml-1"
              onClick={() => {}}
            >
              View
            </button>
          </a>
        </li> */}
        {/* <li className="list-group-item">
          Address Proof Secondary :
          <a
            target="_blank"
            href={`${process.env.REACT_APP_PUBLIC_STORAGE}kyc_document/${loader.documents.address_proof}`}
          >
            <button type="button" class="btn btn-primary btn-sm ml-1">
              View
            </button>
          </a>
        </li> */}
      </ul>
    </ModalView>
  );
};

export default View;
