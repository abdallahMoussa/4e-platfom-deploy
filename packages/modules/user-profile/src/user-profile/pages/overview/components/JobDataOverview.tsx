import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
// import { getCurrentSystemLanguage } from "../../../../partials/functions/language";

function JobDataOverview() {
  let intl = useIntl();
  let [tableData, setTableData] = useState([
    {
      id: "1",
      job: "اخصائي",
      department: "اداره الرقابه",
      fromDate: "5/9/2017",
      toDate: "9/9/2020",
      duration: "3 سنوات",
    },
  ]);
  return (
    <Fragment>
      <div className="card shadow p-6 mb-7 ">
        <div className="d-flex justify-content-between px-3 mb-3">
          <p className="fw-bolder fs-4 ">
            {" "}
            {intl.formatMessage({ id: "FunctionalData" })}
          </p>
          <div className="btn btn-sm  btn-primary text-white">
            <Link to="/user-profile/overview/edit-job-data">
              <i className="fa-regular fa-pen-to-square"></i>
              <span className="text-white">
                {" "}
                {intl.formatMessage({ id: "Edit" })}
              </span>
            </Link>
          </div>
        </div>
        <hr />
        <div className="mt-7 px-3 mb-7">
          <div className="mb-4 row">
            <div className="col-3 me-5">
              <p className="text-muted fs-5 ">
                {" "}
                {intl.formatMessage({ id: "JobDegree" })}
              </p>
            </div>
            <div className="col-sm-6 col-12">
              <div className="text-black fw-bolder d-flex text-end ">
                مسئول رقابه{" "}
              </div>
            </div>
          </div>
          <div className="row mb-3 ">
            <div className="col-3 me-5">
              <p className="text-muted fs-5 ">
                {" "}
                {intl.formatMessage({ id: "Adminstration" })}
              </p>
            </div>

            <div className="col-7">
              <div className="text-black fw-bolder d-flex text-end ">
                اداره الرقابه
              </div>
            </div>
          </div>
          <div className="row mb-3 ">
            <div className="col-3 me-5">
              <p className="text-muted fs-5 ">
                {" "}
                {intl.formatMessage({ id: "JobCode" })}
              </p>
            </div>
            <div className="col-7">
              <p className="text-black fw-bolder">2345643</p>
            </div>
          </div>
          <div className="row mb-3 ">
            <div className="col-3 me-5">
              <p className="text-muted fs-5 ">
                {" "}
                {intl.formatMessage({ id: "HiringDate" })}
              </p>
            </div>

            <div className="col-7">
              <p className="text-black fw-bolder">5/9/2017</p>
            </div>
          </div>

          <div className="row mb-3 ">
            <div className="col-3 me-5 ">
              <p className="text-muted fs-5 ">
                {" "}
                {intl.formatMessage({ id: "AvailableVacations" })}
              </p>
            </div>
            <div className="col-7">
              <p className="text-black fw-bolder ">50 يوم</p>
            </div>
          </div>
          <div className="row mb-3 ">
            <div className="col-3 me-5 ">
              <p className="text-muted fs-5 ">
                {" "}
                {intl.formatMessage({ id: "LengthOfService" })}
              </p>
            </div>
            <div className="col-7">
              <p className="text-black fw-bolder ">6 سنوات</p>
            </div>
          </div>
          <div className="row mb-3 ">
            <div className="col-3 me-5 ">
              <p className="text-muted fs-5">
                {" "}
                {intl.formatMessage({ id: "Promotion" })}
              </p>
            </div>
            <div className="col-7">
              <p className="text-black fw-bolder d-flex ">
                <span>{intl.formatMessage({ id: "From" })}</span>
                <span className="text-primary mx-2">اخصائي</span>
                <span>{intl.formatMessage({ id: "To" })}</span>
                <span className="text-primary mx-2"> اخصائي اول</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="fw-bolder fs-4">
            {" "}
            {intl.formatMessage({ id: "JobHistory" })}
          </p>
          <div className="table-responsive">
            <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
              <thead>
                <tr className="fw-bolder text-muted">
                  <th className="min-w-100px text-center">
                    {intl.formatMessage({ id: "Job" })}
                  </th>
                  <th className="min-w-250px text-center">
                    {intl.formatMessage({
                      id: "Adminstration",
                    })}{" "}
                  </th>
                  <th className="min-w-250px text-center">
                    {intl.formatMessage({ id: "FromDate" })}
                  </th>
                  <th className="min-w-250px text-center">
                    {intl.formatMessage({ id: "ToDate" })}
                  </th>
                  <th className="min-w-250px text-center">
                    {intl.formatMessage({ id: "Duration" })}
                  </th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((item: any, index) => {
                  let { id, job, department, fromDate, toDate, duration } =
                    item;
                  return (
                    <Fragment key={Math.random()}>
                      <tr>
                        <td className="text-center text-primary">{job}</td>
                        <td className="text-center">{department}</td>
                        <td className="text-center">{fromDate}</td>
                        <td className="text-center">{toDate}</td>
                        <td className="text-center">{duration}</td>
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default JobDataOverview;
