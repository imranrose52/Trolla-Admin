import { ModalConfirm } from "../../component";

const Delete = ({ load, onClick }) => {
  return (
    <ModalConfirm
      title="Delete User"
      modalId="modal-load-delete"
      confirmButtonText="Ok"
      cancelButtonText="Cancel"
      onClick={onClick}
    >
      <h5>Are you sure ?</h5>
    </ModalConfirm>
  );
};

export default Delete;
