import React, { Fragment, useState } from "react";
import { Table } from "react-bootstrap";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { SystemPagination } from "../../../partials/SystemPagination";
import ProjectsStatusFilterPopup from "../popup/ProjectsStatusFilterPopup";
import CreateReportPopup from "../popup/CreateReportPopup";
import { ExportDropDown } from "../../../partials/ExportDropDown";
import ProjectsStatusBarChart from "./ProjectsStatusBarChart";
import ProjectsStatusDonutChart from "./ProjectsStatusDonutChart";

function PmoReportsIndicatorsProjectsStatus() {
  let [tableData, setTableData] = useState<any>([
    {
      projectName: "مبادره مركز التحكيم للعقار",
      mangerName: "عبد الله محمد",
      status: "مكتمل",
      endDate: "25June 2022",
      endBaseDate: "25June 2022",
      done: "100%",
      performing: "-",
      planned: "100%",
      calender: "-",
    },
    {
      projectName: "مكتب خبراء النزاعات العقاريه",
      mangerName: "عبد الله محمد",
      status: "مكتمل",
      endDate: "25June 2022",
      endBaseDate: "25June 2022",
      done: "100%",
      performing: "-",
      planned: "100%",
      calender: "-",
    },
    {
      projectName: "مبادره مركز التحكيم للعقار",
      mangerName: "فواز عوف",
      status: "مكتمل",
      endDate: "25June 2022",
      endBaseDate: "25June 2022",
      done: "100%",
      performing: "-",
      planned: "100%",
      calender: "-",
    },
    {
      projectName:
        "استراتيجيه القطاع العقاري -المرحله الاولي دراسه الوضع الحالي ",
      mangerName: "عبد الله محمد",
      status: "مكتمل",
      endDate: "25June 2022",
      endBaseDate: "25June 2022",
      done: "100%",
      performing: "-",
      planned: "100%",
      calender: "-",
    },
  ]);
  let intl = useIntl();
  return (
    <Fragment>
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start  mt-4"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="row g-5 g-xl-8 mb-3">
            <div className="col-xl-12">
              <div className="card card-xl-stretch mb-xl-8 card-body  ">
                <div className="card-header border-0 pt-3 pb-1  flex-wrap">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-4">
                      {intl.formatMessage({ id: "StatusOfProjectsBySector" })}
                    </span>
                  </h3>
                </div>
                <div className="d-flex flex-wrap p-4 pt-1 mb-3">
                  <div className="min-w-100px ms-4">
                    <span className="text-primary  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "Completed" })}
                    </span>
                  </div>
                  <div className="min-w-80px ms-4">
                    <span className="text-success  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "UnderPlanning" })}
                    </span>
                  </div>
                  <div className="min-w-80px ms-4">
                    <span className="text-danger  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "NotFound" })}
                    </span>
                  </div>
                  <div className="min-w-80px ms-4">
                    <span className="text-warning   ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "Underway" })}
                    </span>
                  </div>
                  <div className="min-w-80px ms-4">
                    <span className="text-muted  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "Pending" })}
                    </span>
                  </div>
                </div>
                {/* <img
                  src="/media/reports-indicators/chart1.PNG"
                  alt=""
                  className="d-block w-100 h-350px"
                /> */}
                <ProjectsStatusBarChart />
              </div>
            </div>
          </div>
          <div className="row g-5 g-xl-8 mb-3">
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div className="card card-xl-stretch mb-xl-8 card-body shadow ">
                <div className="card-header border-0 pt-1 pb-1 mb-1">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-4 mb-1 ">
                      {intl.formatMessage({
                        id: "TheNumberOfProjectsAccordingToTheirStatus",
                      })}
                    </span>
                  </h3>
                </div>
                <div className="d-flex  justify-content-between p-4 pt-1 mb-3">
                  {/* <img
                    src="/media/reports-indicators/chart6.PNG"
                    alt=""
                    className="w-50 d-inline-block"
                  /> */}

                  <ProjectsStatusDonutChart />
                  <div className="w-50">
                    <div className="mb-4 mt-5 d-flex justify-content-between w-100">
                      <div className="w-75 me-3">
                        <span className="text-primary  ms-3 fw-bolder">-</span>
                        <span className="text-muted fw-bolder">
                          {intl.formatMessage({ id: "Completed" })}
                        </span>
                      </div>
                      <span className="fw-bolder">70</span>
                    </div>
                    <div className="mb-4 mt-6 d-flex justify-content-between w-100">
                      <div className="w-75 me-3">
                        <span className="text-success  me-3 fw-bolder">-</span>
                        <span className="text-muted fw-bolder">
                          {intl.formatMessage({ id: "UnderPlanning" })}
                        </span>
                      </div>
                      <span className="fw-bolder">13</span>
                    </div>
                    <div className="mb-4 mt-6 d-flex justify-content-between w-100">
                      <div className="w-75 me-3">
                        <span className="text-danger  me-3 fw-bolder">-</span>
                        <span className="text-muted fw-bolder">
                          {intl.formatMessage({ id: "Canceled" })}
                        </span>
                      </div>
                      <span className="fw-bolder">10</span>
                    </div>
                    <div className="mb-4 mt-6 d-flex justify-content-between w-100">
                      <div className="w-75 me-3">
                        <span className="text-warning   me-3 fw-bolder">-</span>
                        <span className="text-muted fw-bolder">
                          {intl.formatMessage({ id: "Underway" })}{" "}
                        </span>
                      </div>
                      <span className="fw-bolder">5</span>
                    </div>
                    <div className="mb-4 mt-6 d-flex justify-content-between w-100">
                      <div className="w-75 me-3">
                        <span className="text-muted  me-3 fw-bolder">-</span>
                        <span className="text-muted fw-bolder">
                          {intl.formatMessage({ id: "Pending" })}
                        </span>
                      </div>
                      <span className="fw-bolder">1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div className="row h-100 my-md-0 my-3">
                <div className="col-12 h-50">
                  <div className="card card-xl-stretch card-body h-md-75 shadow">
                    <div className="card-header border-0 mb-1">
                      <h3 className="card-title align-items-start flex-column">
                        <span className="card-label fw-bolder fs-4 ">
                          {intl.formatMessage({ id: "PlannedCompletionRate" })}{" "}
                        </span>
                      </h3>
                    </div>
                    <div className="px-5">
                      <div className="progress mx-2 w-100 h-10px bg-secondary">
                        <div
                          className="progress-bar bg-success h-10px "
                          style={{ width: "92%" }}
                          role="progressbar"
                        >
                          92%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 h-50 mb-md-0 mb-4">
                  <div className="card card-xl-stretch card-body h-md-75 shadow">
                    <div className="card-header border-0 mb-1">
                      <h3 className="card-title align-items-start flex-column">
                        <span className="card-label fw-bolder fs-4 ">
                          {intl.formatMessage({ id: "ActualCompletionRate" })}{" "}
                        </span>
                      </h3>
                    </div>
                    <div className="px-5">
                      <div className="progress mx-2 w-100 h-10px bg-secondary">
                        <div
                          className="progress-bar bg-success h-10px "
                          style={{ width: "92%" }}
                          role="progressbar"
                        >
                          92%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5 g-xl-8">
            <div className="col-xl-12 col-md-12 col-sm-12">
              <div className="card card-xl-stretch mb-xl-8">
                <div className="card-header border-0 pt-3 pb-2  d-flex flex-stack justify-content-between">
                  <h3 className="card-title align-items-start flex-column w-40">
                    <span className="card-label fw-bolder fs-4 mb-1 ">
                      {intl.formatMessage({ id: "OutputFinancialStatements" })}{" "}
                    </span>
                  </h3>
                  <div className="card-toolbar card-diff-toolbar w-50 d-flex align-items-center justify-content-end">
                    <div>
                      <ExportDropDown />
                    </div>
                    <div className="btn btn-primary mx-1 text-center w-fit mt-sm-0 mt-4">
                      <i className="bi bi-printer ms-3 fs-3 "></i>
                      {intl.formatMessage({ id: "Print" })}{" "}
                    </div>
                  </div>
                </div>
                <hr />
                <br />

                <div className="card-body py-3">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="REGA_table_widget_5_tab_1"
                    >
                      <div className="table-responsive">
                        <Table className="table table-row-dashed text-center table-row-gray-200 align-middle gs-0 gy-4">
                          <thead>
                            <tr style={{ verticalAlign: "middle" }}>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "ProjectName" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Manager" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Status" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "ActualEndDate" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "BaselineEnd" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Actual" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Achievement" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Planned" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Calender" })}{" "}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {tableData?.map((item) => {
                              let {
                                projectName,
                                mangerName,
                                status,
                                endDate,
                                endBaseDate,
                                done,
                                performing,
                                planned,
                                calender,
                              } = item;
                              return (
                                <Fragment key={Math.random()}>
                                  <tr style={{ verticalAlign: "middle" }}>
                                    <td
                                      style={{ verticalAlign: "middle" }}
                                      className="w-150px"
                                    >
                                      <Link to="#">
                                        <label
                                          role="button"
                                          className="text-center"
                                        >
                                          {projectName}
                                        </label>
                                      </Link>
                                    </td>
                                    <td>{mangerName}</td>

                                    <td className="">
                                      <span className="d-inline py-2 px-3 fw-bolder fs-6 badgex badge-light-success ">
                                        {status}
                                      </span>
                                    </td>
                                    <td>{endDate}</td>
                                    <td>{endBaseDate}</td>
                                    <td>
                                      <span className="d-inline py-2 px-3 fw-bolder fs-6 text-success ">
                                        {done}
                                      </span>
                                    </td>
                                    <td>{performing}</td>
                                    <td className="">
                                      <span className="d-inline py-2 px-3 fw-bolder fs-6 text-success ">
                                        {planned}
                                      </span>
                                    </td>

                                    <td className="text-muted fw-bold">
                                      {calender}
                                    </td>
                                  </tr>
                                </Fragment>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                  <SystemPagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ProjectsStatusFilterPopup show={modalFShow} handleClose={() => setModalFShow(false)}/>
      <CreateReportPopup /> */}
    </Fragment>
  );
}

export default PmoReportsIndicatorsProjectsStatus;
