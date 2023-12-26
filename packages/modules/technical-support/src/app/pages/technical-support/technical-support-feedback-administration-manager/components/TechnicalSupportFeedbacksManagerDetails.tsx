import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import OptionsTab from "./OptionsTab";
import StepsTab from "./StepsTab";
import TrackTab from "./TrackTab";
import ApprovalRequestPopup from "../popups/ApprovalRequestPopup";
function TechnicalSupportFeedbacksManagerDetails() {
  let intl = useIntl();
  const [modalShow, setModalShow] = useState<boolean>(false);

  let [activeOptions, setActiveOptions] = useState(true);
  let [activeTrack, setActiveTrack] = useState(false);
  let [activeSteps, setActiveSteps] = useState(false);

  let activeOptionsHandler = () => {
    setActiveOptions(true);
    setActiveTrack(false);
    setActiveSteps(false);
  };
  let activeTrackHandler = () => {
    setActiveOptions(false);
    setActiveTrack(true);
    setActiveSteps(false);
  };
  let activeStepsHandler = () => {
    setActiveOptions(false);
    setActiveTrack(false);
    setActiveSteps(true);
  };
  return (
    <Fragment>
      <div className="card mb-5 mb-xl-10 shadow pb-5">
        <div className="card-body pt-9 pb-0">
          <div className="card-header title_details_border bg-light  px-4 py-4  mb-3 w-100 d-flex align-items-center ">
            <h3 className="card-title align-items-start flex-column w-40">
              <span className="card-label fw-bolder text-black fs-4 mb-2 ">
                {intl.formatMessage({
                  id: "ReportData",
                })}
              </span>
              <span className="mt-1 fs-6 text-muted">
                {intl.formatMessage({
                  id: "CurrentReportData",
                })}
              </span>
            </h3>

            <div className="h-50 w-25 d-flex justify-content-end align-items-center">
              <div
                className="btn btn-primary w-60 text-center"
                // data-bs-toggle="modal"
                // data-bs-target="#Rega_modal_approval-request"
                onClick={() => setModalShow(true)}
              >
                {intl.formatMessage({ id: "ConsentRequest" })}
              </div>
            </div>
          </div>
          <div className="card shadow p-7 mb-8">
            <div className="d-flex justify-content-between align-items-center mb-5">
              <div className="w-250px text-black-50 d-flex justify-content-center align-items-center">
                <span className="text-primary d-inline-block mx-3">
                  {" "}
                  {intl.formatMessage({
                    id: "Requester",
                  })}
                </span>
                :<span className="d-inline-block mx-3">موظف الهيئه</span>
              </div>
              <div className="w-250px text-black-50 d-flex justify-content-center align-items-center">
                <span className="text-primary d-inline-block mx-3">
                  {" "}
                  {intl.formatMessage({
                    id: "ReportNumber",
                  })}
                </span>
                :<span className="d-inline-block mx-3"> 12345</span>
              </div>
              <div className="w-250px text-black-50 d-flex justify-content-center align-items-center">
                <span className="text-primary d-inline-block mx-3">
                  {" "}
                  {intl.formatMessage({
                    id: "Address",
                  })}
                </span>
                :<span className="d-inline-block mx-3 "> بلاغ عن عطل فني</span>
              </div>
              <div className="w-250px text-black-50 d-flex justify-content-center align-items-center">
                <span className="text-primary d-inline-block mx-3">
                  {" "}
                  {intl.formatMessage({
                    id: "Type",
                  })}
                </span>
                :<span className="d-inline-block mx-3"> عطل فني</span>
              </div>
              <div className="w-250px text-black-50 d-flex justify-content-center align-items-center">
                <span className="text-primary d-inline-block mx-3">
                  {" "}
                  {intl.formatMessage({
                    id: "Category",
                  })}
                </span>
                :<span className="d-inline-block mx-3"> معدات </span>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-5 px-5">
              <div className="w-200px text-black-50">
                <span className="text-primary d-inline-block mx-3">
                  {" "}
                  {intl.formatMessage({
                    id: "Priority",
                  })}
                </span>
                :<span className="d-inline-block mx-3"> عادي</span>
              </div>
              <div className="w-200px text-black-50">
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
              <div className="w-200px text-black-50">
                <span className="text-primary d-inline-block mx-3">
                  {" "}
                  {intl.formatMessage({
                    id: "Time",
                  })}
                </span>
                :  am <span className="d-inline-block mx-1"> 00:02 </span>
              </div>
              <div className="w-200px text-black-50">
                <span className="text-primary d-inline-block mx-3">
                  {" "}
                  {intl.formatMessage({
                    id: "Date",
                  })}
                </span>
                :<span className="d-inline-block mx-3"> 22 June 2022</span>
              </div>
              <div className="w-200px text-black-50">
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
          <div className="w-100  border-radius-20px">
            <div
              className="nav row w-60 mx-auto nav-pills mb-7 border-radius-20px  background-pills d-flex justify-content-center justify-content-lg-evenly"
              id="pills-tab"
              role="tablist"
              style={{ backgroundColor: "#F5F8FA" }}
            >
              <div
                className="nav-item col-12 col-lg-2 w-30 navTabsPills"
                role="presentation"
              >
                <button
                  className={`nav-link w-100 m-1 fs-5 fw-bolder  ${
                    activeOptions ? "active" : ""
                  }`}
                  id="options-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#options"
                  type="button"
                  role="tab"
                  aria-controls="options"
                  aria-selected="true"
                  onClick={() => {
                    activeOptionsHandler();
                  }}
                  style={{
                    color: `${activeOptions ? "rgb(0, 158, 247)" : "black"}`,
                    backgroundColor: `${activeOptions ? "white" : ""}`,
                    borderRadius: `${activeOptions ? "20px" : ""}`,
                  }}
                >
                  {intl.formatMessage({ id: "TheOptions" })}{" "}
                </button>
              </div>
              <div
                className="nav-item col-12 col-lg-2 w-30 navTabsPills"
                role="presentation"
              >
                <button
                  className={`nav-link w-100 fs-5 m-1 fw-bolder ${
                    activeTrack ? "active" : ""
                  }`}
                  id="track-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#track"
                  type="button"
                  role="tab"
                  aria-controls="track"
                  aria-selected="false"
                  onClick={() => {
                    activeTrackHandler();
                  }}
                  style={{
                    color: `${activeTrack ? "rgb(0, 158, 247)" : "black"}`,
                    backgroundColor: `${activeTrack ? "white" : ""}`,
                    borderRadius: `${activeTrack ? "20px" : ""}`,
                  }}
                >
                  {intl.formatMessage({ id: "ReportStatusTracking" })}{" "}
                </button>
              </div>
              <div
                className="nav-item col-12 col-lg-2 w-30 navTabsPills"
                role="presentation"
              >
                <button
                  className={`nav-link w-100 m-1 fs-5 fw-bolder ${
                    activeSteps ? "active" : ""
                  }`}
                  id="steps-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#steps"
                  type="button"
                  role="tab"
                  aria-controls="pills-ideas"
                  aria-selected="false"
                  onClick={() => {
                    activeStepsHandler();
                  }}
                  style={{
                    color: `${activeSteps ? "rgb(0, 158, 247)" : "black"}`,
                    backgroundColor: `${activeSteps ? "white" : ""}`,
                    borderRadius: `${activeSteps ? "20px" : ""}`,
                  }}
                >
                  {intl.formatMessage({ id: "ReportSteps" })}{" "}
                </button>
              </div>
            </div>

            <div className="tab-content px-2" id="pills-tabContent">
              <OptionsTab />
              <StepsTab />
              <TrackTab />
            </div>
          </div>
        </div>
      </div>
      <ApprovalRequestPopup show={modalShow} handleClose={() => setModalShow(false)}/>
    </Fragment>
  );
}

export default TechnicalSupportFeedbacksManagerDetails;
