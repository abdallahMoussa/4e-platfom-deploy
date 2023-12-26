import React, { Fragment, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../../../helpers";
import CheckBoxDropDown from "../../../../../pmo/output-review-tool/components/CheckBoxDropDown";
import Swal from "sweetalert2";
import { Modal } from "react-bootstrap";

type PopupProps = {
  show: boolean;
  handleClose: any;
};
const PaymentRequestPopup: React.FC<PopupProps> = ({ show, handleClose }) => {
  const intl = useIntl();
  const showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "SentSuccessfully" }),
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
      {/* <div
        className="modal fade"
        id="Rega_modal-payment-request"
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
                    {intl.formatMessage({ id: "PaymentRequest" })}{" "}
                  </span>

                  <span className="mt-1 fw-semibold fs-5 text-muted">
                    {intl.formatMessage({ id: "PleaseEnterTheData" })}{" "}
                  </span>
                </h3>
              </Modal.Title>
            </div>
          </Modal.Header>

          <Modal.Body className="pb-0 mx-4">
            <div className="mb-15 mt-15">
              <div className="container">
                <div className="row g-5">
                  <div className="col-6">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {intl.formatMessage({ id: "PaymentName" })}{" "}
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-cash-register special"></i>
                        </span>
                      </div>
                      <input
                        id="riskTitle"
                        type="text"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id: "PaymentName",
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      الدفعات المتبقيه
                    </label>
                    <select
                      id="riskNotes"
                      className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
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
                        الدفعات المتبقيه
                      </option>
                      <option value="2">دفعة 1 </option>
                      <option value="3">دفعة 2 </option>
                    </select>
                  </div>
                </div>
              </div>

              <label className="form-label px-2  fontSz-6 mb-5">
                {" "}
                {intl.formatMessage({ id: "AchievementFile" })}{" "}
              </label>
              <div className=" notice d-flex bg-light-primary rounded border-primary border border-dashed mb-1  mx-5">
                <label
                  htmlFor="outputAttachment"
                  className="form-label px-2  fontSz-6 dropzone-select   w-100 uploadFile-style inputAreaHeight"
                >
                  <div className="row align-items-center">
                    <div className="col-md-1">
                      <img
                        src="/media/pmo/uploadFile.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-8">
                      <p className="text-primary fw-bolder my-1">
                        {" "}
                        {intl.formatMessage({
                          id: "UploadAchievementFile",
                        })}{" "}
                      </p>
                      <p>
                        {intl.formatMessage({
                          id: "AttachAchievementFile",
                        })}{" "}
                      </p>
                    </div>
                  </div>
                </label>
                <div
                  className="dropzone dropzone-queue mb-2"
                  id="kt_dropzonejs_example_3"
                >
                  <div className="dropzone-panel mb-lg-0 mb-2">
                    <input
                      multiple
                      type="file"
                      accept="image/*"
                      id="outputAttachment"
                      name="attachments"
                      placeholder="رفع الملفات"
                      className="dropzone-select w-100 uploadFile-style inputAreaHeight d-none"
                    />
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
          {/* </div> */}
        </div>
        {/* </div>
        </div>
      </div> */}
      </Modal>
    </Fragment>
  );
};

export default PaymentRequestPopup;
