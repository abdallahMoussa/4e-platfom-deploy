import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { RiFilter2Fill } from "react-icons/ri";
import { KTSVG } from "../../../../helpers";
import FinancialFilterPopup from "../popup/FinancialFilterPopup";

function PmoReportsIndicatorFinancialReportsToolbar() {
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
              {intl.formatMessage({ id: "FinancialReport" })}
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
                {intl.formatMessage({ id: "FinancialReport" })}
              </li>
            </ul>
          </div>
        </div>
        <div className="card-toolbar ">
          <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end">
            <a
              className="btn btn-custom btn-active-white btn-flex btn-color-white btn-active-color-primary fw-bolder"
              // data-bs-toggle="modal"
              // data-bs-target="#Rega_modal_filter_financial"
              onClick={(event) => {
                event.preventDefault();
                setModalFShow(true);
              }}
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
      <FinancialFilterPopup
        show={modalFShow}
        handleClose={() => setModalFShow(false)}
      />
    </Fragment>
  );
}

export default PmoReportsIndicatorFinancialReportsToolbar;
