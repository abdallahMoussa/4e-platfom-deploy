import React from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../helpers";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";

type PopupProps = {
  show?: any;
  handleClose?: any;
};
const AddSubItemPopup: React.FC<PopupProps> = ({ show, handleClose }) => {
  const intl = useIntl();
  const showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "AddedSuccessfully" }),
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: { confirmButton: "btn btn-primary" },
    });
  };
  return (
    <>
      {/* <div className="modal-dialog modal-dialog-centered mw-1000px"> */}
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
                  <h3 className="card-title flex-column align-items-center">
                    <span className="card-label fw-bolder fs-3 mb-2 ">
                      {intl.formatMessage({ id: "SubItemAddition" })}
                    </span>

                    <span className=" mb-5 mt-1 fw-semibold fs-5 text-muted">
                      {intl.formatMessage({ id: "ChooseDataClassification" })}
                    </span>
                  </h3>
                </Modal.Title>
              </div>
            </Modal.Header>
            <Modal.Body>
              <div className="row mb-3">
                <div className="col-6">
                  <div className="mb-2 pt-2 pb-3 ">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {intl.formatMessage({ id: "CountryName" })}&nbsp;(
                      {intl.formatMessage({ id: "TheService" })})
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-globe special"></i>
                        </span>
                      </div>
                      <input
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id: "CountryName",
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-2 pt-2 pb-3 ">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {intl.formatMessage({
                        id: "DurationOfServiceAvailability",
                      })}
                    </label>
                    <select
                      id="domain"
                      className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                      data-kt-select2="true"
                      data-placeholder={intl.formatMessage({
                        id: "DurationOfServiceAvailability",
                      })}
                      data-dropdown-parent="#kt_menu_62775e8642438"
                      data-allow-clear="true"
                      data-select2-id="select2-data-4-vqtd"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option disabled selected>
                        {intl.formatMessage({
                          id: "DurationOfServiceAvailability",
                        })}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-2 pt-2 pb-3 ">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {intl.formatMessage({ id: "ImpactOfItem" })}
                    </label>
                    <select
                      id="domain"
                      className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                      data-kt-select2="true"
                      data-placeholder={intl.formatMessage({
                        id: "ImpactOfItem",
                      })}
                      data-dropdown-parent="#kt_menu_62775e8642438"
                      data-allow-clear="true"
                      data-select2-id="select2-data-4-vqtd"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option disabled selected>
                        {intl.formatMessage({ id: "ImpactOfItem" })}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-2 pt-2 pb-3 ">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {intl.formatMessage({ id: "PriorityLevel" })}
                    </label>
                    <select
                      id="domain"
                      className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                      data-kt-select2="true"
                      data-placeholder={intl.formatMessage({
                        id: "PriorityLevel",
                      })}
                      data-dropdown-parent="#kt_menu_62775e8642438"
                      data-allow-clear="true"
                      data-select2-id="select2-data-4-vqtd"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option disabled selected>
                        {intl.formatMessage({ id: "PriorityLevel" })}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-2 pt-2 pb-3 ">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {intl.formatMessage({
                        id: "DurationOfServiceImplementation",
                      })}
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-clock special"></i>
                        </span>
                      </div>
                      <input
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id: "SLA",
                        })}
                      />
                    </div>
                    {/* <div className="input-group">
                        <button className="btn btn-secondary position-absolute start-0">
                          +
                        </button>
                       
                      </div> */}
                  </div>
                </div>

                {/* <div className="mb-3"> */}
                <div className="col-lg-6">
                  <label htmlFor="reason" className="form-label px-2 fontSz-6">
                    {intl.formatMessage({ id: "Description" })}
                  </label>

                  <textarea
                    id="reason"
                    className="form-control h-100px pt-4 form-control-lg form-control-solid mb-3 mb-lg-2"
                    placeholder={intl.formatMessage({
                      id: "Description",
                    })}
                  ></textarea>
                </div>
                {/* </div> */}
              </div>

              <div className="mb-7">
                <div className=" d-inline ms-4 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                  <input
                    className="form-check-input widget-9-check xCheckBg fs-3"
                    type="checkbox"
                    id="Checkboxes1"
                  />
                </div>
                <label
                  htmlFor="Checkboxes1"
                  className={`fw-bolder text-dark d-inline-block fs-6 ${
                    intl.locale == "en" ? "mx-3" : ""
                  }`}
                >
                  {intl.formatMessage({
                    id: "DoesThisServiceRequireAnApprovalRequest",
                  })}{" "}
                </label>
              </div>
            </Modal.Body>
            <Modal.Footer className="justify-content-center py-2">
              <div className="mt-5 mb-5 col-12 col-lg-7 mx-auto">
                <div className="outputCard card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                  <div className="d-flex justify-content-center align-items-center w-50">
                    <div
                      onClick={handleClose}
                      className="btn btn-secondary mx-1 text-center w-100"
                    >
                      {intl.formatMessage({ id: "Cancel" })}
                    </div>
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      className="btn btn-success mx-1 text-center w-100"
                      style={{ border: "none" }}
                      onClick={() => {
                        handleClose();
                        showSuccessAlert();
                      }}
                    >
                      {intl.formatMessage({ id: "Add" })}
                    </button>
                  </div>
                </div>
              </div>
            </Modal.Footer>
          </div>
        </Modal>
      {/* </div> */}
    </>
  );
};

export default AddSubItemPopup;
