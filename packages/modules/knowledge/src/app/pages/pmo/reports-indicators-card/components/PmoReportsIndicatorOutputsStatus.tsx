import React, { Fragment, useState } from "react";
import { Table } from "react-bootstrap";
import { useIntl } from "react-intl";
import { SystemPagination } from "../../../partials/SystemPagination";
import { Link } from "react-router-dom";
import OutputFilterPopup from "../popup/OutputFilterPopup";
import OutputsStatusProgressBarComponent from "./OutputsStatusProgressBarComponent";
import OutputsStatusBarChart from "./OutputsStatusBarChart";

function PmoReportsIndicatorsOutputsStatus() {
  let intl = useIntl();
  let [tableData, setTableData] = useState<any>([
    {
      projectName: "تطوير الهيئه العامه للمشاريع الجديده ",
      outputName: "اسم المخرج",
      adminstraion: "اسم القطاع",
      managerName: "عبدالله محمد",
      status: "مكتمل",
      endDate: "25June 2022",
      outputStatus: "تم",
    },
    {
      projectName: "تطوير الهيئه العامه للمشاريع الجديده ",
      outputName: "اسم المخرج",
      adminstraion: "اسم القطاع",
      managerName: "عبدالله محمد",
      status: "مكتمل",
      endDate: "25June 2022",
      outputStatus: "لم يتم اخراجه",
    },
    {
      projectName: "تطوير الهيئه العامه للمشاريع الجديده ",
      outputName: "اسم المخرج",
      adminstraion: "اسم القطاع",
      managerName: "عبدالله محمد",
      status: "مكتمل",
      endDate: "25June 2022",
      outputStatus: "لم يتم اخراجه",
    },
    {
      projectName: "تطوير الهيئه العامه للمشاريع الجديده ",
      outputName: "اسم المخرج",
      adminstraion: "اسم القطاع",
      managerName: "عبدالله محمد",
      status: "مكتمل",
      endDate: "25June 2022",
      outputStatus: "تم",
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
                        id: "OutputsAccordingToTheirCondition",
                      })}{" "}
                    </span>
                  </h3>
                </div>
                <div className="pt-1 mb-3 ps-3 pe-3 me-6">
                  <div className="mb-5 d-flex align-items-center justify-content-between">
                    <div>
                      <span className="text-success  ms-2 fw-bolder">-</span>
                      <span className="text-muted fw-bolder">
                        {intl.formatMessage({ id: "Completed" })}
                      </span>
                    </div>
                    <span className="bg-light-success w-40px h-40px d-flex align-items-center justify-content-center">
                      204
                    </span>
                  </div>
                  <div className="mb-5 d-flex align-items-center justify-content-between">
                    <div>
                      <span className="text-danger  ms-2 fw-bolder">-</span>
                      <span className="text-muted fw-bolder">
                        {intl.formatMessage({ id: "Late" })}
                      </span>
                    </div>
                    <span className="bg-light-danger w-40px h-40px d-flex align-items-center justify-content-center">
                      12
                    </span>
                  </div>
                  <div className="mb-5 d-flex align-items-center justify-content-between">
                    <div>
                      <span className="text-muted  ms-2 fw-bolder">-</span>
                      <span className="text-muted fw-bolder">
                        {intl.formatMessage({ id: "Pending" })}
                      </span>
                    </div>
                    <span className="bg-light-danger w-40px h-40px d-flex align-items-center justify-content-center">
                      8
                    </span>
                  </div>
                </div>
                {/* <img
                  src="/media/reports-indicators/chart7.PNG"
                  alt=""
                  className="d-block w-100 h-300px"
                /> */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="w-250px h-250px">
                    <OutputsStatusProgressBarComponent />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="card card-xl-stretch mb-xl-8 card-body  ">
                <div className="card-header border-0 pt-3 pb-2 mb-2">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-4 mb-1 ">
                      {intl.formatMessage({ id: "OutputsByCaseAndSector" })}{" "}
                    </span>
                  </h3>
                </div>
                <div className="d-flex flex-wrap p-4 pt-1 mb-4">
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
                      {intl.formatMessage({ id: "Late" })}
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
                  src="/media/reports-indicators/chart9.PNG"
                  alt=""
                  className="d-block w-100 h-400px"
                /> */}
                <OutputsStatusBarChart />
              </div>
            </div>
          </div>
          <div className="row g-5 g-xl-8 mt-sm-0 mt-2">
            <div className="col-xl-12 col-md-12 col-sm-12 ">
              <div className="card card-xl-stretch mb-xl-8 pb-4 pt-4">
                <div className="card-header border-0 pt-3 pb-2 flex-wrap  d-flex flex-stack justify-content-between">
                  <h3 className="card-title align-items-start flex-column w-40">
                    <span className="card-label fw-bolder fs-3 mb-1 ">
                      {intl.formatMessage({ id: "OutputStatusData" })}{" "}
                    </span>
                  </h3>
                  <p className="text-muted w-100 pe-3">
                    {intl.formatMessage({ id: "OutputsTable" })}
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
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "OutputName" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Sector" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Manager" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Status" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "EndDate" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "OutputStatus" })}{" "}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {tableData?.map((item) => {
                              let {
                                projectName,
                                outputName,
                                adminstraion,
                                managerName,
                                status,
                                endDate,
                                outputStatus,
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
                                    <td>{outputName}</td>

                                    <td>{adminstraion}</td>
                                    <td>{managerName}</td>
                                    <td>
                                      {" "}
                                      <span className="d-inline py-2 px-3 fw-bolder fs-6 badgex badge-light-success ">
                                        {status}
                                      </span>
                                    </td>

                                    <td>{endDate}</td>
                                    <td>{outputStatus}</td>
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
      {/* <OutputFilterPopup /> */}
    </Fragment>
  );
}

export default PmoReportsIndicatorsOutputsStatus;
