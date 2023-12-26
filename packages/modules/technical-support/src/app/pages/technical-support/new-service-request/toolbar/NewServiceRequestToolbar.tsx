import React, { FC, Fragment } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
const NewServiceRequestToolbar: FC = () => {
  let intl = useIntl();
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
                {intl.formatMessage({ id: "RequestNewService" })}
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
                  {" "}
                  {intl.formatMessage({ id: "RequestNewService" })}
                </li>
              </ul>
            </div>
            <div className="card-toolbar ">
              <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end">
                <Link
                  to="/new-service-request/add-new-service"
                  className="btn btn-bg-white btn-active-color-primary mx-3"
                >
                  {intl.formatMessage({ id: "AddNewService" })}
                </Link>
                <Link
                  to="/current-service-report"
                  className=" btn btn-primary fw-bolder  mx-1 text-center  "
                >
                  {intl.formatMessage({ id: "CurrentServiceReport" })}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export { NewServiceRequestToolbar };
