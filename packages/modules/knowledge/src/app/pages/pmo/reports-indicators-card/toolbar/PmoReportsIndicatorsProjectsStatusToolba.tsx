import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { RiFilter2Fill } from "react-icons/ri";
import { SystemFilter1 } from "../../../partials/SystemFilter1";
import ProjectsStatusFilterPopup from "../popup/ProjectsStatusFilterPopup";
import CreateReportPopup from "../popup/CreateReportPopup";
function PmoReportsIndicatorsProjectsStatusToolbar() {
  const [modalCShow, setModalCShow] = useState<boolean>(false);
  const [modalFShow, setModalFShow] = useState<boolean>(false);

  let intl = useIntl();
  return (
    <Fragment>
      <div className="toolbar py-5 py-lg-5" id="kt_toolbar">
        <div
          id="kt_toolbar_container"
          className="container-xxl p-0 d-flex flex-stack flex-wrap"
        >
          <div className="page-title d-flex flex-column me-3">
            <h1 className="d-flex text-white fw-bolder my-1 fs-2">
              {intl.formatMessage({ id: "ProjectStatusDataSummary" })}
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
              <li className="breadcrumb-item text-white opacity-75">
                <Link
                  to="/pmo-reports-indicators"
                  className="text-white text-hover-primary"
                >
                  {" "}
                  {intl.formatMessage({ id: "ReportsAndIndicators" })}
                </Link>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-white opacity-75">
                {intl.formatMessage({ id: "ProjectStatusDataSummary" })}
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center py-3 py-md-1">
            <div className="me-4">
              {/* <SystemFilter1 /> */}
              <div
                className="btn w-100 btn-custom btn-active-white btn-flex btn-color-white btn-active-color-primary fw-bolder"
                // data-bs-toggle="modal"
                // data-bs-target="#Rega_modal_filter_projects_status"
                onClick={(event) => {
                  event.preventDefault();
                  setModalFShow(true);
                }}
              >
                <RiFilter2Fill size={17} className="me-3" />{" "}
                {intl.formatMessage({ id: "Filtering" })}
              </div>
            </div>
            <a
              onClick={(event) => {
                event.preventDefault();
                setModalCShow(true);
              }}
              className="btn btn-bg-white btn-active-color-primary"
              // data-bs-toggle="modal"
              // data-bs-target="#Rega_modal_filter_create_report"
            >
              {intl.formatMessage({ id: "CreateNewReport" })}
            </a>
          </div>
        </div>
      </div>
      <ProjectsStatusFilterPopup
        show={modalFShow}
        handleClose={() => setModalFShow(false)}
      />
      <CreateReportPopup
        show={modalCShow}
        handleClose={() => setModalCShow(false)}
      />
    </Fragment>
  );
}

export default PmoReportsIndicatorsProjectsStatusToolbar;
