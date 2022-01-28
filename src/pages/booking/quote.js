import React, { useEffect } from "react";
import View from "./View";
import Delete from "./delete";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllQuote,
  deleteQuote,
  updateQuote,
  getQuote,
} from "../../store/slice/quotes-slice";

const Quote = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllQuote());
  }, []);

  const quotes = useSelector((state) => state.quote.quotes);
  const quote = useSelector((state) => state.quote.quote);

  return (
    <div className="content-wrapper">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Quotes</h4>
            {/* <button type="button" class="btn btn-primary btn-icon-text">
              <i class="ti-package btn-icon-prepend"></i>
              Create Loads
            </button> */}

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>SI NO</th>
                    <th>Quote no</th>
                    <th>Load no</th>
                    <th>Transporter</th>
                    <th>Loader</th>
                    <th>Quted Price</th>
                    <th>Destination</th>
                    <th>Weight</th>
                    <th>Value</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.quote_no}</td>
                        <td>{item?.load_no?.load_no}</td>
                        <td>{item?.transporter?.user_name}</td>
                        <td>{item.loader_name}</td>
                        <td>{item.quoted_price}</td>
                        <td>
                          {item.pickup} - {item.destination}
                        </td>
                        <td>{item.weight}</td>
                        <td>{item.value}</td>
                        <td>{item.start_date}</td>
                        <td>{item.end_date}</td>
                        <td>{item.date}</td>
                        <td>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-success dropdown-toggle"
                              id="dropdownMenuIconButton9"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ti-package"></i>
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuIconButton9"
                            >
                              <h6 className="dropdown-header">Action</h6>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#modal-quote-view"
                                onClick={() => dispatch(getQuote(item._id))}
                              >
                                View Details
                              </a>
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#modal-booking-delete"
                                onClick={() => dispatch(getQuote(item._id))}
                              >
                                Delete
                              </a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">
                                Verify Details
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {!quotes || (
        <>
          <View data={quote} />
          <Delete
            onClick={() => {
              dispatch(deleteQuote(quote._id))
                .unwrap()
                .then((r) => {
                  toast.warn("Deleted Successfuly...", { type: "success" });
                })
                .catch((e) => {
                  toast.warn("Something Wrong !", { type: "error" });
                });
            }}
          />
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default Quote;
