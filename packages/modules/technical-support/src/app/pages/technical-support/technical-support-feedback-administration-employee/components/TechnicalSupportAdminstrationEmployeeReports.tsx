import React, { Fragment } from "react";
import { useIntl } from "react-intl";
import FilterPopup from "../popups/FilterPopup";
import Reports from "./Reports";

function TechnicalSupportAdminstrationEmployeeReports() {
  let intl = useIntl();
  return (
    <Fragment>
      <div className="card card-xl-stretch mb-xl-8 pt-7">
        <div className="card-header d-flex align-items-center ">
          <div className="position-relative w-45 mx-5">
            <input
              type="search"
              name="searchForProject"
              className="input input-group searchBoxDesign search_input"
              id="searchForProject"
              placeholder={intl.formatMessage({
                id: "SearchReport",
              })}
            />
            <i className="fa-solid fa-light fa-magnifying-glass my-magnify fs-3 text-muted fa-fw position-absolute"></i>
          </div>
          <div className="w-40 d-flex justify-content-end align-items-center">
            <div className="w-40 mx-3"> </div>
          </div>
        </div>
        <Reports />
      </div>
      <FilterPopup />
    </Fragment>
  );
}

export default TechnicalSupportAdminstrationEmployeeReports;
