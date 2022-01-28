import { Link } from "react-router-dom";
import { ModalView, VisibleStatusUpdater } from "../../component";
import { changeStatusVihecleType } from "../../store/slice/vehicle-type-slice";

const View = ({ data: vehicle_type }) => {
  return (
    <ModalView
      title="Vehicle Type Details"
      modalId="modal-vehicle-type-details"
      cancelButtonText="Ok"
    >
      <div className="form-group">
        <VisibleStatusUpdater
          bootstapId="status-changer-2"
          status={vehicle_type.visible}
          id={vehicle_type._id}
          changeStatus={changeStatusVihecleType}
        />
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Vehicle Type : {vehicle_type.vehicle_type}
        </li>
        <li className="list-group-item">Capacity : {vehicle_type.capacity}</li>
        <li className="list-group-item">
          Body type : {vehicle_type.body_type}
        </li>
        <li className="list-group-item">Tyre : {vehicle_type.tyre}</li>
        <li className="list-group-item">Length : {vehicle_type.length}</li>
        <li className="list-group-item">
          Created At :{vehicle_type.createdAt}
        </li>
      </ul>
    </ModalView>
  );
};

export default View;
