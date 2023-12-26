import React, { Fragment, useState } from "react";
import { Table } from "react-bootstrap";
import { useIntl } from "react-intl";
import { SystemPagination } from "../../../partials/SystemPagination";
import { Link } from "react-router-dom";
import FinancialFilterPopup from "../popup/FinancialFilterPopup";
import FinanacialReportsDonutChart from "./FinanacialReportsDonutChart";
import FinanacialReportsLineChart from "./FinanacialReportsLineChart";

function PmoReportsIndicatorReportsFinancialReports() {
  let intl = useIntl();
  let [tableData, setTableData] = useState<any>([
    {
      projectName: "مبادره مركز التحكيم للعقار ",
      mangerName: "عبد الله محمد",
      budgetline: "لا يوجد",
      status: "مكتمل",
      supplier: "",
      budget: "790,000ر.س",
      total: "0 ر.س",
      remained: "790,000ر.س",
      performing: "100%",
      outgoing: "0%",
    },
    {
      projectName: "مكتب خبراء النزاعات العقاريه",
      mangerName: "عبد الله محمد",
      budgetline: "لا يوجد",
      status: "مكتمل",
      supplier: "",
      budget: "790,000ر.س",
      total: "0 ر.س",
      remained: "790,000ر.س",
      performing: "80%",
      outgoing: "0%",
    },
    {
      projectName: "استراتيجيه القطاع العقاري - المرحله الاولي ",
      mangerName: "عبد الله محمد",
      budgetline: "لا يوجد",
      status: "مكتمل",
      supplier: "",
      budget: "790,000ر.س",
      total: "0 ر.س",
      remained: "790,000ر.س",
      performing: "50%",
      outgoing: "0%",
    },
    {
      projectName: "مبادره مركز التحكيم للعقار ",
      mangerName: "عبد الله محمد",
      budgetline: "لا يوجد",
      status: "مكتمل",
      supplier: "",
      budget: "790,000ر.س",
      total: "0 ر.س",
      remained: "790,000ر.س",
      performing: "100%",
      outgoing: "0%",
    },

    {
      projectName: "اعداد منهجيه وتشغيل مكتب اداره المشاريع ",
      mangerName: "عبد الله محمد",
      budgetline: "لا يوجد",
      status: "مكتمل",
      supplier: "",
      budget: "790,000ر.س",
      total: "0 ر.س",
      remained: "790,000ر.س",
      performing: "50%",
      outgoing: "0%",
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
            <div className="col-xl-6">
              <div className="card card-xl-stretch mb-xl-8 card-body  ">
                <div className="card-header border-0 pt-3 pb-2 mb-2 ps-3">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-4 text-dark mb-1 ">
                      {intl.formatMessage({
                        id: "FinancialInformationAccordingToTheStatusOfProjects",
                      })}
                    </span>
                  </h3>
                </div>
                <div className="pt-1 mb-3 me-6 d-flex align-items-center ">
                  <div className=" ms-4">
                    <span className="text-primary  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "Residual" })}
                    </span>
                  </div>
                  <div className=" ms-4">
                    <span className="text-success  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "TotalOutgoing" })}
                    </span>
                  </div>
                  <div className="me-2">
                    <span className="text-muted  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "BudgetValue" })}
                    </span>
                  </div>
                </div>
                {/* <img
                  src="/media/reports-indicators/chart10.PNG"
                  alt=""
                  className="d-block w-100 h-300px"
                /> */}
                <FinanacialReportsLineChart />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card card-xl-stretch mb-xl-8 card-body  ">
                <div className="card-header border-0 pt-3 pb-2 mb-2">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-4 mb-1 ">
                      {intl.formatMessage({ id: "ProjectExecutingCompanies" })}{" "}
                    </span>
                  </h3>
                </div>
                <div className="d-flex  p-4 pt-1 mb-3">
                  <div className="w-60">
                    <div className="min-w-100px ms-4 mb-3">
                      <span className="text-black  ms-2 fw-bolder ">-</span>
                      <span>مكتب عبدالعزيز القاسم محامون ومستشارون</span>
                    </div>
                    <div className="min-w-80px ms-4 mb-3">
                      <span className="text-muted  ms-2 fw-bolder">-</span>
                      <span>شركه الاتحاد الهندسي خطيب وعلمي</span>
                    </div>
                    <div className="min-w-80px ms-4 mb-3">
                      <span className="text-black  ms-2 fw-bolder">-</span>
                      <span>شركه برايس وتر هاوس للاستشارات</span>
                    </div>
                    <div className="min-w-80px ms-4 mb-3">
                      <span className="text-success  ms-2 fw-bolder">-</span>
                      <span>مركز الدراسات والبحوث</span>
                    </div>
                    <div className="min-w-80px ms-4 mb-3">
                      <span className="text-success  ms-2 fw-bolder">-</span>
                      <span>شركه دكتور احمد الصقيه محامون ومستشارون </span>
                    </div>
                    <div className="min-w-80px ms-4 mb-3">
                      <span className="text-success  ms-2 fw-bolder">-</span>
                      <span>شركه المشوره الصافيه التجاريه</span>
                    </div>
                    <div className="min-w-80px ms-4 mb-3">
                      <span className="text-success  ms-2 fw-bolder">-</span>
                      <span>STC</span>
                    </div>
                    <div className="min-w-80px ms-4 mb-3">
                      <span className="text-success  ms-2 fw-bolder">-</span>
                      <span>Smart way</span>
                    </div>
                    <div className="min-w-80px ms-4 mb-3">
                      <span className="text-success  ms-2 fw-bolder">-</span>
                      <span>Ernst ang Young</span>
                    </div>
                  </div>
                  {/* <img
                    src="/media/reports-indicators/chart11.PNG"
                    alt=""
                    className="d-block "
                    style={{ width: "40%" }}
                  /> */}
                  <div className="h-250px w-250px">
                    <FinanacialReportsDonutChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5 g-xl-8 mb-5 mt-sm-0 mt-2">
            <div className="col-xl-12 col-md-12 col-sm-12">
              <div className="card card-xl-stretch mb-xl-8 card-body shadow ">
                <div className="card-header border-0 pt-1 mb-1">
                  <h2 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-4">
                      {intl.formatMessage({
                        id: "PercentageOfDisbursementFromApprovedProjectBudgets",
                      })}{" "}
                    </span>
                  </h2>
                </div>
                <div className="w-75 px-8">
                  <div className="progress mx-2 ">
                    <div
                      className="progress-bar  h-10px "
                      style={{ width: "32%" }}
                      role="progressbar"
                    >
                      32%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5 g-xl-8 ">
            <div className="col-xl-12 col-md-12 col-sm-12 ">
              <div className="card card-xl-stretch mb-xl-8 pb-4 pt-4">
                <div className="card-header border-0 pt-3 pb-2 flex-wrap  d-flex flex-stack justify-content-between">
                  <h2 className="card-title align-items-start flex-column w-40">
                    <span className="card-label fw-bolder fs-3 mb-1 ">
                      {intl.formatMessage({ id: "OutputFinancialStatements" })}{" "}
                    </span>
                  </h2>
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
                                {intl.formatMessage({ id: "BudgetItem" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Status" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Supplier" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Budget" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "TotalOutgoing" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Residual" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "CompletionRate" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "OutgoingRatio" })}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {tableData?.map((item) => {
                              let {
                                projectName,
                                mangerName,
                                budgetline,
                                status,
                                supplier,
                                budget,
                                total,
                                remained,
                                performing,
                                outgoing,
                              } = item;
                              return (
                                <Fragment key={Math.random()}>
                                  <tr style={{ verticalAlign: "middle" }}>
                                    <td
                                      style={{ verticalAlign: "middle" }}
                                      className="w-200px"
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

                                    <td className="text-danger">
                                      {budgetline}
                                    </td>
                                    <td>
                                      {" "}
                                      <span className="d-inline py-2 px-3 fw-bolder fs-6 badgex badge-light-success ">
                                        {status}
                                      </span>
                                    </td>
                                    <td>{supplier}</td>
                                    <td>{budget}</td>
                                    <td>{total}</td>
                                    <td>{remained}</td>
                                    <td
                                      className={`${
                                        performing == "100%"
                                          ? "text-success"
                                          : performing == "80%"
                                          ? "text-warning"
                                          : "text-danger"
                                      }`}
                                    >
                                      {performing}
                                    </td>
                                    <td>{outgoing}</td>
                                  </tr>
                                </Fragment>
                              );
                            })}
                            <tr className="bg-primary">
                              <td colSpan={3}>
                                <p className="text-white pe-7 text-end fw-bolder">
                                  114.094.453 ر.س
                                </p>
                              </td>
                              <td colSpan={1}>
                                <p className="text-white fw-bolder">
                                  114.094.453 ر.س
                                </p>
                              </td>
                              <td colSpan={3}>
                                <p className="text-center pe-3 text-white fw-bolder">
                                  114.094.453 ر.س
                                </p>
                              </td>
                              <td colSpan={3}>
                                <p className=" fw-bolder ps-3 text-white d-flex align-items-center justify-content-start">
                                  {intl.formatMessage({ id: "Total" })}
                                </p>
                              </td>
                            </tr>
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
    </Fragment>
  );
}

export default PmoReportsIndicatorReportsFinancialReports;
