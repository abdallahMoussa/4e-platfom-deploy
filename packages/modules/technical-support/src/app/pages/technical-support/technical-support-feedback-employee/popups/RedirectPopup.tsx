import React, { Fragment } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../../app/helpers";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";

type PopupProps = {
  show?: any;
  handleClose?: any;
};
const RedirectPopup: React.FC<PopupProps> = ({ show, handleClose }) => {
  const intl = useIntl();

  let showAlert = () => {
    Swal.fire({
      text: "تم الارسال بنجاح",
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
      <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15 mb-7">
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <div className="card">
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
                      {intl.formatMessage({ id: "ReportRedirect" })}
                    </h1>
                    <h6 className="mb-2 text-muted">
                      {intl.formatMessage({
                        id: "PleaseEnterTheFollowingData",
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
              {" "}
              <Modal.Body>
                <div className="row w-100 mb-3">
                  <div className="col-6">
                    <div className="mb-2 pt-2 pb-3 ">
                      <label
                        htmlFor="category"
                        className="form-label px-2 fontSz-6"
                      >
                        {intl.formatMessage({ id: "ReportCategory" })}
                      </label>

                      <select
                        id="category"
                        className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                        data-kt-select2="true"
                        data-placeholder={intl.formatMessage({
                          id: "ReportCategory",
                        })}
                        data-dropdown-parent="#kt_menu_62775e8642438"
                        data-allow-clear="true"
                        data-select2-id="select2-data-4-vqtd"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option disabled selected>
                          {intl.formatMessage({ id: "ReportCategory" })}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-2 pt-2 pb-3 ">
                      <label
                        htmlFor="employee"
                        className="form-label px-2 fontSz-6"
                      >
                        {intl.formatMessage({
                          id: "EmployeeOfTheSameDepartment",
                        })}
                      </label>

                      <select
                        id="employee"
                        className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                        data-kt-select2="true"
                        data-placeholder={intl.formatMessage({
                          id: "EmployeeOfTheSameDepartment",
                        })}
                        data-dropdown-parent="#kt_menu_62775e8642438"
                        data-allow-clear="true"
                        data-select2-id="select2-data-4-vqtd"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option disabled selected>
                          {intl.formatMessage({
                            id: "EmployeeOfTheSameDepartment",
                          })}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row w-100 mb-3">
                  <div className="col-lg-12">
                    <label
                      htmlFor="reason"
                      className="form-label px-2 fontSz-6"
                    >
                      {intl.formatMessage({ id: "RedirectReason" })}
                    </label>

                    <textarea
                      id="reason"
                      className="form-control h-150px pt-4 form-control-lg form-control-solid mb-3 mb-lg-2"
                      placeholder={intl.formatMessage({
                        id: "RedirectReason",
                      })}
                    ></textarea>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className="justify-content-center py-2">
                <div className="mt-5 mb-5 col-12 col-lg-8 mx-auto">
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

export default RedirectPopup;
