import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
// import { FilterOutputDataPopup } from "../popup/filter-outputs-popup";
function TrackRequestsToolToolbar() {
  const intl = useIntl();

  return (
    <>
      <div className="toolbar py-5 py-lg-5" id="kt_toolbar">
        <div
          id="kt_toolbar_container"
          className="container-xxl p-0 d-flex flex-stack flex-wrap"
        >
          <div className="page-title d-flex flex-column me-3">
            <h1 className="d-flex text-white fw-bolder my-1 fs-3">
              {intl.formatMessage({ id: "TrackRequests" })}
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
                  to="/pmo-workspace"
                  className="text-white text-hover-primary"
                >
                  {intl.formatMessage({ id: "Workspace" })}
                </Link>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
              </li>
              <li className="text-white opacity-75">
                {intl.formatMessage({ id: "TrackRequests" })}
              </li>
            </ul>
          </div>
          <Link
            to="/add-track-requests-tools"
            className="btn btn-bg-white btn-active-color-primary"
          >
            {intl.formatMessage({ id: "AddNewPath" })}
          </Link>
        </div>
      </div>
    </>
  );
}

export default TrackRequestsToolToolbar;
