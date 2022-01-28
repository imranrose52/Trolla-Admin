import React from "react";
import { ModalView, StatushChangerButton } from "../../component";
import { changeStatus } from "../../store/slice/vehicle-slice";

const View = ({ data: vehicle }) => {
  return (
    <div>
      <ModalView
        title="Vehicle  Details"
        modalId="modal-vehicle-view"
        cancelButtonText="Ok"
      >
        <div className="form-group">
          {/* <StatushChangerButton
            bootstapId="status-changer-1"
            status={vehicle.status}
            id={vehicle._id}
          /> */}
          <div className="form-group">
            <StatushChangerButton
              bootstapId="status-changer-1"
              status={vehicle.status}
              id={vehicle._id}
              changeStatus={changeStatus}
            />
          </div>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Transporter Name : {vehicle?.transporter_name?.user_name}
          </li>

          <li className="list-group-item">
            Vehicle Number : {vehicle.vehicle_number}
          </li>
          <li className="list-group-item">
            Vehicle Type : {vehicle.vehicle_type}
          </li>
          <li className="list-group-item">Capacity : {vehicle.capacity}</li>
          <li className="list-group-item">Body Type : {vehicle.body_type}</li>
          <li className="list-group-item">Tyre : {vehicle.tyre}</li>
          <li className="list-group-item">Date : {vehicle.date}</li>
        </ul>
      </ModalView>
    </div>
  );
};

export default View;
