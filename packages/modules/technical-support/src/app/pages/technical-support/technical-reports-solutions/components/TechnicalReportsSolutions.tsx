import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { Actions } from "./Actions";
import { SystemPagination } from "../../../../../app/pages/partials/SystemPagination";

function TechnicalReportsSolutions() {
  let intl = useIntl();
  let [tableData, setTableData] = useState([
    {
      id: 1,
      title: "عنوان الحل",
      description: "وصف الحل",
      classification: "تصنيف الحل",
      date: { time: "02:00 am", Date: "25 June 2022" },
    },
    {
      id: 2,
      title: "عنوان الحل",
      description: "وصف الحل",
      classification: "تصنيف الحل",
      date: { time: "02:00 am", Date: "25 June 2022" },
    },
    {
      id: 3,
      title: "عنوان الحل",
      description: "وصف الحل",
      classification: "تصنيف الحل",
      date: { time: "02:00 am", Date: "25 June 2022" },
    },
    {
      id: 4,
      title: "عنوان الحل",
      description: "وصف الحل",
      classification: "تصنيف الحل",
      date: { time: "02:00 am", Date: "25 June 2022" },
    },
    {
      id: 5,
      title: "عنوان الحل",
      description: "وصف الحل",
      classification: "تصنيف الحل",
      date: { time: "02:00 am", Date: "25 June 2022" },
    },
  ]);
  return (
    <Fragment>
      <div className="card shadow p-6 mb-7 ">
        <div className="position-relative  py-4 w-50 mb-4 mx-9">
          <input
            type="search"
            name="searchForProject"
            className="input input-group searchBoxDesign search_input"
            id="searchForProject"
            placeholder={intl.formatMessage({
              id: "FindSolutions",
            })}
          />
          <i className="fa-solid fa-light fa-magnifying-glass my-magnify fs-3 text-muted fa-fw position-absolute"></i>
        </div>
        <div className="table-responsive mb-3">
          <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4 text-center">
            <thead>
              <tr className="fw-bolder">
                <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                  {intl.formatMessage({ id: "SolutionTitle" })}{" "}
                </th>
                <th className="px-2 pb-3 min-w-50px  text-muted">
                  {intl.formatMessage({ id: "SolutionDescription" })}{" "}
                </th>
                <th className="px-2 pb-3 min-w-50px max-w-200px  text-muted">
                  {intl.formatMessage({ id: "SolutionClassification" })}{" "}
                </th>
                <th className="px-2 pb-3 min-w-50px  text-muted">
                  {intl.formatMessage({ id: "Date" })}{" "}
                </th>
                <th className="px-2 pb-3 min-w-50px max-w-250px text-center text-muted">
                  {intl.formatMessage({ id: "Procedures" })}{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((item) => {
                let {
                  id,
                  title,
                  description,
                  classification,
                  date: { time, Date },
                } = item;
                return (
                  <Fragment key={Math.random()}>
                    <tr>
                      <td>
                        <p className=" text-center">{title}</p>
                      </td>
                      <td className="text-center">{description}</td>
                      <td className="text-center">{classification}</td>
                      <td className="text-center">
                        <p className="text-muted m-0 p-0 ">{time}</p>
                        <p>{Date}</p>
                      </td>

                      <td>
                        <div className="text-center">
                          <Actions id={id } />
                        </div>
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
          <SystemPagination />
        </div>
      </div>
    </Fragment>
  );
}

export default TechnicalReportsSolutions;
