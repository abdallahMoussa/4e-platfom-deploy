import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { SystemPagination } from "../../../../partials/SystemPagination";
import { Actions } from "./Actions";

function Tasks() {
  let intl = useIntl();
  let [tasksData, setTasksData] = useState([
    {
      id: 1,
      taskName: "مهمة 1",
      startDate: "14 Dec 2023",
      endDate: "14 Dec 2023",
      duration: "3 ايام",
      status: "مكتمله",
    },
    {
      id: 2,
      taskName: "مهمة 2",
      startDate: "14 Dec 2023",
      endDate: "14 Dec 2023",
      duration: "5 ايام",
      status: "مكتمله",
    },
    {
      id: 3,
      taskName: "مهمة 3",
      startDate: "14 Dec 2023",
      endDate: "14 Dec 2023",
      duration: "7 ايام",
      status: "غير مكتمله",
    },
  ]);
  return (
    <Fragment>
      <div className="detailsCard my-5">
        <div className="card card-xl-stretch mb-xl-8">
          <div className="card-body py-3">
            <div className="table-responsive mb-3">
              <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4 text-center">
                <thead>
                  <tr className="fw-bolder">
                    <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                      ID
                    </th>

                    <th className="px-2 pb-3 min-w-50px  text-muted">
                      {intl.formatMessage({ id: "TheTask" })}
                    </th>
                    <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                      {intl.formatMessage({ id: "StartDate" })}{" "}
                    </th>
                    <th className="px-2 pb-3 min-w-50px  text-muted">
                      {intl.formatMessage({ id: "EndingDate" })}{" "}
                    </th>
                    <th className="px-2 pb-3 min-w-50px  text-muted">
                      {intl.formatMessage({ id: "Duration" })}{" "}
                    </th>
                    <th className="px-2 pb-3 min-w-50px  text-muted">
                      {intl.formatMessage({ id: "Status" })}{" "}
                    </th>
                    <th className="px-2 pb-3 min-w-50px max-w-250px text-center text-muted">
                      {intl.formatMessage({ id: "Procedures" })}{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tasksData?.map((item) => {
                    let { id, taskName, startDate, endDate, duration, status } =
                      item;
                    return (
                      <Fragment key={Math.random()}>
                        <tr>
                          <td className="text-center">{id}</td>
                          <td>
                            <p className="text-primary text-center">
                              {taskName}
                            </p>
                          </td>
                          <td className="text-center">{startDate}</td>
                          <td className="text-center">{endDate}</td>
                          <td className="text-center">{duration}</td>
                          <td className="text-center">
                            <p
                              className={`${
                                status == "مكتمله"
                                  ? "text-success"
                                  : status == "غير مكتمله"
                                  ? "text-danger"
                                  : ""
                              }`}
                            >
                              {status}
                            </p>
                          </td>
                          <td>
                            <div className="text-center">
                              <Actions id={id} />
                            </div>
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
        </div>
      </div>
    </Fragment>
  );
}

export default Tasks;
