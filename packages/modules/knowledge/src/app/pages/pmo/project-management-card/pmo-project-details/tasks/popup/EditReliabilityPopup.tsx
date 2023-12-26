import React, { Fragment, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import CheckBoxDropDown from "../components/CheckBoxDropDown";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Swal from "sweetalert2";
import { KTSVG } from "../../../../../../helpers";
import { getCurrentSystemLanguage } from "../../../../../../partials/functions/language";
import { Modal } from "react-bootstrap";

type PopupProps = {
  show: boolean;
  handleClose: any;
};
function EditReliabilityPopup<PopupProps>({ show, handleClose }) {
  const intl = useIntl();
  const [value, setValue] = useState([10, 40]);
  useEffect(() => {
    console.log(value);
  }, [value]);

  //   const [ID, setID] = useState([]);
  //   const optionsOne = [
  //     {
  //       id: 1,
  //       name: "1",
  //     },
  //     {
  //       id: 2,
  //       name: "2",
  //     },
  //     {
  //       id: 3,
  //       name: "3",
  //     },
  //     {
  //       id: 4,
  //       name: "4",
  //     },
  //     {
  //       id: 5,
  //       name: "5",
  //     },
  //   ];
  let showFilterAlert = () => {
    Swal.fire({
      text: "تم التعديل بنجاح",
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
      {/* <div
        className="modal fade"
        id="Rega_modal_edit_reliability"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content rounded">
            <div className="modal-header pb-0 border-0 justify-content-end">
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <span className="svg-icon svg-icon-1">
                  <KTSVG
                    path="/media/icons/duotune/general/gen106_close.svg"
                    className="svg-icon-4 me-1"
                  />
                </span>
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
                <div className="mb-9 text-center">
                  <h1 className="mb-3">
                    {intl.formatMessage({ id: "EditReliability" })}
                  </h1>
                  <h6 className="mb-2 text-muted">
                    {intl.formatMessage({ id: "PleaseEnterTheFollowingData" })}
                  </h6>
                </div>
              </Modal.Title>
            </div>
          </Modal.Header>
          {/* <hr />
          <br />
          <br /> */}

          <div className="d-flex flex-column">
            <form
              noValidate
              className="form outputForm"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Modal.Body className="pb-0 mx-4">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-2 pt-2 pb-3 ">
                      <label
                        htmlFor="TaskNumber"
                        className="form-label px-2 fontSz-6 "
                      >
                        {intl.formatMessage({ id: "TaskNumber" })}
                      </label>
                      <input
                        id="TaskNumber"
                        type="text"
                        className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
                        placeholder={intl.formatMessage({ id: "TaskNumber" })}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-2 pt-2 pb-3">
                      <label
                        htmlFor="NameOfTaskItIsBasedOn"
                        className="form-label px-2  fontSz-6 "
                      >
                        {intl.formatMessage({ id: "NameOfTaskItIsBasedOn" })}
                      </label>
                      <select
                        className="form-control form-control-solid text-muted"
                        id="NameOfTaskItIsBasedOn"
                      >
                        <option selected disabled>
                          {intl.formatMessage({ id: "TaskName" })}
                        </option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-2 pt-2 pb-3">
                      <label
                        htmlFor="Cost"
                        className="form-label px-2  fontSz-6 "
                      >
                        {intl.formatMessage({ id: "Cost" })}
                      </label>
                      <select
                        className="form-control form-control-solid text-muted"
                        id="Cost"
                      >
                        <option selected disabled>
                          {intl.formatMessage({ id: "Cost" })}
                        </option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-2 pt-2 pb-3">
                      <label
                        htmlFor="StageNameOfTask"
                        className="form-label px-2  fontSz-6 "
                      >
                        {intl.formatMessage({ id: "StageNameOfTask" })}
                      </label>
                      <select
                        className="form-control form-control-solid text-muted"
                        id="StageNameOfTask"
                      >
                        <option selected disabled>
                          {intl.formatMessage({ id: "StageName" })}
                        </option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-2 pt-2 pb-3">
                      <label
                        htmlFor="StageNameOfTask"
                        className="form-label px-2 mb-8 fontSz-6 "
                      >
                        {intl.formatMessage({ id: "StageNameOfTask" })}
                      </label>
                      <div
                        className="d-flex w-100 justify-content-between mb-5"
                        style={{ paddingRight: "50px" }}
                      >
                        {" "}
                        <div
                          className=" d-flex align-items-center justify-content-center p-3 bg-primary"
                          style={{ width: "200px", height: "30px" }}
                        >
                          {intl.formatMessage({
                            id: "TaskItIsBasedOn",
                          })}
                        </div>
                        <div
                          className="d-flex align-items-center justify-content-center p-3"
                          style={{
                            position: "relative",
                            width: `${(value[1] - value[0]) * 10}px`,
                            height: "30px",
                            backgroundColor: "#D1D4D6",
                            [getCurrentSystemLanguage() == "ar"
                              ? "left"
                              : "right"]: `${value[0] * 10}px`,
                          }}
                        >
                          {intl.formatMessage({ id: "CurrentTask" })}
                        </div>
                      </div>
                      <RangeSlider
                        min={0}
                        max={100}
                        value={value}
                        step={1}
                        className="mb-5"
                        onInput={(values: any) => {
                          setValue(values);
                          console.log(value);
                        }}
                      />

                      <div className="d-flex mb-5">
                        {Array.from(
                          { length: 25 },
                          (_, index) => index - 12
                        ).map((num) => {
                          return (
                            <Fragment key={Math.random()}>
                              <div
                                style={{ width: "4.16%" }}
                                className="text-muted d-flex align-items-center justify-content-center"
                              >
                                |
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>
                      <div className="d-flex mb-5">
                        {Array.from(
                          { length: 25 },
                          (_, index) => index - 12
                        ).map((num) => {
                          return (
                            <Fragment key={Math.random()}>
                              <div
                                style={{ width: "4.16%" }}
                                className="text-black fw-bolder fs-4 d-flex align-items-center justify-content-center"
                              >
                                {num}
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>
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
                    className="btn btn-primary px-15 ms-5"
                    // data-bs-dismiss="modal"
                    onClick={() => {
                      handleClose();
                      showFilterAlert();
                    }}
                  >
                    {intl.formatMessage({ id: "Save" })}
                  </button>
                </div>
              </Modal.Footer>
            </form>
          </div>
        </div>
        {/* </div>
        </div>
      </div> */}
      </Modal>
    </Fragment>
  );
}

export default EditReliabilityPopup;
