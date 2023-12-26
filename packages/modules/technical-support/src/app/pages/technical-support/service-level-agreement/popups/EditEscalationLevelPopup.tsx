import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Row } from "react-bootstrap";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import { EmployeeHierarchyPopup } from "../../../partials/EmployeeHierarchyPopup";

type EditPopupProps = {
  showEdit?: any;
  handleCloseEdit?: any;
  id: number;
};

export const EditEscalationLevelPopup: FC<EditPopupProps> = ({
  showEdit,
  handleCloseEdit,
  id,
}) => {
  const intl = useIntl();
  const [modalEmployeeShow, setModalEmployeeShow] = useState<boolean>(false);

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
    <>
      <div className="modal-dialog ">
        <Modal centered show={showEdit} onHide={handleCloseEdit} size="lg">
          <Modal.Header
            closeButton
            style={{
              alignItems: intl.locale == "ar" ? "flex-start" : "center",
              flexDirection: intl.locale == "en" ? "column-reverse" : "row",
            }}
          >
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Modal.Body>
              <Row className="justify-content-center mt-5 mb-20">
                <div className="text-center">
                  <h3> {intl.formatMessage({ id: "EditData" })} </h3>
                </div>
              </Row>
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
              <div className="row">
                <div className="col-12 col-lg-7 mx-auto mb-10 mt-5">
                  <div className="outputCard card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                    <div className="d-flex justify-content-center align-items-center w-100">
                      <button
                        type="reset"
                        className="btn btn-secondary me-3 w-100"
                        onClick={handleCloseEdit}
                      >
                        {intl.formatMessage({ id: "Cancel" })}
                      </button>

                      <button
                        type="submit"
                        onClick={() => {
                          handleCloseEdit();
                          showSuccessAlert();
                        }}
                        className="  btn btn-primary me-5 w-100 "
                      >
                        <span className="indicator-label">
                          {intl.formatMessage({ id: "Save" })}
                        </span>
                        <span className="indicator-progress">
                          {intl.formatMessage({ id: "Edit" })}
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>{" "}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
      <EmployeeHierarchyPopup
        show={modalEmployeeShow}
        handleClose={() => setModalEmployeeShow(false)}
      />
    </>
  );
};
