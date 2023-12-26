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

function Reports() {
  let intl = useIntl();
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  let [tableData, setTableData] = useState([
    {
      id: 1,
      number: 12345,
      title: "بلاغ عن عطل فني",
      employee: "موظف الهيئه",
      type: "عطل فني",
      category: "معدات",
      priority: "عادي",
      status: "مرفوضه",
      date: {
        time: "00:02 am",
        Date: "22 June 2022",
      },
      lastUpdate: "22 June 2022",
    },
    {
      id: 2,
      number: 12345,
      title: "بلاغ عن عطل فني",
      employee: "موظف الهيئه",
      type: "عطل فني",
      category: "معدات",
      priority: "خطر",
      status: "تم حلها",
      date: {
        time: "00:02 am",
        Date: "22 June 2022",
      },
      lastUpdate: "22 June 2022",
    },
    {
      id: 3,
      number: 12345,
      title: "بلاغ عن عطل فني",
      employee: "موظف الهيئه",
      type: "عطل فني",
      category: "معدات",
      priority: "شديد الخطوره",
      status: "ساريه",
      date: {
        time: "00:02 am",
        Date: "22 June 2022",
      },
      lastUpdate: "22 June 2022",
    },
  ]);
  return (
    <Fragment>
      <div className="card-body py-3 pb-7">
        <div className="mb-9"></div>
        <div className="d-flex flex-wrap mb-7 bg-light">
          <button
            className={`w-fit btn d-flex align-items-center rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("tabName") == "all-reports" ||
              location.search == ""
                ? "active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "all-reports");
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
              searchParams.get("tabName") == "solved-reports" ? " active" : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "solved-reports");
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
              searchParams.get("tabName") == "continued-reports"
                ? " active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "continued-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Continued" })}
            <span
              className={`bg-warning opacity-75 h-fit  w-fit mx-3 text-dark ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              15
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("tabName") == "rejected-reports" ? " active" : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "rejected-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Rejected" })}
            <span
              className={`bg-danger opacity-75 h-fit  w-fit text-dark mx-3 ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              15
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("tabName") == "closed-reports" ? " active" : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "closed-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Closed" })}
            <span
              className={`bg-secondary opacity-75 h-fit w-fit text-dark mx-3 ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              15
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("tabName") == "late-reports" ? " active" : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "late-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Late" })}
            <span
              className={`bg-danger opacity-50 h-fit  w-fit text-hover-dark mx-3 ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              20
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("tabName") == "converted-reports"
                ? " active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "converted-reports");
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
        {searchParams.get("tabName") == "all-reports" ||
        location.search == "" ? (
          <AllTab />
        ) : searchParams.get("tabName") == "solved-reports" ? (
          <SolvedTab />
        ) : searchParams.get("tabName") == "continued-reports" ? (
          <ContinuedTab />
        ) : searchParams.get("tabName") == "rejected-reports" ? (
          <RejectTab />
        ) : searchParams.get("tabName") == "closed-reports" ? (
          <ClosedTab />
        ) : searchParams.get("tabName") == "late-reports" ? (
          <LateTab />
        ) : searchParams.get("tabName") == "converted-reports" ? (
          <ConvertedTab />
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
}

export default Reports;
