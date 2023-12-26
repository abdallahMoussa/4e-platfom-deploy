import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { useLocation, useSearchParams } from "react-router-dom";
import AllTab from "./AllTab";
import SolvedTab from "./SolvedTab";
import ContinuedTab from "./ContinuedTab";
import RejectTab from "./RejectTab";
import ClosedTab from "./ClosedTab";
import LateTab from "./LateTab";
import ConvertedTab from "./ConvertedTab";

function AdminstrationReportsTab() {
  let intl = useIntl();
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <Fragment>
      <div className="card-body py-3 pb-7">
        <div className="mb-9"></div>
        <div className="d-flex flex-wrap mb-7 bg-light">
          <button
            className={`w-fit btn d-flex align-items-center rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("subTabName") == "all-reports" ||
              location.search == ""
                ? "active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("subTabName", "all-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "AllReports" })}
            <span
              className={`bg-primary opacity-75 h-fit  w-fit text-dark mx-2 ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              145
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("subTabName") == "solved-reports" &&
              searchParams.get("tabName") == "my-reports"
                ? " active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "my-reports");
              searchParams.set("subTabName", "solved-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Solved" })}
            <span
              className={`bg-success opacity-75 h-fit  mx-3 w-fit text-dark ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              20
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("subTabName") == "continued-reports" &&
              searchParams.get("tabName") == "my-reports"
                ? " active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "my-reports");
              searchParams.set("subTabName", "continued-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Continued" })}
            <span
              className={`bg-warning opacity-75 h-fit w-fit mx-3 text-dark ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              15
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("subTabName") == "rejected-reports" &&
              searchParams.get("tabName") == "my-reports"
                ? " active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "my-reports");
              searchParams.set("subTabName", "rejected-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Rejected" })}
            <span
              className={`bg-danger opacity-75 h-fit w-fit text-dark mx-3 ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              15
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("subTabName") == "closed-reports" &&
              searchParams.get("tabName") == "my-reports"
                ? " active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "my-reports");
              searchParams.set("subTabName", "closed-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Closed" })}
            <span
              className={`bg-secondary opacity-75 h-fit  w-fit text-dark mx-3 ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              15
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("subTabName") == "late-reports" &&
              searchParams.get("tabName") == "my-reports"
                ? " active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "my-reports");
              searchParams.set("subTabName", "late-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Late" })}
            <span
              className={`bg-danger opacity-50 h-fit w-fit text-hover-dark mx-3 ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              20
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("subTabName") == "converted-reports" &&
              searchParams.get("tabName") == "my-reports"
                ? " active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "my-reports");
              searchParams.set("subTabName", "converted-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Converted" })}
            <span
              className={`bg-success opacity-50 h-fit  w-fit text-hover-dark mx-3 ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              10
            </span>
          </button>
        </div>
        {searchParams.get("subTabName") == "all-reports" ||
        location.search == "" ? (
          <AllTab />
        ) : searchParams.get("subTabName") == "solved-reports" ? (
          <SolvedTab />
        ) : searchParams.get("subTabName") == "continued-reports" ? (
          <ContinuedTab />
        ) : searchParams.get("subTabName") == "rejected-reports" ? (
          <RejectTab />
        ) : searchParams.get("subTabName") == "closed-reports" ? (
          <ClosedTab />
        ) : searchParams.get("subTabName") == "late-reports" ? (
          <LateTab />
        ) : searchParams.get("subTabName") == "converted-reports" ? (
          <ConvertedTab />
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
}

export default AdminstrationReportsTab;
