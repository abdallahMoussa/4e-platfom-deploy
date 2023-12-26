import React, { useState } from "react";
import { useIntl } from "react-intl";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { EmployeeHierarchyPopup } from "../../../partials/EmployeeHierarchyPopup";

type AddPopupProps = {
  show?: any;
  handleClose?: any;
};

const AddEscalationLevelPopup: React.FC<AddPopupProps> = ({
  show,
  handleClose,
}) => {
  const intl = useIntl();
  const [modalEmployeeShow, setModalEmployeeShow] = useState<boolean>(false);
  const showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "AddedSuccessfully" }),
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
    <>
      <div className="modal fade" aria-hidden="true">
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
                  <h3 className="card-title flex-column align-items-center ">
                    <span className="card-label fw-bolder fs-3 mb-2 ">
                      {intl.formatMessage({ id: "AddNewLevel" })}
                    </span>
                  </h3>
                </Modal.Title>
              </div>
            </Modal.Header>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Modal.Body>
                {/* <Row className="justify-content-center mt-5 mb-20">
                  <div className="text-center">
                    <h3> {intl.formatMessage({ id: "EditData" })} </h3>
                  </div>
                </Row> */}
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6">
                    <div className="mb-2 pt-2 pb-3">
                      <label
                        className="form-label px-2  fs-6 text-gray-700 required"
                        htmlFor="LevelName"
                      >
                        {intl.formatMessage({
                          id: "LevelName",
                        })}
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa-solid fa-stairs special"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-solid"
                          name="LevelName"
                          value=""
                          placeholder={intl.formatMessage({
                            id: "LevelName",
                          })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-lg-flex justify-content-center">
                    <div className="mb-2 pt-2 pb-3 w-300px">
                      <label className="form-label px-2  fs-6 text-gray-700 required">
                        <bdi>
                          {intl.formatMessage({
                            id: "Duration",
                          })}
                        </bdi>
                      </label>
                      <div className="d-flex justify-content-between w-50">
                        <div className="d-flex align-items-center">
                          <input
                            type="text"
                            value="0"
                            className="form-control form-control-solid text-center"
                            style={{ width: "50px" }}
                          />
                          <span className="d-inline-block ms-2 me-4">
                            {intl.formatMessage({
                              id: "Days",
                            })}
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <input
                            type="text"
                            value="0"
                            className="form-control form-control-solid text-center"
                            style={{ width: "50px" }}
                          />
                          <span className="d-inline-block ms-2 me-4">
                            {intl.formatMessage({
                              id: "Hours",
                            })}
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <input
                            type="text"
                            value="0"
                            className="form-control 
                                          form-control-solid text-center"
                            style={{ width: "50px" }}
                          />
                          <span className="d-inline-block ms-2 me-4">
                            {intl.formatMessage({
                              id: "Minutes",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6">
                    <div className="mb-2 pt-2 pb-3 ">
                      <label className="form-label px-2  fs-6 text-gray-700 required">
                        {intl.formatMessage({
                          id: "Responsible",
                        })}
                      </label>

                      <div className="mx-auto mt-1  ">
                        <div className="input-group" role="button">
                          <input
                            type="select"
                            className="form-control form-control-solid ps-10"
                            name="search"
                            value=""
                            placeholder={intl.formatMessage({
                              id: "Choose",
                            })}
                            role="button"
                            readOnly={true}
                          />

                          <span
                            className="input-group-text"
                            onClick={() => setModalEmployeeShow(true)}
                          >
                            <i className="bi bi-diagram-3 fs-3 text-muted"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className="justify-content-center py-2">
                <div className="mt-5 mb-5 col-12 col-lg-7 mx-auto">
                  <div className="outputCard card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                    <div className="d-flex justify-content-center align-items-center w-50">
                      <div
                        className="btn btn-secondary mx-1 text-center w-100"
                        onClick={handleClose}
                      >
                        {intl.formatMessage({ id: "Cancel" })}
                      </div>
                      <button
                        type="button"
                        className="btn btn-success mx-1 text-center w-100"
                        style={{ border: "none" }}
                        onClick={() => {
                          handleClose();
                          showSuccessAlert();
                        }}
                      >
                        {intl.formatMessage({ id: "Agree" })}
                      </button>
                    </div>
                  </div>
                </div>
              </Modal.Footer>
            </form>
          </div>
        </Modal>
      </div>
      
      <EmployeeHierarchyPopup
        show={modalEmployeeShow}
        handleClose={() => setModalEmployeeShow(false)}
      />
    </>
  );
};

export default AddEscalationLevelPopup;
