import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { useSearchParams } from "react-router-dom";
import { EmployeeActions } from "./EmployeeActions";
import { SystemPagination } from "../../../../../app/pages/partials/SystemPagination";

function AdminstrationReportsTab() {
  let intl = useIntl();
  let [searchParams, setSearchParams] = useSearchParams();
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
  ]);
  return (
    <Fragment>
      <div className="card-body pb-7">
        <div className="position-relative w-40 mb-7 ">
          <input
            type="search"
            name="searchForProject"
            className="input input-group searchBoxDesign search_input"
            id="searchForProject"
            placeholder={intl.formatMessage({
              id: "FindEmployee",
            })}
          />
          <i className="fa-solid fa-light fa-magnifying-glass my-magnify fs-3 text-muted fa-fw position-absolute"></i>
        </div>
        <div className="d-flex flex-wrap mb-7 bg-light">
          <button
            className={`w-fit btn d-flex justify-content-between align-items-center rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("subTabName") == "all-reports" &&
              searchParams.get("tabName") == "adminstration-reports"
                ? "active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("subTabName", "all-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "AllReports" })}
            <span
              className={`bg-primary opacity-75 h-fit  w-fit text-dark mx-2 ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              145
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("subTabName") == "solved-reports" &&
              searchParams.get("tabName") == "adminstration-reports"
                ? " active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "adminstration-reports");
              searchParams.set("subTabName", "solved-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Solved" })}
            <span
              className={`bg-success opacity-75 h-fit ${
                intl.locale == "ar" ? "p-1" : ""
              } mx-3 w-fit text-dark`}
            >
              20
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("subTabName") == "continued-reports" &&
              searchParams.get("tabName") == "adminstration-reports"
                ? " active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "adminstration-reports");
              searchParams.set("subTabName", "continued-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Continued" })}
            <span
              className={`bg-warning opacity-75 h-fit w-fit mx-3 text-dark ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              15
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("subTabName") == "rejected-reports" &&
              searchParams.get("tabName") == "adminstration-reports"
                ? " active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "adminstration-reports");
              searchParams.set("subTabName", "rejected-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Rejected" })}
            <span
              className={`bg-danger opacity-75 h-fit  w-fit text-dark mx-3 ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              15
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("subTabName") == "closed-reports" &&
              searchParams.get("tabName") == "adminstration-reports"
                ? " active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "adminstration-reports");
              searchParams.set("subTabName", "closed-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Closed" })}
            <span
              className={`bg-secondary opacity-75 h-fit  w-fit text-dark mx-3 ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              15
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("subTabName") == "late-reports" &&
              searchParams.get("tabName") == "adminstration-reports"
                ? " active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "adminstration-reports");
              searchParams.set("subTabName", "late-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Late" })}
            <span
              className={`bg-danger opacity-50 h-fit  w-fit text-hover-dark mx-3 ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              20
            </span>
          </button>
          <button
            className={`w-150px btn rounded-0 bg-transparent btn-active-color-primary border-0 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
              searchParams.get("subTabName") == "converted-reports" &&
              searchParams.get("tabName") == "adminstration-reports"
                ? " active"
                : ""
            }`}
            onClick={() => {
              searchParams.set("tabName", "adminstration-reports");
              searchParams.set("subTabName", "converted-reports");
              setSearchParams(searchParams);
            }}
          >
            {" "}
            {intl.formatMessage({ id: "Converted" })}
            <span
              className={`bg-success opacity-50 h-fit  w-fit text-hover-dark mx-3 ${
                intl.locale == "ar" ? "p-1" : ""
              }`}
            >
              10
            </span>
          </button>
        </div>
        {searchParams.get("subTabName") == "all-reports" &&
        searchParams.get("tabName") == "adminstration-reports" ? (
          <div
            className={`tab-pane fade  ${
              searchParams.get("subTabName") == "all-reports" &&
              searchParams.get("tabName") == "adminstration-reports"
                ? "show"
                : ""
            }`}
            id="all-reports-tab"
          >
            <div className="mb-5">
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
                      <th className="px-2 pb-3 min-w-50px max-w-250px text-center text-muted">
                        {intl.formatMessage({ id: "Procedures" })}{" "}
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
                            <td className="text-center text-primary">
                              {number}
                            </td>
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
          </div>
        ) : searchParams.get("subTabName") == "solved-reports" &&
          searchParams.get("tabName") == "adminstration-reports" ? (
          <div
            className={`tab-pane fade  ${
              searchParams.get("subTabName") == "solved-reports" ? "show" : ""
            }`}
            id="solved-reports-tab"
          >
            <div className="mb-5">
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
                      <th className="px-2 pb-3 min-w-50px max-w-250px text-center text-muted">
                        {intl.formatMessage({ id: "Procedures" })}{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData
                      ?.filter((item) => {
                        return item?.status == "تم حلها";
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
                              <td className="text-center text-primary">
                                {number}
                              </td>
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
          </div>
        ) : searchParams.get("subTabName") == "continued-reports" &&
          searchParams.get("tabName") == "adminstration-reports" ? (
          <div
            className={`tab-pane fade  ${
              searchParams.get("subTabName") == "continued-reports"
                ? "show"
                : ""
            }`}
            id="continued-reports-tab"
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
                      <th className="px-2 pb-3 min-w-50px max-w-250px text-center text-muted">
                        {intl.formatMessage({ id: "Procedures" })}{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData
                      ?.filter((item) => {
                        return item?.status == "ساريه";
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
                              <td className="text-center text-primary">
                                {number}
                              </td>
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
          </div>
        ) : searchParams.get("subTabName") == "rejected-reports" &&
          searchParams.get("tabName") == "adminstration-reports" ? (
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
                      <th className="px-2 pb-3 min-w-50px max-w-250px text-center text-muted">
                        {intl.formatMessage({ id: "Procedures" })}{" "}
                      </th>
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
                              <td className="text-center text-primary">
                                {number}
                              </td>
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
          </div>
        ) : searchParams.get("subTabName") == "closed-reports" &&
          searchParams.get("tabName") == "adminstration-reports" ? (
          <div
            className={`tab-pane fade  ${
              searchParams.get("subTabName") == "closed-reports" ? "show" : ""
            }`}
            id="closed-reports-tab"
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
                      <th className="px-2 pb-3 min-w-50px max-w-250px text-center text-muted">
                        {intl.formatMessage({ id: "Procedures" })}{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData
                      ?.filter((item) => {
                        return item.status == "مغلقه";
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
                              <td className="text-center text-primary">
                                {number}
                              </td>
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
          </div>
        ) : searchParams.get("subTabName") == "late-reports" &&
          searchParams.get("tabName") == "adminstration-reports" ? (
          <div
            className={`tab-pane fade  ${
              searchParams.get("subTabName") == "late-reports" ? "show" : ""
            }`}
            id="late-reports-tab"
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
                      <th className="px-2 pb-3 min-w-50px max-w-250px text-center text-muted">
                        {intl.formatMessage({ id: "Procedures" })}{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData
                      ?.filter((item) => {
                        return item.status == "متأخره";
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
                              <td className="text-center text-primary">
                                {number}
                              </td>
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
          </div>
        ) : searchParams.get("subTabName") == "converted-reports" &&
          searchParams.get("tabName") == "adminstration-reports" ? (
          <div
            className={`tab-pane fade  ${
              searchParams.get("subTabName") == "converted-reports"
                ? "show"
                : ""
            }`}
            id="converted-reports-tab"
          >
            <div className="mb-5">
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
                      <th className="px-2 pb-3 min-w-50px max-w-250px text-center text-muted">
                        {intl.formatMessage({ id: "Procedures" })}{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData
                      ?.filter((item) => {
                        return item.status == "محوله";
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
                              <td className="text-center text-primary">
                                {number}
                              </td>
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
          </div>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
}

export default AdminstrationReportsTab;
