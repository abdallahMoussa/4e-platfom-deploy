import React, { Fragment, useState } from "react";
import { Table } from "react-bootstrap";
import { useIntl } from "react-intl";
import { SystemPagination } from "../../../partials/SystemPagination";
import { Link } from "react-router-dom";

function PmoReportsIndicatorsItemsStatus() {
  let intl = useIntl();
  let [tableData, setTableData] = useState<any>([
    {
      budgetItems: "انشطه ثقافيه واعلاميه الدخل",
      adminstration: "اداره التواصل ",
      costs: "0",
      reminedFromCosts: "",
      associatedWithIt: "ر.س.131,267,565 ",
      currentBudget: "ر.س.131,267,565 ",
      outgoing: "ر.س.131,267,565 ",
      planned: "ر.س.131,267,565 ",
    },
    {
      budgetItems: "اخري سلع وخدمات حاسب الي",
      adminstration: "تقنيه المعلومات",
      costs: "0",
      reminedFromCosts: "",
      associatedWithIt: "ر.س.131,267,565 ",
      currentBudget: "ر.س.131,267,565 ",
      outgoing: "ر.س.131,267,565 ",
      planned: "ر.س.131,267,565 ",
    },
    {
      budgetItems: "اتعاب المحامين والمحاسبين القانونين",
      adminstration: "القانونيه",
      costs: "0",
      reminedFromCosts: "",
      associatedWithIt: "ر.س.131,267,565 ",
      currentBudget: "ر.س.131,267,565 ",
      outgoing: "ر.س.131,267,565 ",
      planned: "ر.س.131,267,565 ",
    },
    {
      budgetItems: "اجور الاشتراك في صناديق البريد",
      adminstration: "اداره المرافق",
      costs: "0",
      reminedFromCosts: "",
      associatedWithIt: "ر.س.131,267,565 ",
      currentBudget: "ر.س.131,267,565 ",
      outgoing: "ر.س.131,267,565 ",
      planned: "ر.س.131,267,565 ",
    },
    {
      budgetItems: "اجور البريد",
      adminstration: "اداره المرافق",
      costs: "0",
      reminedFromCosts: "",
      associatedWithIt: "ر.س.131,267,565 ",
      currentBudget: "ر.س.131,267,565 ",
      outgoing: "ر.س.131,267,565 ",
      planned: "ر.س.131,267,565 ",
    },
  ]);
  return (
    <Fragment>
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start  mt-4"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="row g-5 g-xl-8 mb-5">
            <div className="col-xl-12">
              <div className="card card-xl-stretch mb-xl-8 card-body  pt-8">
                <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-md-nowrap justify-content-around mb-4">
                  <div className="card  bg-light-danger w-300px h-100px d-flex align-items-center justify-content-center">
                    <p className="text-muted text-center">
                      {" "}
                      {intl.formatMessage({ id: "Costs" })}
                    </p>
                    <p className="text-black fw-bolder text-center">
                      ر.س691,234,654
                    </p>
                  </div>
                  <div className="card bg-light-success   w-300px h-100px  d-flex align-items-center justify-content-center">
                    <p className="text-muted text-center">
                      {intl.formatMessage({ id: "RemainingCosts" })}{" "}
                    </p>
                    <p className="text-black fw-bolder text-center">
                      ر.س691,234,654
                    </p>
                  </div>{" "}
                  <div className="card  bg-light-warning w-300px h-100px d-flex align-items-center justify-content-center">
                    <p className="text-muted text-center">
                      {intl.formatMessage({ id: "AssociatedWithIt" })}
                    </p>
                    <p className="text-black fw-bolder text-center">
                      ر.س691,234,654
                    </p>
                  </div>{" "}
                  <div className="card bg-light-success  w-300px h-100px d-flex align-items-center justify-content-center">
                    <p className="text-muted text-center">
                      {intl.formatMessage({ id: "PlannedForExchange" })}
                    </p>
                    <p className="text-black fw-bolder text-center">
                      ر.س691,234,654
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-evenly mt-6 flex-wrap flex-lg-nowrap flex-md-nowrap">
                  <div className="card bg-secondary w-200px h-100px d-flex align-items-center justify-content-center">
                    <p className="text-muted text-center">
                      {intl.formatMessage({ id: "OriginalBudget" })}
                    </p>
                    <p className="text-black fw-bolder text-center">
                      ر.س691,234,654
                    </p>
                  </div>
                  <div className="card bg-secondary w-200px h-100px  d-flex align-items-center justify-content-center">
                    <p className="text-muted text-center">
                      {intl.formatMessage({ id: "CurrentBudget" })}
                    </p>
                    <p className="text-black fw-bolder text-center">
                      ر.س691,234,654
                    </p>
                  </div>{" "}
                  <div className="card bg-light-success w-200px h-100px d-flex align-items-center justify-content-center">
                    <p className="text-muted text-center">
                      {intl.formatMessage({ id: "Outgoing" })}
                    </p>
                    <p className="text-black fw-bolder text-center">
                      ر.س691,234,654
                    </p>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5 g-xl-8 mb-5">
            <div className="col-xl-12 col-md-12 col-sm-12">
              <div className="card card-xl-stretch mb-xl-8 card-body shadow ">
                <div className="card-header border-0 pt-1 ">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-4">
                      {intl.formatMessage({ id: "OutgoingRatio" })}{" "}
                    </span>
                  </h3>
                </div>
                <div className="w-75 px-8">
                  <div className="progress mx-2 w-75 ">
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
              <div className="card card-xl-stretch mb-xl-8 pb-4">
                <div className="card-header border-0 pt-3 pb-2  d-flex flex-stack justify-content-between">
                  <h3 className="card-title align-items-start flex-column w-40">
                    <span className="card-label fw-bolder fs-3 mb-1 ">
                      {intl.formatMessage({ id: "OutputFinancialStatements" })}{" "}
                    </span>
                  </h3>
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
                                {intl.formatMessage({ id: "BudgetItems" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Adminstration" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Costs" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "RemainedCosts" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "AssociatedWithIt" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "CurrentBudget" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "Outgoing" })}{" "}
                              </th>
                              <th className="text-muted fw-semibold fs-6">
                                {intl.formatMessage({ id: "PlannedForExchange" })}{" "}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {tableData?.map((item) => {
                              let {
                                budgetItems,
                                adminstration,
                                costs,
                                reminedFromCosts,
                                associatedWithIt,
                                currentBudget,
                                outgoing,
                                planned,
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
                                          {budgetItems}
                                        </label>
                                      </Link>
                                    </td>
                                    <td className="fw-bolder fs-6">
                                      {adminstration}
                                    </td>

                                    <td>{costs}</td>
                                    <td>{reminedFromCosts}</td>
                                    <td>{associatedWithIt}</td>
                                    <td>{currentBudget}</td>
                                    <td>{outgoing}</td>
                                    <td>{planned}</td>
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
    </Fragment>
  );
}

export default PmoReportsIndicatorsItemsStatus;
