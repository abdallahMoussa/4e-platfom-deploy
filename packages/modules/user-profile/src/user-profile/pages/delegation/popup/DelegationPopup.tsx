import React, { Fragment, useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../helpers";
import Swal from "sweetalert2";
import { Modal } from "react-bootstrap";

type PopupProps = {
  show: boolean;
  handleClose: any;
};
const DelegationPopup = ({ show, handleClose }: PopupProps) => {
  const intl = useIntl();
  let [activeState, setActiveState] = useState(true);
  let [nonActiveState, setNonActiveState] = useState(false);
  let handleActive = () => {
    setActiveState(true);
    setNonActiveState(false);
  };
  let handleNonActive = () => {
    setActiveState(false);
    setNonActiveState(true);
  };
  let [all, setAll] = useState(false);
  let [power1, setPower1] = useState(false);
  let [power2, setPower2] = useState(false);
  let [power3, setPower3] = useState(false);
  let handleAll = () => {
    setAll(true);
    setPower1(true);
    setPower2(true);
    setPower3(true);
  };
  let handlePower1 = () => {
    setAll(false);
    setPower1(true);
    setPower2(false);
    setPower3(false);
  };
  let handlePower2 = () => {
    setAll(false);
    setPower1(false);
    setPower2(true);
    setPower3(false);
  };
  let handlePower3 = () => {
    setAll(false);
    setPower1(false);
    setPower2(false);
    setPower3(true);
  };
  const showSuccessAlert = () => {
    Swal.fire({
      text: intl.formatMessage({ id: "AcceptedSuccessfully" }),
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
        id="Rega_modal_delegation"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content rounded">
            <div className="modal-header justify-content-end border-0 pb-0">
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
                aria-hidden="true"
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="mb-4"
          >
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
                      {intl.formatMessage({ id: "AddingDelegation" })}
                    </span>
                  </h3>
                </Modal.Title>
              </div>
            </Modal.Header>

            <Modal.Body className="pb-0 mx-4">
              <div className="row mb-5">
                <div className="col-sm-6 col-12">
                  <div className="d-flex flex-column mb-8">
                    <label className="fs-6 fw-bold mb-2" htmlFor="employee">
                      {intl.formatMessage({ id: "TheEmployee" })}
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user-cog special"></i>
                        </span>
                      </div>
                      <input
                        className="form-control"
                        name="employee"
                        id="employee"
                        placeholder={intl.formatMessage({
                          id: "TheEmployee",
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="d-flex flex-column mb-8">
                    <label className="fs-6 fw-bold mb-2" htmlFor="start date">
                      {intl.formatMessage({ id: "DelegationStatus" })}{" "}
                    </label>
                    <div className="form-control form-control-solid">
                      <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                        <input
                          className="form-check-input widget-9-check xCheckBg"
                          type="checkbox"
                          id="Checkbox1"
                          checked={activeState}
                          onClick={handleActive}
                        />
                      </div>
                      <label
                        htmlFor="Checkbox1"
                        className=" d-inline-block ms-4"
                      >
                        {intl.formatMessage({
                          id: "Active",
                        })}{" "}
                      </label>
                      <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                        <input
                          className="form-check-input widget-9-check xCheckBg"
                          type="checkbox"
                          id="Checkbox2"
                          checked={nonActiveState}
                          onClick={handleNonActive}
                        />
                      </div>
                      <label htmlFor="Checkbox2">
                        {intl.formatMessage({
                          id: "NotActive",
                        })}{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-sm-6 col-12">
                  <div className="d-flex flex-column mb-8">
                    <label className="fs-6 fw-bold mb-2" htmlFor="start date">
                      {intl.formatMessage({ id: "DelegationStartDate" })}{" "}
                    </label>
                    <input
                      className="form-control form-control-solid"
                      name="start date"
                      id="start date"
                      type="date"
                      placeholder={intl.formatMessage({ id: "From" })}
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="d-flex flex-column mb-8">
                    <label className="fs-6 fw-bold mb-2" htmlFor="end date">
                      {intl.formatMessage({ id: "DelegationStartDate" })}{" "}
                    </label>
                    <input
                      className="form-control form-control-solid"
                      name="end date"
                      type="date"
                      id="end date"
                      placeholder={intl.formatMessage({ id: "To" })}
                    />
                  </div>
                </div>
              </div>
              <p className="text-primary fs-3 mb-4 fw-bolder">
                {intl.formatMessage({ id: "ThePowersOfTheDelegate" })}
              </p>
              <div className="mb-7 mt-5">
                <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                  <input
                    className="form-check-input widget-9-check xCheckBg"
                    type="checkbox"
                    id="All"
                    checked={all}
                    onClick={handleAll}
                  />
                </div>
                <label htmlFor="All" className="px-3 " onClick={handleAll}>
                  {intl.formatMessage({
                    id: "All",
                  })}{" "}
                </label>
              </div>
              <div className="mb-7">
                <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                  <input
                    className="form-check-input widget-9-check xCheckBg"
                    type="checkbox"
                    id="TheFirstValidity"
                    checked={power1}
                    onClick={handlePower1}
                  />
                </div>
                <label
                  htmlFor="TheFirstValidity"
                  className="px-3 "
                  onClick={handlePower1}
                >
                  {intl.formatMessage({
                    id: "TheFirstValidity",
                  })}{" "}
                </label>
              </div>
              <div className="mb-7">
                <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                  <input
                    className="form-check-input widget-9-check xCheckBg"
                    type="checkbox"
                    id="TheSecondValidity"
                    checked={power2}
                    onClick={handlePower2}
                  />
                </div>
                <label
                  htmlFor="TheSecondValidity"
                  className="px-3 "
                  onClick={handlePower2}
                >
                  {intl.formatMessage({
                    id: "TheSecondValidity",
                  })}{" "}
                </label>
              </div>
              <div className="mb-7">
                <div className=" d-inline ms-2 form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-md">
                  <input
                    className="form-check-input widget-9-check xCheckBg"
                    type="checkbox"
                    id="TheThirdValidity"
                    checked={power3}
                    onClick={handlePower3}
                  />
                </div>
                <label
                  htmlFor="TheThirdValidity"
                  className="px-3 "
                  onClick={handlePower3}
                >
                  {intl.formatMessage({
                    id: "TheThirdValidity",
                  })}{" "}
                </label>
              </div>
            </Modal.Body>

            <Modal.Footer className="justify-content-center pb-5 pt-3 border-top-0">
              <div className="d-flex justify-content-center ">
                <button
                  className="btn btn-secondary px-15 me-5"
                  // data-bs-dismiss="modal"
                  onClick={handleClose}
                >
                  {intl.formatMessage({ id: "Cancel" })}
                </button>
                <button
                  type="submit"
                  className="btn btn-success px-15 ms-5"
                  // data-bs-dismiss="modal"
                  onClick={() => {
                    handleClose();
                    showSuccessAlert();
                  }}
                >
                  {intl.formatMessage({ id: "Delegation" })}
                </button>
              </div>
            </Modal.Footer>
          </form>
        </div>
        {/* </div>
        </div>
      </div> */}
      </Modal>
    </Fragment>
  );
};

export default DelegationPopup;
