import React, { Fragment, useState } from "react";
import { Actions } from "./Actions";
import { SystemPagination } from "../../../../../app/pages/partials/SystemPagination";
import { useIntl } from "react-intl";
import { useSearchParams } from "react-router-dom";
import RedirectPopup from "../popups/RedirectPopup";

function RejectTab() {
  let [tableData, setTableData] = useState([
    {
      id: 1,
      number: 12345,
      title: "بلاغ عن عطل فني",
      employee: "موظف الهيئه",
      type: "عطل فني",
      category: "معدات",
      priority: "عادي",
      status: "مرفوضه",
      date: {
        time: "00:02 am",
        Date: "22 June 2022",
      },
      lastUpdate: "22 June 2022",
    },
    {
      id: 2,
      number: 12345,
      title: "بلاغ عن عطل فني",
      employee: "موظف الهيئه",
      type: "عطل فني",
      category: "معدات",
      priority: "خطر",
      status: "تم حلها",
      date: {
        time: "00:02 am",
        Date: "22 June 2022",
      },
      lastUpdate: "22 June 2022",
    },
    {
      id: 3,
      number: 12345,
      title: "بلاغ عن عطل فني",
      employee: "موظف الهيئه",
      type: "عطل فني",
      category: "معدات",
      priority: "شديد الخطوره",
      status: "ساريه",
      date: {
        time: "00:02 am",
        Date: "22 June 2022",
      },
      lastUpdate: "22 June 2022",
    },
    {
      id: 4,
      number: 12345,
      title: "بلاغ عن عطل فني",
      employee: "موظف الهيئه",
      type: "عطل فني",
      category: "معدات",
      priority: "شديد الخطوره",
      status: "مغلقه",
      date: {
        time: "00:02 am",
        Date: "22 June 2022",
      },
      lastUpdate: "22 June 2022",
    },
    {
      id: 5,
      number: 12345,
      title: "بلاغ عن عطل فني",
      employee: "موظف الهيئه",
      type: "عطل فني",
      category: "معدات",
      priority: "شديد الخطوره",
      status: "محوله",
      date: {
        time: "00:02 am",
        Date: "22 June 2022",
      },
      lastUpdate: "22 June 2022",
    },
    {
      id: 6,
      number: 12345,
      title: "بلاغ عن عطل فني",
      employee: "موظف الهيئه",
      type: "عطل فني",
      category: "معدات",
      priority: "شديد الخطوره",
      status: "متأخره",
      date: {
        time: "00:02 am",
        Date: "22 June 2022",
      },
      lastUpdate: "22 June 2022",
    },
  ]);
  let intl = useIntl();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <Fragment>
      <div
        className={`tab-pane fade  ${
          searchParams.get("subTabName") == "rejected-reports" ? "show" : ""
        }`}
        id="rejected-reports-tab"
      >
        {" "}
        <div className="mb-5">
          <div className="table-responsive mb-3">
            <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4 text-center">
              <thead>
                <tr className="fw-bolder">
                  <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                    {intl.formatMessage({ id: "ReportNumber" })}
                  </th>

                  {searchParams.get("tabName") == "received-reports" ? (
                    <Fragment>
                      <th className="px-2 pb-3 min-w-50px  text-muted">
                        {intl.formatMessage({ id: "TheReport" })}
                      </th>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <th className="px-2 pb-3 min-w-50px  text-muted">
                        {intl.formatMessage({ id: "TheTitle" })}
                      </th>
                    </Fragment>
                  )}
                  <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                    {intl.formatMessage({ id: "Type" })}{" "}
                  </th>
                  <th className="px-2 pb-3 min-w-50px  text-muted">
                    {intl.formatMessage({ id: "Category" })}{" "}
                  </th>
                  <th className="px-2 pb-3 min-w-50px  text-muted">
                    {intl.formatMessage({ id: "Priority" })}{" "}
                  </th>
                  <th className="px-2 pb-3 min-w-50px  text-muted">
                    {intl.formatMessage({ id: "Status" })}{" "}
                  </th>
                  <th className="px-2 pb-3 min-w-50px  text-muted">
                    {intl.formatMessage({ id: "Date" })}{" "}
                  </th>
                  <th className="px-2 pb-3 min-w-50px  text-muted">
                    {intl.formatMessage({ id: "LastUpdate" })}{" "}
                  </th>
                  {searchParams.get("tabName") !== "my-reports" ? (
                    <Fragment>
                      <th className="px-2 pb-3 min-w-50px  text-muted">
                        {intl.formatMessage({ id: "Options" })}{" "}
                      </th>
                    </Fragment>
                  ) : (
                    ""
                  )}
                </tr>
              </thead>
              <tbody>
                {tableData
                  ?.filter((item) => {
                    return item?.status == "مرفوضه";
                  })
                  .map((item) => {
                    let {
                      id,
                      number,
                      title,
                      employee,
                      type,
                      category,
                      priority,
                      status,
                      date: { time, Date },
                      lastUpdate,
                    } = item;
                    return (
                      <Fragment key={Math.random()}>
                        <tr>
                          <td className="text-center text-primary">{number}</td>
                          <td>
                            <p className="text-dark fs-5 text-center p-0 m-0">
                              {title}
                            </p>
                            <p className="text-primary fs-6 text-center">
                              {employee}
                            </p>
                          </td>
                          <td className="text-center">{type}</td>
                          <td className="text-center">{category}</td>
                          <td className="text-center">{priority}</td>
                          <td className="text-center">
                            <p
                              className={`${
                                status == "مرفوضه"
                                  ? "badgex badge-light-danger"
                                  : status == "تم حلها"
                                  ? "badgex badge-light-success"
                                  : status == "ساريه"
                                  ? "badgex badge-light-warning"
                                  : ""
                              }`}
                            >
                              {status}
                            </p>
                          </td>
                          <td className="text-center">
                            <p className="text-muted p-0 m-0">{time}</p>
                            <p className="text-dark">{Date}</p>
                          </td>
                          <td className="text-center">{lastUpdate}</td>

                          {searchParams.get("tabName") !== "my-reports" ? (
                          <Fragment>
                            <td>
                              <Actions id={id} />
                            </td>
                          </Fragment>
                        ) : (
                          ""
                        )}
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
      <RedirectPopup />
    </Fragment>
  );
}

export default RejectTab;
