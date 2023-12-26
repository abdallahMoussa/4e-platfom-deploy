import React, { Fragment, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../../../helpers";
import Swal from "sweetalert2";
import { Modal } from "react-bootstrap";

type PopupProps = {
  show: boolean;
  handleClose: any;
};
const EditStatusPopup: React.FC<PopupProps> = ({ show, handleClose }) => {
  const intl = useIntl();

  const showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "EditedSuccessfully" }),
      icon: "success",
      heightAuto: false,
      buttonsStyling: false,
      confirmButtonText: intl.formatMessage({ id: "Agree" }),
      customClass: { confirmButton: "btn btn-primary" },
    });
  };

  return (
    <Fragment>
      {/* <div
        className="modal fade"
        id="Rega_modal_edit_status"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered mw-1000px">
          <div className="modal-content">
            <div className="modal-header justify-content-end border-0 pb-0">
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <KTSVG
                  path="/media/icons/duotune/arrows/arr061.svg"
                  className="svg-icon-1"
                />
              </div>
            </div> */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="card">
          {/* <div className="card-body mx-5"> */}
          <Modal.Header
            closeButton
            // className="flex-column-reverse"
            style={{
              alignItems: intl.locale == "ar" ? "flex-start" : "center",
              flexDirection: intl.locale == "en" ? "column-reverse" : "row",
            }}
            className="pb-0 border-bottom-0"
            // className="align-items-start"
          >
            <div className="card-header mt-10 d-flex justify-content-center w-100 px-4 border-bottom-0">
              <Modal.Title id="contained-modal-title-vcenter">
                <h3 className="card-title flex-column align-items-center">
                  <span className="card-label fw-bolder fs-3 mb-2 ">
                    {intl.formatMessage({ id: "EditStatus" })}
                  </span>

                  <span className="mt-1 fw-semibold fs-5 text-muted">
                    {intl.formatMessage({ id: "PleaseEnterTheData" })}
                  </span>
                </h3>
              </Modal.Title>
            </div>
          </Modal.Header>

          <Modal.Body className="pb-0 mx-2">
            <div className="mb-8 mt-8">
              <div className="container">
                <div className="row g-5">
                  <div className="col-6">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {intl.formatMessage({ id: "EditStatus" })}
                    </label>
                    <select
                      className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                      data-kt-select2="true"
                      data-placeholder="اختر"
                      data-dropdown-parent="#kt_menu_62775e8642438"
                      data-allow-clear="true"
                      data-select2-id="select2-data-4-vqtd"
                      tabIndex={-1}
                      aria-hidden="true"
                      placeholder="اسم الوثيقه"
                    >
                      <option selected disabled>
                        {intl.formatMessage({ id: "Select" })}
                      </option>
                      <option>مغلقه</option>
                      <option>مفتوحه</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer className="justify-content-center pb-5 pt-3 border-top-0">
            <div className="mt-5 mb-5 col-12 col-lg-7 mx-auto">
              <div className="outputCard card-diff-toolbar w-100 mt-3 d-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center w-50">
                  <div
                    // data-bs-dismiss="modal"
                    onClick={handleClose}
                    className="btn btn-secondary mx-1 text-center w-100"
                  >
                    {intl.formatMessage({ id: "Cancel" })}
                  </div>
                  <button
                    type="button"
                    // data-bs-dismiss="modal"
                    className="btn btn-primary mx-1 text-center w-100"
                    style={{ border: "none" }}
                    onClick={(event) => {
                      event.preventDefault();
                      handleClose();
                      showSuccessAlert();
                    }}
                  >
                    {intl.formatMessage({ id: "Save" })}
                  </button>
                </div>
              </div>
            </div>
          </Modal.Footer>
          {/* </div> */}
        </div>
        {/* </div>
        </div>
      </div> */}
      </Modal>
    </Fragment>
  );
};

export default EditStatusPopup;
