import React, { Fragment } from "react";
import { useIntl } from "react-intl";
import { useLocation, useSearchParams } from "react-router-dom";
import BasicDataTab from "./BasicDataTab";
import MainSectionTab from "./MainSectionTab";
import LicensesTab from "./LicensesTab";

function Settings() {
  let intl = useIntl();
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  return (
    <Fragment>
      <div className="card shadow p-7">
        <div className="card shadow p-2 mb-7">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4 col-6">
              <button
                className={`w-fit btn d-flex justify-content-center align-items-center rounded-0 bg-transparent btn-active-color-primary border-0 ms-6 fs-6  fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
                  searchParams.get("tabName") == "basic-website-data" ||
                  location.search == ""
                    ? "active"
                    : "text-muted"
                }`}
                onClick={() => {
                  searchParams.set("tabName", "basic-website-data");
                  setSearchParams(searchParams);
                }}
              >
                {" "}
                <i className="bi bi-journal-text  fs-1"></i>
                <span className="d-inline-block mx-1">
                  {intl.formatMessage({
                    id: "TheBasicDataOfTheSite",
                  })}
                </span>{" "}
              </button>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-6">
              <button
                className={`w-fit btn d-flex justify-content-center align-items-center rounded-0 bg-transparent btn-active-color-primary border-0 ms-6 fs-6  fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
                  searchParams.get("tabName") == "main-section"
                    ? "active"
                    : "text-muted"
                }`}
                onClick={() => {
                  searchParams.set("tabName", "main-section");
                  setSearchParams(searchParams);
                }}
              >
                {" "}
                <i className="fas fa-cogs  fs-1"></i>
                <span className="mx-3">
                  {intl.formatMessage({
                    id: "MainSection",
                  })}
                </span>{" "}
              </button>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-6">
              <button
                className={`w-fit btn d-flex justify-content-center align-items-center rounded-0 bg-transparent btn-active-color-primary border-0 ms-6 fs-6  fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
                  searchParams.get("tabName") == "licenses"
                    ? "active"
                    : "text-muted"
                }`}
                onClick={() => {
                  searchParams.set("tabName", "licenses");
                  setSearchParams(searchParams);
                }}
              >
                {" "}
                <i className="fa-solid fa-id-card fs-1"></i>
                <span className="mx-3">
                  {intl.formatMessage({
                    id: "Licenses",
                  })}
                </span>{" "}
              </button>
            </div>
          </div>
        </div>
        {searchParams.get("tabName") == "basic-website-data" ||
        location.search == "" ? (
          <BasicDataTab />
        ) : searchParams.get("tabName") == "main-section" ? (
          <>
            <MainSectionTab />
          </>
        ) : searchParams.get("tabName") == "licenses" ? (
          <>
            <LicensesTab />
          </>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
}

export default Settings;
