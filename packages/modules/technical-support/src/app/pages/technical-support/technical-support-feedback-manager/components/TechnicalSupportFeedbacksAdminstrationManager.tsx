import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { useLocation, useSearchParams } from "react-router-dom";
import FilterPopup from "../popups/FilterPopup";
import ReportsTab from "./ReportsTab";
import AdminstrationReportsTab from "./AdminstrationReportsTab";
import EmployeesTab from "./EmployeesTab";
import RedirectPopup from "../popups/RedirectPopup";
import DelayPopup from "../popups/DelayPopup";

function TechnicalSupportFeedbacksAdminstrationManager() {
  let intl = useIntl();
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();

  return (
    <Fragment>
      <div className="card card-xl-stretch mb-xl-8">
        <div className="card-header d-flex">
          <div className="w-40 d-flex justify-content-between align-items-center">
            <button
              className={`w-30 btn d-flex justify-content-center align-items-center rounded-0 bg-transparent btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
                searchParams.get("tabName") == "reports" ||
                location.search == ""
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                searchParams.set("tabName", "reports");
                setSearchParams(searchParams);
              }}
            >
              {" "}
              {intl.formatMessage({
                id: "TheReports",
              })}{" "}
            </button>
            <button
              className={`w-30 btn d-flex justify-content-center align-items-center rounded-0 bg-transparent btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
                searchParams.get("tabName") == "adminstration-reports" 
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                searchParams.set("tabName", "adminstration-reports");
                searchParams.set("subTabName", "all-reports");
                setSearchParams(searchParams);
              }}
            >
              {" "}
              {intl.formatMessage({
                id: "DepartmentReports",
              })}{" "}
            </button>
            <button
              className={`w-30 btn d-flex justify-content-center align-items-center rounded-0 bg-transparent btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
                searchParams.get("tabName") == "employees" ? "active" : ""
              }`}
              onClick={() => {
                searchParams.set("tabName", "employees");
                setSearchParams(searchParams);
              }}
            >
              {" "}
              {intl.formatMessage({
                id: "Employees",
              })}{" "}
            </button>
          </div>
          <div className="w-40 d-flex justify-content-end align-items-center">
            <div className="w-40 mx-3">
              {" "}
              <select
                id="CreateReport"
                className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                data-kt-select2="true"
                data-placeholder={intl.formatMessage({ id: "CreateReport" })}
                data-dropdown-parent="#kt_menu_62775e8642438"
                data-allow-clear="true"
                data-select2-id="select2-data-4-vqtd"
                tabIndex={-1}
                aria-hidden="true"
              >
                <option disabled selected>
                  {intl.formatMessage({ id: "CreateReport" })}
                </option>
                <option value="1">
                  {intl.formatMessage({ id: "TheReports" })}
                </option>
                <option value="2">
                  {intl.formatMessage({ id: "DepartmentReports" })}{" "}
                </option>
                <option value="3">
                  {intl.formatMessage({ id: "Employees" })}{" "}
                </option>
              </select>
            </div>
           
          </div>
        </div>

        {searchParams.get("tabName") == "reports" || location.search == "" ? (
          <ReportsTab />
        ) : searchParams.get("tabName") == "adminstration-reports" ? (
          <>
            <AdminstrationReportsTab />
          </>
        ) : searchParams.get("tabName") == "employees" ? (
          <Fragment>
            <EmployeesTab />
          </Fragment>
        ) : (
          ""
        )}
      </div>
      <FilterPopup />
      <RedirectPopup />
      <DelayPopup />
    </Fragment>
  );
}

export default TechnicalSupportFeedbacksAdminstrationManager;
