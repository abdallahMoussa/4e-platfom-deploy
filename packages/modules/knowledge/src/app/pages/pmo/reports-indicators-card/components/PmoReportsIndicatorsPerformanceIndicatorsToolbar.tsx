import React, { Fragment, useState } from "react";
import { Table } from "react-bootstrap";
import { useIntl } from "react-intl";
import { SystemPagination } from "../../../partials/SystemPagination";
import { Link } from "react-router-dom";
import PerformanceFilterPopup from "../popup/PerformanceFilterPopup";
import PerformanceIndicatorsProgressBarComponent from "./PerformanceIndicatorsProgressBarComponent";
import PerformanceIndicatorsBarChart from "./PerformanceIndicatorsBarChart";

function PmoReportsIndicatorsPerformanceIndicators() {
  const [modalFShow, setModalFShow] = useState<boolean>(false);

  let intl = useIntl();
  let [tableData, setTableData] = useState<any>([
    {
      projectName: "تطوير الهيئه العامه للمشاريع الجديده ",
      mangerName: "عبد الله محمد",
      adminstraion: "اسم القطاع",
      status: "مكتمل",
      startBaseDate: "25June 2022",
      endDate: "25June 2022",
      done: "25June 2022",
      planned: "المخطط",
      performing: "الانجاز",
      calender: "جدول",
      risks: "مخاطر",
      problems: "مشاكل",
      indicator: "المؤشر",
    },
    {
      projectName: "تطوير الهيئه العامه للمشاريع الجديده ",
      mangerName: "عبد الله محمد",
      adminstraion: "اسم القطاع",
      status: "مكتمل",
      startBaseDate: "25June 2022",
      endDate: "25June 2022",
      done: "25June 2022",
      planned: "المخطط",
      performing: "الانجاز",
      calender: "جدول",
      risks: "مخاطر",
      problems: "مشاكل",
      indicator: "المؤشر",
    },
    {
      projectName: "تطوير الهيئه العامه للمشاريع الجديده ",
      mangerName: "عبد الله محمد",
      adminstraion: "اسم القطاع",
      status: "مكتمل",
      startBaseDate: "25June 2022",
      endDate: "25June 2022",
      done: "25June 2022",
      planned: "المخطط",
      performing: "الانجاز",
      calender: "جدول",
      risks: "مخاطر",
      problems: "مشاكل",
      indicator: "المؤشر",
    },
    {
      projectName: "تطوير الهيئه العامه للمشاريع الجديده ",
      mangerName: "عبد الله محمد",
      adminstraion: "اسم القطاع",
      status: "مكتمل",
      startBaseDate: "25June 2022",
      endDate: "25June 2022",
      done: "25June 2022",
      planned: "المخطط",
      performing: "الانجاز",
      calender: "جدول",
      risks: "مخاطر",
      problems: "مشاكل",
      indicator: "المؤشر",
    },
    {
      projectName: "تطوير الهيئه العامه للمشاريع الجديده ",
      mangerName: "عبد الله محمد",
      adminstraion: "اسم القطاع",
      status: "مكتمل",
      startBaseDate: "25June 2022",
      endDate: "25June 2022",
      done: "25June 2022",
      planned: "المخطط",
      performing: "الانجاز",
      calender: "جدول",
      risks: "مخاطر",
      problems: "مشاكل",
      indicator: "المؤشر",
    },
    {
      projectName: "تطوير الهيئه العامه للمشاريع الجديده ",
      mangerName: "عبد الله محمد",
      adminstraion: "اسم القطاع",
      status: "مكتمل",
      startBaseDate: "25June 2022",
      endDate: "25June 2022",
      done: "25June 2022",
      planned: "المخطط",
      performing: "الانجاز",
      calender: "جدول",
      risks: "مخاطر",
      problems: "مشاكل",
      indicator: "المؤشر",
    },
  ]);
  return (
    <Fragment>
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start  mt-4"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="row g-5 g-xl-8">
            <div className="col-xl-4">
              <div className="card card-xl-stretch mb-xl-8 card-body  ">
                <div className="card-header border-0 pt-3 pb-2 mb-2 ps-3">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-4 text-dark mb-1 ">
                      {intl.formatMessage({
                        id: "PerformanceIndicatorsForProjects",
                      })}{" "}
                    </span>
                  </h3>
                </div>
                <div className="pt-1 mb-3 me-6">
                  <div className="mb-3">
                    <span className="text-primary  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "ProjectsNumber" })}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="text-success  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({
                        id: "ProjectsNumberUnderImplementation",
                      })}{" "}
                    </span>
                  </div>
                </div>
                {/* <img
                  src="/media/reports-indicators/chart7.PNG"
                  alt=""
                  className="d-block w-100 h-300px"
                /> */}
                <div className="d-flex align-items-center justify-content-center">
                  <div className="h-200px w-200px">
                    <PerformanceIndicatorsProgressBarComponent />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="card card-xl-stretch mb-xl-8 card-body  ">
                <div className="card-header border-0 pt-3 pb-2 mb-2">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-4 mb-1 ">
                      {intl.formatMessage({
                        id: "IndicatorsOfPerformanceEfficiencyAccordingToTheSituation",
                      })}{" "}
                    </span>
                  </h3>
                </div>
                <div className="d-flex flex-wrap p-4 pt-1 mb-3">
                  <div className="min-w-100px ms-4">
                    <span className="text-primary  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "InTime" })}
                    </span>
                  </div>
                  <div className="min-w-80px ms-4">
                    <span className="text-danger  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "TooLate" })}
                    </span>
                  </div>
                  <div className="min-w-80px ms-4">
                    <span className="text-primary  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "Low" })}
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-wrap p-4 pt-1 mb-3">
                  <div className="min-w-80px ms-4">
                    <span className="text-warning   ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "Late" })}
                    </span>
                  </div>
                  <div className="min-w-80px ms-4">
                    <span className="text-muted  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "NotFound" })}
                    </span>
                  </div>
                </div>
                {/* <img
                  src="/media/reports-indicators/chart8.PNG"
                  alt=""
                  className="d-block w-100 h-300px"
                /> */}
                <PerformanceIndicatorsBarChart />
              </div>
            </div>
          </div>
          <div className="row g-5 g-xl-8 mt-sm-0 mt-2">
            <div className="col-xl-12 col-md-12 col-sm-12 ">
              <div className="card card-xl-stretch mb-xl-8 pb-4 pt-4">
                <div className="card-header border-0 pt-3 pb-2 flex-wrap  d-flex flex-stack justify-content-between">
                  <h3 className="card-title align-items-start flex-column w-40">
                    <span className="card-label fw-bolder fs-3 mb-1 ">
                      {intl.formatMessage({
                        id: "AnalyzingPerformanceIndicators",
                      })}{" "}
                    </span>
                  </h3>
                  <p className="text-muted w-100 pe-3">
                    {intl.formatMessage({ id: "PerformanceIndicatorsTable" })}
                  </p>
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
                              <th className="text-muted fw-semibold fs-6 min-w-150px">
                                {intl.formatMessage({ id: "Adminstration" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Sector" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Status" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "BaselineStart" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "ActualEndDate" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6 min-w-150px">
                                {intl.formatMessage({ id: "Actual" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Planned" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Achievement" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Calender" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Risks" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Problems" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "PublicIndex" })}{" "}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {tableData?.map((item) => {
                              let {
                                projectName,
                                mangerName,
                                adminstraion,
                                status,
                                startBaseDate,
                                endDate,
                                done,
                                planned,
                                performing,
                                calender,
                                risks,
                                problems,
                                indicator,
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

                                    <td>{adminstraion}</td>
                                    <td>
                                      {" "}
                                      <span className="d-inline py-2 px-3 fw-bolder fs-6 badgex badge-light-success ">
                                        {status}
                                      </span>
                                    </td>
                                    <td>{startBaseDate}</td>
                                    <td>{endDate}</td>
                                    <td>{done}</td>
                                    <td>{planned}</td>
                                    <td>{performing}</td>
                                    <td>{calender}</td>
                                    <td>{risks}</td>
                                    <td>{problems}</td>
                                    <td>{indicator}</td>
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
      {/* <PerformanceFilterPopup
        show={modalFShow}
        handleClose={() => setModalFShow(false)}
      /> */}
    </Fragment>
  );
}

export default PmoReportsIndicatorsPerformanceIndicators;
