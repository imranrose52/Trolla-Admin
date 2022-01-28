import React from "react";
import { ModalView } from "../../component";

const View = ({ data: quote }) => {
  return (
    <div>
      <ModalView title="view" modalId="modal-quote-view" cancelButtonText="Ok">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Quote No : {quote?.quote_no}</li>
            <li className="list-group-item">
              Load No : {quote?.load_no?.load_no}
            </li>
            <li className="list-group-item">
              Transporter : {quote?.transporter?.user_name}
            </li>
            <li className="list-group-item">Loader : {quote?.loader_name}</li>
            <li className="list-group-item">
              Quoted Price : {quote?.quoted_price}
            </li>
            <li className="list-group-item">
              Pickup Address : {quote?.pickup}
            </li>
            <li className="list-group-item">
              Destination Address : {quote?.destination}
            </li>
            <li className="list-group-item">Weight : {quote?.weight}</li>
            <li className="list-group-item">Value : {quote?.value}</li>
            <li className="list-group-item">
              Started date : {quote?.start_date}
            </li>
            <li className="list-group-item">End date : {quote?.end_date}</li>
          </ul>
        </div>
      </ModalView>
    </div>
  );
};

export default View;
