import React from "react";
import { ModalView } from "../../component";

const View = ({ data: confirm }) => {
  return (
    <div>
      <ModalView
        title="View Confirm Booking"
        modalId="modal-confirm-view"
        cancelButtonText="Ok"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Quote No : {confirm?.quote_details?.quote_no}
            </li>
            <li className="list-group-item">
              Load No : {confirm?.load_no?.load_no}
            </li>
            <li className="list-group-item">
              Transporter : {confirm?.transporter?.user_name}
            </li>
            <li className="list-group-item">
              Loader : {confirm?.quote_details?.loader_name}
            </li>
            <li className="list-group-item">
              Destination : {confirm?.quote_details?.pickup} -{" "}
              {confirm?.quote_details?.destination}
            </li>
            <li className="list-group-item">Value : {confirm?.value}</li>
            <li className="list-group-item">Paid : {confirm?.paid}</li>
            <li className="list-group-item">
              Payment Mode : {confirm?.payment_mode}
            </li>
            <li className="list-group-item">Started date : {confirm?.date}</li>
            <li className="list-group-item">
              Weight : {confirm?.quote_details?.weight}
            </li>
            <li className="list-group-item">Value : {confirm?.value}</li>
            <li className="list-group-item">Started date : {confirm?.date}</li>
            <li className="list-group-item">End date : {confirm?.date}</li>
          </ul>
        </div>
      </ModalView>
    </div>
  );
};

export default View;
