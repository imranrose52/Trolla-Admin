import React from "react";
import { ModalView, StatushChangerButton } from "../../component";
import { changeStatus } from "../../store/slice/driver-slice";

const View = ({ data: driver }) => {
  return (
    <div>
      <ModalView
        title="Driver view"
        modalId="modal-driver-view"
        cancelButtonText="Ok"
      >
        <div className="form-group">
          <StatushChangerButton
            bootstapId="status-changer-1"
            status={driver.status}
            id={driver._id}
            changeStatus={changeStatus}
          />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Transporter :{driver?.transporter?.user_name}
            </li>
            <li className="list-group-item">
              Driver Name : {driver.driver_name}
            </li>
            <li className="list-group-item">
              Mobile Primary :{driver.mobile_primary}
            </li>
            <li className="list-group-item">
              Mobile Secondary : {driver.mobile_secondary}
            </li>
            <li className="list-group-item">Email : {driver.email}</li>
            <li className="list-group-item">Address : {driver.address}</li>
            <li className="list-group-item">Date : {driver.date} </li>
            {/* <li className="list-group-item">
            ID Proof :{" "}
            <a
              target="_blank"
              href={`${process.env.REACT_APP_PUBLIC_STORAGE}kyc_document/${driver.documents.id_proof}`}
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
              href={`${process.env.REACT_APP_PUBLIC_STORAGE}kyc_document/${driver.documents.address_proof}`}
            >
              <button type="button" class="btn btn-primary btn-sm ml-1">
                View
              </button>
            </a>
          </li> */}
          </ul>
        </div>
      </ModalView>
    </div>
  );
};

export default View;
