import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../helpers";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";

type PopupProps = {
  show?: any;
  handleClose?: any;
};
const AddNotesPopup: React.FC<PopupProps> = ({ show, handleClose }) => {
  const intl = useIntl();
  const [rating, setRating] = useState(3);

  let showAlert = () => {
    Swal.fire({
      text: "تمت الإضافه بنجاح",
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: "موافق",
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="Rega_modal_add_note"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <Modal
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <div className="card">
            <div className="mx-5"></div>
            <Modal.Header
              closeButton
              style={{
                alignItems: intl.locale == "ar" ? "flex-start" : "center",
                flexDirection: intl.locale == "en" ? "column-reverse" : "row",
              }}
            >
              <div className="card-header w-100 px-1 d-flex justify-content-center pb-2  border-bottom-0 mt-10">
                <Modal.Title>
                  <div className="mb-9 text-center">
                    <h1 className="mb-3">
                      {intl.formatMessage({ id: "AddNote" })}
                    </h1>
                    <h6 className="mb-2 text-muted">
                      {intl.formatMessage({
                        id: "PleaseAddYourCommentsAndChooseYourRating",
                      })}
                    </h6>
                  </div>
                </Modal.Title>
              </div>
            </Modal.Header>

            <form
              className="d-block w-100"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Modal.Body>
                <div className="row w-100 mb-7">
                  <div className="col-lg-12">
                    <h2>{intl.formatMessage({ id: "Notes" })}</h2>
                    <hr />
                    <textarea
                      id="notes"
                      className="mt-7 form-control h-100px pt-4 form-control-lg form-control-solid mb-3 mb-lg-2"
                      placeholder={intl.formatMessage({
                        id: "AddNotes",
                      })}
                    ></textarea>
                  </div>
                </div>
                <h2>{intl.formatMessage({ id: "Rating" })}</h2>
                <hr />
                <div className="row w-100 mb-7">
                  <div className="col-lg-12">
                    <p className=" mb-3 fs-2 text-muted ">
                      {intl.formatMessage({ id: "AddYourRating" })}
                    </p>
                    <div className="mt-5 d-flex justify-content-center align-items-center">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          style={{ fontSize: "45px" }}
                          className={`${
                            index < rating ? "text-warning" : "text-muted"
                          } cursor-pointer  mx-3`}
                          onClick={() => setRating(index + 1)}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className="justify-content-center py-2">
                <div className="mt-9 mb-5 col-12 col-lg-8 mx-auto">
                  <div className="outputCard card-diff-toolbar pt-5 w-100 mt-3 d-flex justify-content-center">
                    <div className="d-flex justify-content-center align-items-center w-50">
                      <div
                        onClick={handleClose}
                        className="btn btn-secondary mx-3 text-center w-100"
                      >
                        {intl.formatMessage({ id: "Cancel" })}
                      </div>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        className="btn btn-success mx-3 text-center w-100"
                        style={{ border: "none" }}
                        onClick={() => {
                          handleClose();
                          showAlert();
                        }}
                      >
                        {intl.formatMessage({ id: "Send" })}
                      </button>
                    </div>
                  </div>
                </div>
              </Modal.Footer>
            </form>
          </div>
        </Modal>
      </div>
    </Fragment>
  );
};

export default AddNotesPopup;
