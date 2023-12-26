import React, { Fragment, useState } from "react";
import { EmployeeActions } from "./EmployeeActions";
import { useIntl } from "react-intl";
import { SystemPagination } from "../../../../../app/pages/partials/SystemPagination";
import { useLocation } from "react-router";

function EmployeesTab() {
  let intl = useIntl();
  let location = useLocation();
  let [employeesData, setEmployeesData] = useState([
    { id: 1, name: "اسم الموظف", total: 300, solvedTotal: 150, late: 150 },
    { id: 2, name: "اسم الموظف", total: 300, solvedTotal: 150, late: 150 },
    { id: 3, name: "اسم الموظف", total: 300, solvedTotal: 150, late: 150 },
  ]);
  return (
    <Fragment>
      <div className="mb-5 mt-7 container-xxl">
        <div className="table-responsive mt-3 pb-7">
          <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
            <thead>
              <tr className="fw-bolder text-muted">
                <th className="min-w-200px text-center">
                  {intl.formatMessage({ id: "EmployeeName" })}
                </th>
                <th className="min-w-200px text-center">
                  {intl.formatMessage({ id: "TotalReports" })}
                </th>
                <th className="min-w-200px text-center">
                  {intl.formatMessage({
                    id: "SolvedReports",
                  })}{" "}
                </th>
                <th className="min-w-200px text-center">
                  {intl.formatMessage({
                    id: "LatestReports",
                  })}{" "}
                </th>

                <th className="min-w-200px text-center">
                  {intl.formatMessage({ id: "Options" })}
                </th>
              </tr>
            </thead>

            <tbody>
              {employeesData?.map((item: any, index) => {
                let { id, name, total, solvedTotal, late } = item;
                return (
                  <Fragment key={Math.random()}>
                    <tr>
                      <td className="text-center">{name}</td>

                      <td className="text-center text-primary">{total}</td>
                      <td className="text-center text-success">
                        {solvedTotal}
                      </td>
                      <td className="text-center text-danger">{late}</td>
                      <td className="text-center">
                        <EmployeeActions id={id} />
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        <SystemPagination />
      </div>
    </Fragment>
  );
}

export default EmployeesTab;
