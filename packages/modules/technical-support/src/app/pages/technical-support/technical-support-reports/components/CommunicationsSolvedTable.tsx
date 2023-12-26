import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { SystemPagination } from "../../../../../app/pages/partials/SystemPagination";
import { ExportDropDown } from "../../../partials/ExportDropDown";
import FilterManagementCommunications from "../popup/filter-management-communications-popup";


const CommunicationsSolvedTable = () => {
    let intl = useIntl();
  let [tableData, setTableData] = useState([
    {
      id: 1,
      number: 12345,
      title: "بلاغ عن عطل فني",
      employee: "موظف الهيئه",
      type: "عطل فني",
      category: "معدات",
      priority: "عادي",
      status: "تم حلها",
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
      status: "تم حلها",
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
      status: "تم حلها",
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
      status: "تم حلها",
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
        status: "تم حلها",
        date: {
          time: "00:02 am",
          Date: "22 June 2022",
        },
        lastUpdate: "22 June 2022",
      },
  ]);
    return(
        <Fragment>
        <div className="d-flex justify-content-end mb-5">
            <div className="card-toolbar ">
            <div className="d-flex justify-content-end align-items-center mt-3 mt-lg-0 justify-content-lg-end">
              <ExportDropDown />       
            </div>
          </div>
        </div>
        <div className="card card-xl-stretch mb-xl-8">
        <div className="card-body py-3">
        <div className="tab-content">
        <div className="tab-pane fade active show" id="REGA_table_widget_5_tab_1">
        <div className="table-responsive mb-3">
            <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4 text-center">
              <thead>
                <tr className="fw-bolder">
                  <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                    {intl.formatMessage({ id: "ReportNumber" })}
                  </th>

                  <th className="px-2 pb-3 min-w-50px  text-muted">
                    {intl.formatMessage({ id: "TheReport" })}
                  </th>
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
                </tr>
              </thead>
              <tbody>
                {tableData?.map((item) => {
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
                                : status == "مغلقه"
                                ? "badgex badge-light-dark"
                                : status == "متأخره"
                                ? "badgex badge-light-danger"
                                : status == "محوله"
                                ? "badgex badge-light-primary"
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
        </div>
        <div className="modal fade" id="FilterManagementCommunications" aria-hidden="true">
        <FilterManagementCommunications />
        </div>
        </Fragment>
    );
}

export {CommunicationsSolvedTable}