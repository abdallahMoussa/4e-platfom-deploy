import React, { Fragment } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../helpers";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";

type PopupProps = {
  show?: any;
  handleClose?: any;
};
const EditExperience: React.FC<PopupProps> = ({ show, handleClose }) => {
  const intl = useIntl();
  const showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "ModifiedSuccessfully" }),
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };

  return (
    <Fragment>
      <div className="modal-dialog modal-dialog-centered mw-1000px">
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
                  {" "}
                  <h3 className="card-title flex-column align-items-center">
                    <span className="card-label fw-bolder fs-3 mb-2 ">
                      {intl.formatMessage({ id: "EditExperience" })}
                    </span>
                    <span className="mt-1 fw-semibold fs-5 text-muted">
                      {intl.formatMessage({ id: "PleaseEnterTheData" })} :
                    </span>
                  </h3>
                </Modal.Title>
              </div>
            </Modal.Header>

            <form noValidate>
              <Modal.Body>
                <div className="row">
                  <div className="col-6">
                    <div className="mb-2 pt-2 pb-3 ">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({ id: "ExperienceName" })}
                      </label>
                      <div className="mx-auto mt-1">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="bi bi-person-lines-fill special"></i>
                            </span>
                          </div>
                          <input
                            id="riskTitle"
                            type="text"
                            className="form-control"
                            placeholder={intl.formatMessage({
                              id: "ExperienceName",
                            })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 pt-5 pb-3">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({ id: "Specialization" })}
                      </label>
                      <div className="mx-auto mt-1">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="special fas fa-file-signature"></i>
                            </span>
                          </div>
                          <input
                            id="riskTitle"
                            type="text"
                            className="form-control"
                            placeholder={intl.formatMessage({
                              id: "Specialization",
                            })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-2 pt-2 pb-3 ">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({
                          id: "NumberOfYearsOfExperience",
                        })}
                      </label>
                      <div className="mx-auto mt-1  ">
                        <select
                          id="riskOccurring"
                          className="form-select form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                          data-kt-select2="true"
                          data-placeholder="اختر"
                          data-dropdown-parent="#kt_menu_62775e8642438"
                          data-allow-clear="true"
                          data-select2-id="select2-data-4-vqtd"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option
                            disabled
                            selected
                            data-select2-id="select2-data-6-hquo"
                          >
                            {intl.formatMessage({
                              id: "NumberOfYearsOfExperience",
                            })}
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-2 pt-2 pb-3 ">
                      <label className="form-label px-2  fs-6 text-gray-700">
                        {intl.formatMessage({ id: "PlaceOfPractice" })}
                      </label>
                      <div className="mx-auto mt-1">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-map-marker-alt special"></i>
                            </span>
                          </div>
                          <input
                            id="riskTitle"
                            type="text"
                            className="form-control"
                            placeholder={intl.formatMessage({
                              id: "PlaceOfPractice",
                            })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className="justify-content-center py-2">
                <div className="col-12 col-lg-7 mx-auto mb-10">
                  <div className=" card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                    <div className="d-flex justify-content-center align-items-center w-50">
                      <div
                        className="btn btn-secondary mx-1 text-center w-100"
                        onClick={handleClose}
                      >
                        {intl.formatMessage({ id: "Cancel" })}
                      </div>
                      <div
                        className="btn btn-primary mx-1 text-center w-100"
                        data-bs-dismiss="modal"
                        onClick={(event) => {
                          event.preventDefault();
                          handleClose();
                          showSuccessAlert();
                        }}
                      >
                        {intl.formatMessage({ id: "Save" })}
                      </div>
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

export default EditExperience;
