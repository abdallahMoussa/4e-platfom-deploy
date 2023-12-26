import React, { Fragment, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../../../../helpers";
import CheckBoxDropDown from "../../../../../pmo/output-review-tool/components/CheckBoxDropDown";
import { Modal } from "react-bootstrap";

type PopupProps = {
  show: boolean;
  handleClose: any;
};
const FilterChangeRequestsPopup: React.FC<PopupProps> = ({
  show,
  handleClose,
}) => {
  const intl = useIntl();
  const [requestNumber, setRequestNumber] = useState([]);
  const [requestAddress, setRequestAddress] = useState([]);
  const [requestReason, setRequestReason] = useState([]);
  const [priority, setPriority] = useState([]);
  const [changeType, setChangeType] = useState([]);

  const optionsOne = [
    {
      id: 1,
      name: " 1",
    },
    {
      id: 2,
      name: " 2",
    },
    {
      id: 3,
      name: " 3",
    },
    {
      id: 4,
      name: " 4",
    },
  ];
  const optionsTwo = [
    {
      id: 1,
      name: "سبب الطلب",
    },
    {
      id: 2,
      name: "سبب الطلب",
    },
    {
      id: 3,
      name: "سبب الطلب",
    },
    {
      id: 4,
      name: "سبب الطلب ",
    },
  ];
  const optionsThree = [
    {
      id: 1,
      name: "عنوان الطلب",
    },
    {
      id: 2,
      name: "عنوان الطلب",
    },
    {
      id: 3,
      name: "عنوان الطلب",
    },
    {
      id: 4,
      name: " عنوان الطلب",
    },
  ];
  const optionsFour = [
    {
      id: 1,
      name: "منخفضه",
    },
    {
      id: 2,
      name: "عاليه",
    },
    {
      id: 3,
      name: "متوسطه",
    },
  ];
  const optionsFive = [
    {
      id: 1,
      name: "التأثير علي ملكيه المشروع",
    },
    {
      id: 2,
      name: "التأثير علي نطاق العمل",
    },
    {
      id: 3,
      name: "التأثير علي الوقت",
    },
    {
      id: 4,
      name: " التأثير علي الجوده",
    },
    {
      id: 5,
      name: " التأثير علي التكلفه",
    },
  ];
  return (
    <Fragment>
      {/* <div
        className="modal fade"
        id="Rega_modal_filter-change-requests"
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
                    {intl.formatMessage({ id: "FILTERING.DATA" })}{" "}
                  </span>

                  <span className="mt-1 fw-semibold fs-5 text-muted">
                    {" "}
                    {intl.formatMessage({ id: "CHOOSE.FILTERING.DATA" })} :
                  </span>
                </h3>
              </Modal.Title>
            </div>
          </Modal.Header>

          <Modal.Body className="pb-0 mx-4">
            <div className="mb-15 mt-15">
              <div className="container">
                <div className="row g-5">
                  <div className="col-4">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {intl.formatMessage({ id: "ORDER.NUM" })}{" "}
                    </label>
                    <CheckBoxDropDown
                      selectedOptions={requestNumber}
                      setSelectedOptions={setRequestNumber}
                      options={optionsOne}
                    />
                  </div>
                  <div className="col-4">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {" "}
                      {intl.formatMessage({ id: "RequestAddress" })}{" "}
                    </label>
                    <CheckBoxDropDown
                      selectedOptions={requestAddress}
                      setSelectedOptions={setRequestAddress}
                      options={optionsThree}
                    />
                  </div>
                  <div className="col-4">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {" "}
                      {intl.formatMessage({ id: "RequestReason" })}
                    </label>
                    <CheckBoxDropDown
                      selectedOptions={requestReason}
                      setSelectedOptions={setRequestReason}
                      options={optionsTwo}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-15 mt-15">
              <div className="container">
                <div className="row g-5">
                  <div className="col-4">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {intl.formatMessage({ id: "CHANGE.TYPE" })}{" "}
                    </label>
                    <CheckBoxDropDown
                      selectedOptions={changeType}
                      setSelectedOptions={setChangeType}
                      options={optionsFive}
                    />
                  </div>
                  <div className="col-4">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {" "}
                      {intl.formatMessage({ id: "Priority" })}{" "}
                    </label>
                    <CheckBoxDropDown
                      selectedOptions={priority}
                      setSelectedOptions={setPriority}
                      options={optionsFour}
                    />
                  </div>
                  <div className="col-4">
                    <label className="form-label px-2  fs-6 text-gray-700">
                      {" "}
                      {intl.formatMessage({ id: "DueDate" })}{" "}
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-2"
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
                    onClick={handleClose}
                    className="btn btn-success mx-1 text-center w-100"
                    style={{ border: "none" }}
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

export default FilterChangeRequestsPopup;
