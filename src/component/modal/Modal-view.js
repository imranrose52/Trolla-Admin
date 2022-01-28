const ModalView = (props) => {
  return (
    <div className="modal fade shadow rounded card-body" id={props.modalId}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button data-dismiss="modal" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            {props.children}
            <div className="modal-footer">
              {/* <button
                type="submit"
                className="btn btn-primary"
                // data-bs-dismiss="modal"
                onClick={props.onClick}
              >
                Submit
              </button> */}
              <button data-dismiss="modal" className="btn btn-secondary">
                {props.cancelButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalView;
