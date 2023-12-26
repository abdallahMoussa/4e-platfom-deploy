import React, { FC, Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { KTSVG } from "../../../../helpers";
import FilterPopup from "../popups/FilterPopup";

const TechnicalSupportFeedbacksEmployeeToolbar: FC = () => {
  const intl = useIntl();
  const [filterShow, setFilterShow] = useState<boolean>(false);

  return (
    <>
      <Fragment>
        <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
          <div
            id="kt_toolbar_container"
            className="container-xxl p-0 d-flex flex-stack flex-wrap"
          >
            <div className="page-title d-flex flex-column me-3">
              <h1 className="d-flex text-white fw-bolder my-1 fs-2">
                {intl.formatMessage({ id: "TechnicalSupportFeedbacks" })}
              </h1>
              <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
                <li className="breadcrumb-item text-white opacity-75">
                  <Link
                    to="/home-workspace"
                    className="text-white text-hover-primary"
                  >
                    {intl.formatMessage({ id: "Home" })}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
                </li>
                <li className="breadcrumb-item text-white opacity-75">
                  <Link
                    to="/technical-support-workspace"
                    className="text-white text-hover-primary"
                  >
                    {intl.formatMessage({ id: "Workspace" })}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
                </li>
                <li className="breadcrumb-item text-white opacity-75">
                  {intl.formatMessage({ id: "TechnicalSupportEmployee" })}
                </li>
                <li className="breadcrumb-item">
                  <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
                </li>
                <li className="breadcrumb-item text-white opacity-75">
                  {" "}
                  {intl.formatMessage({
                    id: "TechnicalSupportFeedbacks",
                  })}
                </li>
              </ul>
            </div>
          </div>
          <div className="card-toolbar ">
            <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end">
              <a
                className="btn w-150px d-flex justify-content-center align-items-center btn-custom btn-active-white btn-flex btn-color-white btn-active-color-primary fw-bolder"
                onClick={() => setFilterShow(true)}
              >
                <span className="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
                  <KTSVG
                    path="/media/icons/duotune/general/gen107_filter.svg"
                    className="svg-icon-4 me-1"
                  />
                </span>
                {intl.formatMessage({ id: "Filtering" })}
              </a>
            </div>
          </div>
        </div>
      </Fragment>
      <FilterPopup  show={filterShow} handleClose={() => setFilterShow(false)}/>

    </>
  );
};

export { TechnicalSupportFeedbacksEmployeeToolbar};
