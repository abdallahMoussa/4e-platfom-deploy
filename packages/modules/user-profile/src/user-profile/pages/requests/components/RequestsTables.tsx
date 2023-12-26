import React, { Fragment, useState } from "react";
import { SystemPagination } from "../../../../partials/SystemPagination";
import { useIntl } from "react-intl";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { OutgoingActions } from "./OutgoingActions";
import { IncomingActions } from "./IncomingActions";
import { getCurrentSystemLanguage } from "../../../../functions/language";
function RequestsTables() {
  let intl = useIntl();
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  let [tableOutgingRequests, setTableOutgingRequests] = useState([
    {
      id: 1,
      requestNum: "12345",
      requestName: "اسم الطلب",
      whereSent: { sentTo: "فهد الحمادي", commisionName: "الاداره القانونيه" },
      requestType: "نوع الطلب",
      departmentName: "الاداره القانونيه",
      date: "14 Dec 2023",
      status: "تم الرفض",
    },
    {
      id: 2,
      requestNum: "12345",
      requestName: "اسم الطلب",
      whereSent: { sentTo: "فهد الحمادي", commisionName: "الاداره القانونيه" },
      requestType: "نوع الطلب",
      departmentName: "الاداره القانونيه",
      date: "14 Dec 2023",
      status: "تم الاستلام",
    },
    {
      id: 3,
      requestNum: "12345",
      requestName: "اسم الطلب",
      whereSent: { sentTo: "فهد الحمادي", commisionName: "الاداره القانونيه" },
      requestType: "نوع الطلب",
      departmentName: "الاداره القانونيه",
      date: "14 Dec 2023",
      status: "تم القبول",
    },
  ]);
  let [tableIncomingRequests, setTableIncomingRequests] = useState([
    {
      id: 1,
      requestNum: "12345",
      requestName: "اسم الطلب",
      whereSent: { sentTo: "فهد الحمادي", commisionName: "الاداره القانونيه" },
      requestType: "نوع الطلب",
      departmentName: "الاداره القانونيه",
      date: "14 Dec 2023",
      status: "تم الرفض",
    },
    {
      id: 2,
      requestNum: "12345",
      requestName: "اسم الطلب",
      whereSent: { sentTo: "فهد الحمادي", commisionName: "الاداره القانونيه" },
      requestType: "نوع الطلب",
      departmentName: "الاداره القانونيه",
      date: "14 Dec 2023",
      status: "تم الاستلام",
    },
    {
      id: 3,
      requestNum: "12345",
      requestName: "اسم الطلب",
      whereSent: { sentTo: "فهد الحمادي", commisionName: "الاداره القانونيه" },
      requestType: "نوع الطلب",
      departmentName: "الاداره القانونيه",
      date: "14 Dec 2023",
      status: "تم القبول",
    },
    {
      id: 4,
      requestNum: "12345",
      requestName: "اسم الطلب",
      whereSent: { sentTo: "فهد الحمادي", commisionName: "الاداره القانونيه" },
      requestType: "نوع الطلب",
      departmentName: "الاداره القانونيه",
      date: "14 Dec 2023",
      status: "تحت الدراسه",
    },
  ]);
  return (
    <Fragment>
      <div className="detailsCard my-5">
        <div className="card card-xl-stretch mb-xl-8">
          <div className="card-body py-3">
            <div className="mb-8 mt-3 pe-5 d-flex w-100 justify-content-between">
              <div className="d-flex">
                <button
                  className={`btn rounded-0 bg-transparent btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
                    searchParams.get("tabName") == "outgoingrequests" ||
                    location.search == ""
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    searchParams.set("tabName", "outgoingrequests");
                    setSearchParams(searchParams);
                  }}
                >
                  {" "}
                  {intl.formatMessage({ id: "OutgoingRequests" })}
                </button>
                <button
                  className={` btn rounded-0 bg-transparent btn-active-color-primary border-0 ms-6 fs-5 pe-3 fw-bolder  border border-bottom border-white border-2 border-active-primary  ${
                    searchParams.get("tabName") == "incomingrequests"
                      ? " active"
                      : ""
                  }`}
                  onClick={() => {
                    searchParams.set("tabName", "incomingrequests");
                    setSearchParams(searchParams);
                  }}
                >
                  {" "}
                  {intl.formatMessage({ id: "IncomingRequests" })}
                </button>
              </div>
            </div>

            {searchParams.get("tabName") == "outgoingrequests" ||
            location.search == "" ? (
              <div
                className={`tab-pane fade  ${
                  searchParams.get("tabName") == "outgoingrequests" ||
                  location.search == ""
                    ? "show"
                    : ""
                }`}
                id="kt_tab_project_tasks"
              >
                <div className="table-responsive mb-3">
                  <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4 text-center">
                    <thead>
                      <tr className="fw-bolder projectSecColor">
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                          {intl.formatMessage({ id: "RequestNumber" })}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                          {intl.formatMessage({ id: "RequestName" })}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                          {intl.formatMessage({ id: "WhereItSentTo" })}
                        </th>

                        <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                          {intl.formatMessage({ id: "AdminstrationName" })}{" "}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                          {intl.formatMessage({ id: "Date" })}{" "}
                        </th>

                        <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                          {intl.formatMessage({ id: "RequestStatus" })}{" "}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                          {intl.formatMessage({ id: "Procedures" })}{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableOutgingRequests?.map((item) => {
                        let {
                          id,
                          requestNum,
                          requestName,
                          whereSent: { sentTo, commisionName },
                          requestType,
                          departmentName,
                          date,
                          status,
                        } = item;
                        return (
                          <Fragment key={Math.random()}>
                            <tr className="align-middle ">
                              <td className="text-center">{requestNum}</td>
                              <td className="text-center position-relative">
                                <div
                                  className="h-50"
                                  style={{
                                    position: "absolute",
                                    top: "10px",
                                    [getCurrentSystemLanguage()=="ar"?"right":"left"]:"25px",
                                    width: "4px",
                                    backgroundColor: `${
                                      status == "تم الرفض"
                                        ? "#F14141"
                                        : status == "تم الاستلام"
                                        ? "#FFCF39"
                                        : status == "تم القبول"
                                        ? "#52CD50"
                                        : ""
                                    }`,
                                  }}
                                ></div>

                                <div
                                  style={{
                                    display: "inline-block",
                                    height: "100%",
                                    marginBottom: "20px",
                                    color: `${
                                      status == "تم الرفض"
                                        ? "#F14141"
                                        : status == "تم الاستلام"
                                        ? "#FFCF39"
                                        : status == "تم القبول"
                                        ? "#52CD50"
                                        : ""
                                    }`,
                                  }}
                                >
                                  {requestName}
                                </div>
                              </td>
                              <td className="text-center">
                                <p className="text-primary fw-bolder fs-5 cursor-pointer my-0 py-0">
                                  {sentTo}
                                </p>
                                <p className="text-muted">{commisionName}</p>
                              </td>
                              <td className="text-center">{departmentName}</td>
                              <td className="text-center">{date}</td>
                              <td className="text-center">
                                <p
                                  className={`badgex w-75 fw-bold py-1 mx-auto ${
                                    status == "تم الرفض"
                                      ? "badge-light-danger"
                                      : status == "تم الاستلام"
                                      ? "badge-light-warning"
                                      : status == "تم القبول"
                                      ? "badge-light-success"
                                      : ""
                                  }`}
                                >
                                  {status}
                                </p>
                              </td>
                              <td className="text-center ">
                                <OutgoingActions id={id} item={item} />
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
            ) : searchParams.get("tabName") == "incomingrequests" ? (
              <div
                className={`tab-pane fade  ${
                  searchParams.get("tabName") == "incomingrequests"
                    ? "show "
                    : ""
                }`}
                id="kt_tab_staff_tasks"
              >
                <div className="table-responsive mb-3">
                  <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4 text-center">
                    <thead>
                      <tr className="fw-bolder projectSecColor">
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                          {intl.formatMessage({ id: "RequestNumber" })}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                          {intl.formatMessage({ id: "RequestName" })}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-350px text-muted">
                          {intl.formatMessage({ id: "Applicant" })}
                        </th>

                        <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                          {intl.formatMessage({ id: "AdminstrationName" })}{" "}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                          {intl.formatMessage({ id: "Date" })}{" "}
                        </th>

                        <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                          {intl.formatMessage({ id: "RequestStatus" })}{" "}
                        </th>
                        <th className="px-2 pb-3 min-w-50px max-w-200px text-muted">
                          {intl.formatMessage({ id: "Procedures" })}{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableIncomingRequests?.map((item) => {
                        let {
                          id,
                          requestNum,
                          requestName,
                          whereSent: { sentTo, commisionName },
                          requestType,
                          departmentName,
                          date,
                          status,
                        } = item;
                        return (
                          <Fragment key={Math.random()}>
                            <tr className="align-middle ">
                              <td className="text-center">{requestNum}</td>
                              <td className="text-center position-relative">
                                <div
                                  className="h-50"
                                  style={{
                                    position: "absolute",
                                    top: "10px",
                                    [getCurrentSystemLanguage()=="ar"?"right":"left"]:"25px",
                                    width: "4px",
                                    backgroundColor: `${
                                      status == "تم الرفض"
                                        ? "#F14141"
                                        : status == "تم الاستلام"
                                        ? "#FFCF39"
                                        : status == "تم القبول"
                                        ? "#52CD50"
                                        : status == "تحت الدراسه"
                                        ? "gray"
                                        : ""
                                    }`,
                                  }}
                                ></div>
                                <div
                                  style={{
                                    display: "inline-block",
                                    height: "100%",
                                    marginBottom: "20px",
                                    color: `${
                                      status == "تم الرفض"
                                        ? "#F14141"
                                        : status == "تم الاستلام"
                                        ? "#FFCF39"
                                        : status == "تم القبول"
                                        ? "#52CD50"
                                        : status == "تحت الدراسه"
                                        ? "gray"
                                        : ""
                                    }`,
                                  }}
                                >
                                  {requestName}
                                </div>
                              </td>
                              <td className="text-center">
                                <p className="text-primary fw-bolder fs-5 cursor-pointer my-0 py-0">
                                  {sentTo}
                                </p>
                                <p className="text-muted">{commisionName}</p>
                              </td>
                              <td className="text-center">{departmentName}</td>
                              <td className="text-center">{date}</td>
                              <td className="text-center">
                                <p
                                  className={`badgex w-75 fw-bold py-1 mx-auto ${
                                    status == "تم الرفض"
                                      ? "badge-light-danger"
                                      : status == "تم الاستلام"
                                      ? "badge-light-warning"
                                      : status == "تم القبول"
                                      ? "badge-light-success"
                                      : status == "تحت الدراسه"
                                      ? "badge-light"
                                      : ""
                                  }`}
                                >
                                  {status}
                                </p>
                              </td>
                              <td className="text-center">
                                <IncomingActions id={id} item={item} />
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
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default RequestsTables;
