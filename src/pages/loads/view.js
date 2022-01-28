import { Link } from "react-router-dom";
import { ModalView, VisibleStatusUpdater } from "../../component";
import { statusChange } from "../../store/slice/load-slice";
const View = ({ data: load }) => {
  return (
    <ModalView
      title="Vehicle Type Details"
      modalId="modal-load-details"
      cancelButtonText="Ok"
    >
      <div className="form-group">
        <VisibleStatusUpdater
          bootstapId="status-changer-2"
          status={load.visible}
          id={load._id}
          // changeStatus={statusChange}
        />
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">Load No : {load.load_no}</li>
        <li className="list-group-item">Loader : {load.loader.user_name}</li>
        <li className="list-group-item">
          Pickup Address : {load.pickup.address}
        </li>
        <li className="list-group-item">Delevery : {load.delivery.address}</li>
        <li className="list-group-item">Value : &#8377;{load.value}</li>
        <li className="list-group-item">Weight : {load.weight}</li>
        <li className="list-group-item">Material Type :{load.meterial_type}</li>
        <li className="list-group-item">Created Date :{load.date}</li>
        <li className="list-group-item">Expected Date :{load.date}</li>
        <li className="list-group-item">Remark :{load.remark}</li>
        <li className="list-group-item">Created At :{load.createdAt}</li>
      </ul>
    </ModalView>
  );
};

export default View;
