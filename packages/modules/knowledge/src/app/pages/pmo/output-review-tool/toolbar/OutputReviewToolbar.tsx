import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { FilterOutputDataPopup } from "../popup/filter-outputs-popup";

const OutputReviewToolbar: FC = () => {
  const [modalFShow, setModalFShow] = useState<boolean>(false);

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
              {intl.formatMessage({ id: "Outputs" })}
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
              <span className="breadcrumb-item text-white opacity-75">
                {intl.formatMessage({ id: "OutputReview" })}
              </span>
            </ul>
          </div>
        </div>
        <div className="card-toolbar ">
          <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end">
            <a
              className="btn btn-custom btn-active-white btn-flex btn-color-white btn-active-color-primary fw-bolder"
              // data-bs-toggle="modal"
              // data-bs-target="#Rega_modal_Filter_Output_Data"
              onClick={(event) => {
                event.preventDefault();
                setModalFShow(true);
              }}
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
            <FilterOutputDataPopup
              show={modalFShow}
              handleClose={() => setModalFShow(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export { OutputReviewToolbar };
