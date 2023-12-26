import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { useLocation, useSearchParams } from "react-router-dom";
import FilterPopup from "../popups/FilterPopup";
import SolveReportPopup from "../popups/SolveReportPopup";
import RejectReportPopup from "../popups/RejectReportPopup";
import MyReportsTab from "./MyReportsTab";
import ReceivedReportsTab from "./ReceivedReportsTab";

function TechnicalSupportReports() {
  let intl = useIntl();
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();

  return (
    <Fragment>
      <div className="card card-xl-stretch mb-xl-8">
        <div className="card-header d-flex">
          <div className="w-40 d-flex justify-content-between align-items-center">
            <button
              className={`w-50 btn d-flex justify-content-center align-items-center rounded-0 bg-transparent btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
                searchParams.get("tabName") == "received-reports" ||
                location.search == ""
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                searchParams.set("tabName", "received-reports");
                setSearchParams(searchParams);
              }}
            >
              {" "}
              {intl.formatMessage({
                id: "ReceivedReports",
              })}{" "}
            </button>
            <button
              className={`w-40 btn d-flex justify-content-center align-items-center rounded-0 bg-transparent btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
                searchParams.get("tabName") == "my-reports" ? "active" : ""
              }`}
              onClick={() => {
                searchParams.set("tabName", "my-reports");
                searchParams.set("subTabName", "all-reports");
                setSearchParams(searchParams);
              }}
            >
              {" "}
              {intl.formatMessage({
                id: "MyReports",
              })}{" "}
            </button>
          </div>
          <div className="w-40 d-flex justify-content-end align-items-center">
            <div className="w-40 mx-3"> </div>
            
          </div>
        </div>

        {searchParams.get("tabName") == "received-reports" || location.search == "" ? (
          <ReceivedReportsTab />
        ) : searchParams.get("tabName") == "my-reports" ? (
          <>
            <MyReportsTab />
          </>
        ) : (
          ""
        )}
      </div>
      <SolveReportPopup />
      <RejectReportPopup />
    </Fragment>
  );
}

export default TechnicalSupportReports;
