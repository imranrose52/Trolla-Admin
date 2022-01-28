import React from "react";
import { ModalView, StatushChangerButton } from "../../component";
import { changeStatus } from "../../store/slice/transporter-slice";

const View = ({ data: transporter }) => {
  return (
    <div>
      <ModalView
        title="View Transporters"
        modalId="modal-transporter-view"
        cancelButtonText="Ok"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="form-group">
            <StatushChangerButton
              bootstapId="status-changer-1"
              status={transporter.status}
              id={transporter._id}
              changeStatus={changeStatus}
            />
          </div>
          {/* <img
            src={`${process.env.REACT_APP_PUBLIC_STORAGE}profiles/${transporter.profile_pic}`}
            className="img-fluid img-thumbnail"
            style={{ width: 100, height: 100 }}
            alt="imagess"
          /> */}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item ">
            User Name : {transporter.user_name}
          </li>
          <li className="list-group-item ">
            Mobile Primary : {transporter.mobile_primary}
          </li>
          <li className="list-group-item ">
            Mobile Secondary : {transporter.mobile_primary}
          </li>
          <li className="list-group-item ">Email : {transporter.email}</li>
          <li className="list-group-item ">Address : {transporter.address}</li>
          {/* <li className="list-group-item">
            ID Proof :{" "}
            <a
              target="_blank"
              href={`${process.env.REACT_APP_PUBLIC_STORAGE}kyc_document/${transporter.documents.id_proof}`}
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
              href={`${process.env.REACT_APP_PUBLIC_STORAGE}kyc_document/${transporter.documents.address_proof}`}
            >
              <button type="button" class="btn btn-primary btn-sm ml-1">
                View
              </button>
            </a>
          </li> */}
        </ul>
      </ModalView>
    </div>
  );
};

export default View;
