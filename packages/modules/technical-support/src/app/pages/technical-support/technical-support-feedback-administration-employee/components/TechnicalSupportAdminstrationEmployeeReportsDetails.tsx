import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { Link, useSearchParams } from "react-router-dom";
import NotesTab from "./NotesTab";
import StepsTab from "./StepsTab";
import TrackTab from "./TrackTab";
function TechnicalSupportAdminstrationEmployeeReportsDetails() {
  let intl = useIntl();
  let [activeNotes, setActiveNotes] = useState(true);
  let [activeTrack, setActiveTrack] = useState(false);
  let [activeSteps, setActiveSteps] = useState(false);

  let activeNotesHandler = () => {
    setActiveNotes(true);
    setActiveTrack(false);
    setActiveSteps(false);
  };
  let activeTrackHandler = () => {
    setActiveNotes(false);
    setActiveTrack(true);
    setActiveSteps(false);
  };
  let activeStepsHandler = () => {
    setActiveNotes(false);
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
            <div className="h-50 w-50 d-flex justify-content-end align-items-center">
              <Link
                to="#"
                className="btn btn-secondary mx-1 text-center w-25 h-50"
              >
                {intl.formatMessage({ id: "ReportReopen" })}
              </Link>
              <div className="btn btn-primary  text-center w-25  mx-6 h-50">
                {intl.formatMessage({ id: "ReportClose" })}
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
                :<span className="d-inline-block mx-3"> 00:02 am </span>
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
                    activeNotes ? "active" : ""
                  }`}
                  id="notes-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#notes"
                  type="button"
                  role="tab"
                  aria-controls="options"
                  aria-selected="true"
                  onClick={() => {
                    activeNotesHandler();
                  }}
                  style={{
                    color: `${activeNotes ? "rgb(0, 158, 247)" : "black"}`,
                    backgroundColor: `${activeNotes ? "white" : ""}`,
                    borderRadius: `${activeNotes ? "20px" : ""}`,
                  }}
                >
                  {intl.formatMessage({ id: "Notes" })}{" "}
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
              <NotesTab />
              <StepsTab />
              <TrackTab />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TechnicalSupportAdminstrationEmployeeReportsDetails;
