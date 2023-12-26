import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
// import { AcceptPopup } from "../../../partials/AcceptPopup";
// import { RejectPopup } from "../../../partials/RejectPopup";
import { useLocation } from "react-router";
import RejectReportPopup from "../popups/RejectReportPopup";
import { AcceptPopup } from "../../../../../app/pages/partials/AcceptPopup";

function TechnicalSupportFeedbacksAdminstrationManagerApprovalDetails() {
  const [modalShow, setModalShow] = useState<boolean>(false);
  let location = useLocation();
  let intl = useIntl();
  const [rejectShow, setRejectShow] = useState<boolean>(false);

  return (
    <Fragment>
      <div className="detailsCard my-5">
        <div className="card card-xl-stretch mb-xl-6 pt-7">
          <h2 className="text-center fw-bolder mb-7 mt-8">
            {intl.formatMessage({ id: "DetailsOfTheServiceApprovalRequest" })}
          </h2>
          <div className="container-xxl mb-7 ">
            <p className="fs-3 p-3 mb-5 fw-bolder text-dark">
              {intl.formatMessage({ id: "RequesterData" })}
            </p>
            <div className="w-100 mb-3 mt-4 px-6 card pt-6  border border-2 border-gray border-bottom-4">
              <div className=" d-flex justify-content-between mb-9">
                <div className="d-flex justify-content-between align-items-center">
                  <img
                    src="/media/avatars/300-3.jpg"
                    className="d-block mx-2"
                    style={{
                      height: "100px",
                      width: "120px",
                      borderRadius: "10px",
                    }}
                    alt="profile img"
                  />
                  <div className="mx-3 text-gray-700">
                    <p className="mb-3 fw-bolder text-primary fw-bold fs-4">
                      عبد الرحمن محمد
                    </p>
                    <p className="mb-3 text-muted fs-5 ">
                      موظف تسويق -اداره المبيعات
                    </p>
                    <div className="mb-3 text-muted">
                      <i className="fa-regular fa-envelope d-inline-block  fs-3"></i>
                      <span className="d-inline-block ms-4">
                        Abdelrahman_Moh@gmail.com
                      </span>
                    </div>
                    <div className="mb-3 text-muted">
                      <i
                        className="fa-solid fa-phone fs-3"
                        style={{ transform: "rotate(270deg)" }}
                      ></i>
                      <span className="d-inline-block ms-4">+996543256543</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-dark fs-3 mb-4 fw-bolder">
                {intl.formatMessage({ id: "ReportData" })}
              </p>
              <div className="mb-9">
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <div className="w-25 text-black-50 d-flex  align-items-center">
                    <span className="text-primary d-inline-block mx-3">
                      {" "}
                      {intl.formatMessage({
                        id: "Requester",
                      })}
                    </span>
                    :<span className="d-inline-block mx-3">موظف الهيئه</span>
                  </div>
                  <div className="w-25 text-black-50 d-flex align-items-center">
                    <span className="text-primary d-inline-block mx-3">
                      {" "}
                      {intl.formatMessage({
                        id: "ReportNumber",
                      })}
                    </span>
                    :<span className="d-inline-block mx-3"> 12345</span>
                  </div>
                  <div className="w-25 text-black-50 d-flex align-items-center">
                    <span className="text-primary d-inline-block mx-3">
                      {" "}
                      {intl.formatMessage({
                        id: "Address",
                      })}
                    </span>
                    :
                    <span className="d-inline-block mx-3 ">
                      {" "}
                      بلاغ عن عطل فني
                    </span>
                  </div>
                  <div className="w-25 text-black-50 d-flex  align-items-center">
                    <span className="text-primary d-inline-block mx-3">
                      {" "}
                      {intl.formatMessage({
                        id: "Type",
                      })}
                    </span>
                    :<span className="d-inline-block mx-3"> عطل فني</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <div className="w-25 text-black-50 d-flex align-items-center">
                    <span className="text-primary d-inline-block mx-3">
                      {" "}
                      {intl.formatMessage({
                        id: "Category",
                      })}
                    </span>
                    :<span className="d-inline-block mx-3"> معدات </span>
                  </div>
                  <div className="w-25 text-black-50">
                    <span className="text-primary d-inline-block mx-3">
                      {" "}
                      {intl.formatMessage({
                        id: "Priority",
                      })}
                    </span>
                    :<span className="d-inline-block mx-3"> عادي</span>
                  </div>
                  <div className="w-25 text-black-50">
                    <span className="text-primary d-inline-block mx-3">
                      {" "}
                      {intl.formatMessage({
                        id: "Status",
                      })}
                    </span>
                    :
                    <span className="d-inline-block mx-3 badgex badge-light-danger">
                      {" "}
                      مرفوضه
                    </span>
                  </div>
                  <div className="w-25 text-black-50">
                    <span className="text-primary d-inline-block mx-3">
                      {" "}
                      {intl.formatMessage({
                        id: "Time",
                      })}
                    </span>
                    :<span className="d-inline-block mx-3"> 00:02 am</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="w-25 text-black-50">
                    <span className="text-primary d-inline-block mx-3">
                      {" "}
                      {intl.formatMessage({
                        id: "Date",
                      })}
                    </span>
                    :<span className="d-inline-block mx-3"> 22 June 2022</span>
                  </div>
                  <div className="w-25 text-black-50">
                    <span className="text-primary d-inline-block mx-3">
                      {" "}
                      {intl.formatMessage({
                        id: "LastUpdate",
                      })}
                    </span>
                    :<span className="d-inline-block mx-3"> 25 June 2022 </span>
                  </div>
                </div>
              </div>

              <form
                className=" d-block w-100 h-fit"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="pt-3 mb-7">
                  <label htmlFor="addNotes" className="px-2 mb-3">
                    {intl.formatMessage({ id: "Notes" })}
                  </label>
                  <textarea
                    name="admine notes"
                    placeholder={intl.formatMessage({
                      id: "AddNotesToTheRequest",
                    })}
                    className="form-control form-control-solid mb-3 mb-lg-0 min-h-100px"
                    style={{ maxHeight: "200px" }}
                    id="addNotes"
                  ></textarea>
                </div>
                <div className="mt-5 mb-5 col-12 col-lg-8 mx-auto">
                  <div className="outputCard card-diff-toolbar pt-5 w-100 mt-3 d-flex justify-content-center">
                    <div className="d-flex justify-content-center align-items-center w-50">
                      <div
                        className="btn btn-secondary mx-3 text-center w-25"
                        onClick={() => setRejectShow(true)}
                        // data-bs-toggle="modal"
                      >
                        {intl.formatMessage({ id: "Reject" })}
                      </div>
                      <button
                        type="button"
                        // data-bs-toggle="modal"
                        // data-bs-target="#Rega_modal_accept"
                        onClick={() => setModalShow(true)}
                        className="btn btn-success mx-3 text-center w-25"
                        style={{ border: "none" }}
                      >
                        {intl.formatMessage({ id: "Acceptance" })}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Rega_modal_accept" aria-hidden="true">
        <AcceptPopup show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
      {/* <div className="modal fade" id="Rega_modal_reject" aria-hidden="true">
        <RejectPopup />
      </div> */}
      <RejectReportPopup
        show={rejectShow}
        handleClose={() => setRejectShow(false)}
      />
    </Fragment>
  );
}

export default TechnicalSupportFeedbacksAdminstrationManagerApprovalDetails;
