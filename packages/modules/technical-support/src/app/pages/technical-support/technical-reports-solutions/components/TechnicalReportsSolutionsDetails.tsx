import React, { Fragment } from "react";
import { useIntl } from "react-intl";
import { Link, useParams } from "react-router-dom";

function TechnicalReportsSolutionsDetails() {
  let intl = useIntl();
  let { id } = useParams();
  return (
    <Fragment>
      <div className="card mb-5 mb-xl-10 shadow pb-5">
        <div className="card-body pt-9 pb-0">
          <div className="card-header title_details_border bg-light  px-4 py-4  mb-3 w-100 d-flex align-items-center ">
            <h3 className="card-title align-items-start flex-column w-40">
              <span className="card-label fw-bolder text-black fs-4 mb-2 ">
                {intl.formatMessage({
                  id: "ReportSolutionData",
                })}
              </span>
              <span className="mt-1 fs-6 text-muted">
                {intl.formatMessage({
                  id: "CurrentReportSolutionData",
                })}
              </span>
            </h3>
            <div className="h-50 w-50 d-flex justify-content-end align-items-center">
              <Link
                to={`/technical-reports-solutions/${id}/edit-solution`}
                className="btn btn-secondary mx-1 text-center w-25 h-50"
              >
                {intl.formatMessage({ id: "EditingSolution" })}
              </Link>
              <Link
                to={`/technical-reports-solutions/add-new-solution`}
                className="btn btn-primary mx-1 text-center w-25 h-50"
              >
                {intl.formatMessage({ id: "AddingSolution" })}
              </Link>
            </div>
          </div>
          <div className="d-flex my-gray-dash-border align-items-center  px-4 py-4  mb-3 w-100">
            <p className="pb-2 mb-0 text-black-50 fw-bolder fs-6">
              {intl.formatMessage({
                id: "SolutionTitle",
              })}{" "}
              :{" "}
            </p>
            <p className="px-2 mb-0  pb-2 fw-bolder text-primary ">
              عنوان الحل{" "}
            </p>
          </div>
          <div className=" my-gray-dash-border d-flex  align-items-center  px-4 py-4  mb-3 w-100">
            <p className="pb-2 mb-0 fw-bolder text-black-50 fw-bolder fs-6">
              {intl.formatMessage({
                id: "SolutionDescription",
              })}{" "}
              :
            </p>
            <p className="px-2 mb-0  pb-2 text-black-50 fw-bolder fs-6">
              وصف الحل
            </p>
          </div>
          <div className="d-flex  px-4 py-4  mb-3 w-100 align-items-center my-gray-dash-border">
            <p className="pb-2 mb-0 text-black-50 fw-bolder fs-6">
              {intl.formatMessage({ id: "MainClassification" })} :
            </p>
            <p className="px-2 mb-0  pb-2  text-black-50 fw-bolder fs-6 ">
              التصنيف الرئيسي
            </p>
          </div>
          <div className="d-flex my-gray-dash-border align-items-center  px-4 py-4  mb-3 w-100">
            <p className="pb-2 mb-0 text-black-50 fw-bolder fs-6">
              {intl.formatMessage({ id: "SubCategory" })} :
            </p>
            <p className="px-2 mb-0  pb-2  text-black-50 fw-bolder fs-6">
              التصنيف الفرعي
            </p>
          </div>
          <div className=" my-gray-dash-border d-flex align-items-center px-4 py-4  mb-3 w-100">
            <p className="pb-2 mb-0  text-black-50 fw-bolder fs-6">
              {intl.formatMessage({ id: "Date" })} :
            </p>
            <p className="px-2 mb-0  pb-2  text-black-50 fw-bolder fs-6">
              25 June 2022
            </p>
          </div>
          <div className="d-flex align-items-center  px-4 py-4  mb-3 w-100 my-gray-dash-border">
            <p className="pb-2 mb-0 text-black-50 fw-bolder fs-6">
              {intl.formatMessage({ id: "Time" })} :
            </p>
            <p className="px-2 mb-0  pb-2 text-black-50 fw-bolder fs-6">
              00:02 am
            </p>
          </div>
          <div className="d-flex align-items-center  px-4 py-4  mb-3 w-100 my-gray-dash-border">
            <p className="pb-2 mb-0 text-black-50 fw-bolder fs-6">
              {intl.formatMessage({ id: "CreatedBy" })} :
            </p>
            <p className="px-2 mb-0  pb-2 text-black-50 fw-bolder fs-6">
              سمير منيب
            </p>
          </div>
          <div className="d-flex align-items-center  px-4 py-4  mb-3 w-100 my-gray-dash-border">
            <p className="pb-2 mb-0 text-black-50 fw-bolder fs-6">
              {intl.formatMessage({ id: "CreatedOnDate" })} :
            </p>
            <p className="px-2 mb-0  pb-2 text-black-50 fw-bolder fs-6">
              22 June 2022
            </p>
          </div>
          <div className="d-flex align-items-center  px-4 py-4  mb-3 w-100">
            <p className="pb-2 mb-0 text-black-50 fw-bolder fs-6">
              {intl.formatMessage({ id: "LastUpdateDate" })} :
            </p>
            <p className="px-2 mb-0  pb-2 text-black-50 fw-bolder fs-6">
              25 June 2023
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TechnicalReportsSolutionsDetails;
