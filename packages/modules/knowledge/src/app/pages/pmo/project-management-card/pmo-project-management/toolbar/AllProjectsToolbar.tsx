import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import FilterProjectsPopup from "../popup/filter-projects-popup";
import AddAnExistingProject from "../../pmo-project-details/project-details/popup/add-existing-project-popup";

const AllProjectsToolbar: FC = () => {
  const intl = useIntl();
  const [modalFShow, setModalFShow] = useState<boolean>(false);
  const [modalAShow, setModalAShow] = useState<boolean>(false);

  return (
    <>
      <div className="toolbar py-5 py-lg-10" id="kt_toolbar">
        <div
          id="kt_toolbar_container"
          className="container-xxl d-flex flex-stack flex-wrap p-0"
        >
          <div className="page-title d-flex flex-column me-3">
            <h1 className="d-flex text-white fw-bolder my-1 fs-3 mb-5">
              {intl.formatMessage({ id: "ProjectList" })}
            </h1>
            <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7">
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
                {intl.formatMessage({ id: "ProjectList" })}
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center py-3 py-md-1">
            <div className="me-4">
              <a
                onClick={(event) => {
                  event.preventDefault();
                  setModalFShow(true);
                }}
                className="btn btn-custom btn-active-white btn-flex btn-color-white btn-active-color-primary fw-bolder"
                // data-bs-toggle="modal"
                // data-bs-target="#rega_modal_filter_projects"
              >
                <span className="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {intl.formatMessage({ id: "Filtering" })}
              </a>
            </div>
            <div
              className="btn btn-bg-white btn-active-color-primary"
              // data-bs-toggle="modal"
              // data-bs-target="#Rega_modal_add_existing_project"
              onClick={() => setModalAShow(true)}
            >
              {intl.formatMessage({ id: "AddAnExistingProject" })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="rega_modal_filter_projects"
        aria-hidden="true"
      >
        <FilterProjectsPopup
          show={modalFShow}
          handleClose={() => setModalFShow(false)}
        />
      </div>
      <AddAnExistingProject
        show={modalAShow}
        handleClose={() => setModalAShow(false)}
      />
    </>
  );
};
export { AllProjectsToolbar };
