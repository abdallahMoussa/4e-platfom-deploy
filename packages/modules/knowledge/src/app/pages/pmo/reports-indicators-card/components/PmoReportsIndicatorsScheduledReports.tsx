import React, { Fragment } from "react";
import { useIntl } from "react-intl";
import BarChart from "./ScheduledReportsBarChart";
import LineChart from "./ScheduledReportsLineChart";
import BarChart2 from "./BarChart2";
import CircularProgressBarComponent  from "./ScheduledReportsCircularProgressBarComponent ";
import StackChart from "./StackChart";
function PmoReportsIndicatorsScheduledReports() {
  let intl = useIntl();
  return (
    <Fragment>
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start  mt-4"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="row g-5 g-xl-8">
            <div className="col-xl-12">
              <div className="card card-xl-stretch mb-xl-8 card-body  ">
                <div className="card-header border-0 pt-3 pb-2 mb-2">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-4 mb-1 ">
                      {intl.formatMessage({ id: "ProjectStatusDataSummary" })}
                    </span>
                    <span className="mt-3 fw-semibold fs-6 text-muted">
                      {intl.formatMessage({ id: "StatusOfProjectsBySector" })}
                    </span>
                  </h3>
                  <div className="card-toolbar card-diff-toolbar w-150px">
                    <div
                      className="btn btn-secondary mx-1 text-center w-100"
                      // data-bs-toggle="modal"
                      // data-bs-target="#rega_modal_filter_general_approvals"
                    >
                      {intl.formatMessage({ id: "ViewTheReport" })}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap p-4 pt-1 mb-3">
                  <div className="min-w-100px ms-4">
                    <span className="text-primary  ms-1 fw-bolder">-</span>
                    <span className="text-primary fw-bolder">
                      {intl.formatMessage({ id: "Completed" })}
                    </span>
                  </div>
                  <div className="min-w-80px ms-4">
                    <span className="text-success  ms-1 fw-bolder">-</span>
                    <span className="text-success fw-bolder">
                      {intl.formatMessage({ id: "UnderPlanning" })}
                    </span>
                  </div>
                  <div className="min-w-80px ms-4">
                    <span className="text-danger  ms-1 fw-bolder">-</span>
                    <span className="text-danger fw-bolder">
                      {intl.formatMessage({ id: "NotFound" })}
                    </span>
                  </div>
                  <div className="min-w-80px ms-4">
                    <span className="text-warning   ms-1 fw-bolder">-</span>
                    <span className="text-warning fw-bolder">
                      {intl.formatMessage({ id: "Underway" })}
                    </span>
                  </div>
                  <div className="min-w-80px ms-4">
                    <span className="text-secondary  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "Pending" })}
                    </span>
                  </div>
                </div>
                <BarChart />
              </div>
            </div>
          </div>
          <div className="row g-5 g-xl-8">
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div className="card card-xl-stretch mb-xl-8 card-body shadow ">
                <div className="card-header border-0 pt-3 pb-2 mb-2">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-4 mb-1 ">
                      {intl.formatMessage({ id: "FinancialReport" })}{" "}
                    </span>
                    <span className="mt-3 fw-semibold fs-6 text-muted">
                      {intl.formatMessage({
                        id: "FinancialInfoAccordingToTheStatusOfTheProject",
                      })}{" "}
                    </span>
                  </h3>
                  <div className="card-toolbar card-diff-toolbar w-150px">
                    <div
                      className="btn btn-secondary mx-1 text-center w-100"
                      // data-bs-toggle="modal"
                      // data-bs-target="#rega_modal_filter_general_approvals"
                    >
                      {intl.formatMessage({ id: "ViewTheReport" })}{" "}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap p-4 pt-1 mb-3">
                  <div className="min-w-30px ms-4">
                    <span className="text-primary  ms-1 fw-bolder">-</span>
                    <span className="text-primary fw-bolder">
                      {intl.formatMessage({ id: "Residual" })}
                    </span>
                  </div>
                  <div className="min-w-30px ms-4">
                    <span
                      className=" ms-1 fw-bolder"
                      style={{ color: "purple" }}
                    >
                      -
                    </span>
                    <span className=" fw-bolder" style={{ color: "purple" }}>
                      {intl.formatMessage({ id: "TotalOutgoing" })}{" "}
                    </span>
                  </div>
                  <div className="min-w-30px ms-4">
                    <span className="text-secondary  ms-1 fw-bolder">-</span>
                    <span className="text-muted  fw-bolder">
                      {intl.formatMessage({ id: "BudgetValue" })}{" "}
                    </span>
                  </div>
                </div>
                {/* <img
                  src="/media/reports-indicators/chart2.PNG"
                  alt=""
                  className="d-block w-100 h-350px"
                /> */}
                <LineChart />
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div className="card card-xl-stretch mb-xl-8 card-body shadow ">
                <div className="card-header border-0 pt-3 pb-2 mb-2">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-4 mb-1 ">
                      {intl.formatMessage({ id: "OutputDataSummary" })}{" "}
                    </span>
                    <span className="mt-3 fw-semibold fs-6 text-muted">
                      {intl.formatMessage({
                        id: "OutputsAccordingToTheirStatus",
                      })}{" "}
                    </span>
                  </h3>
                  <div className="card-toolbar card-diff-toolbar w-150px">
                    <div
                      className="btn btn-secondary mx-1 text-center w-100"
                      // data-bs-toggle="modal"
                      // data-bs-target="#rega_modal_filter_general_approvals"
                    >
                      {intl.formatMessage({ id: "ViewTheReport" })}{" "}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap  me-8 pe-2 pt-1 mb-3">
                  <div className="min-w-100px ms-2">
                    <span className="text-primary  ms-1 fw-bolder">-</span>
                    <span className="text-primary fw-bolder">
                      {intl.formatMessage({ id: "Completed" })}
                    </span>
                  </div>
                  <span className="badge bg-light-primary text-dark ms-3 w-40px d-flex align-items-center justify-content-center">
                    204
                  </span>

                  <div className="min-w-80px ms-2">
                    <span className="text-danger  ms-1 fw-bolder">-</span>
                    <span className="text-danger fw-bolder ">
                      {intl.formatMessage({ id: "Late" })}
                    </span>
                  </div>
                  <span className="badge bg-light-danger text-dark ms-3 w-40px d-flex align-items-center justify-content-center">
                    12
                  </span>

                  <div className="min-w-80px ms-2">
                    <span className="text-muted  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "Pending" })}
                    </span>
                  </div>
                  <span className="badge bg-light text-dark w-40px d-flex align-items-center justify-content-center ms-3">
                    8
                  </span>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div
                    style={{ width: "200px", height: "200px" }}
                    className="mt-3"
                  >
                    <CircularProgressBarComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5 g-xl-8">
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div className="card card-xl-stretch mb-xl-8 card-body shadow ">
                <div className="card-header border-0 pt-3 pb-2 mb-2">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-4 mb-1 ">
                      {intl.formatMessage({ id: "PerformanceEfficiencyIndex" })}{" "}
                    </span>
                    <span className="mt-3 fw-semibold fs-6 text-muted">
                      {intl.formatMessage({
                        id: "PerformanceIndicatorAccordingToItsStatus",
                      })}{" "}
                    </span>
                  </h3>
                  <div className="card-toolbar card-diff-toolbar w-150px">
                    <div
                      className="btn btn-secondary mx-1 text-center w-100"
                      // data-bs-toggle="modal"
                      // data-bs-target="#rega_modal_filter_general_approvals"
                    >
                      {intl.formatMessage({ id: "ViewTheReport" })}{" "}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap p-4 pt-1 mb-3">
                  <div className="min-w-100px ms-4">
                    <span className="text-primary  ms-1 fw-bolder">-</span>
                    <span className="text-primary fw-bolder">
                      {intl.formatMessage({ id: "InTime" })}
                    </span>
                  </div>

                  <div className="min-w-80px ms-4">
                    <span className="text-danger  ms-1 fw-bolder">-</span>
                    <span className="text-danger fw-bolder">
                      {intl.formatMessage({ id: "TooLate" })}
                    </span>
                  </div>
                  <div className="min-w-80px ms-4">
                    <span className="text-primary  ms-1 fw-bolder">-</span>
                    <span className="text-primary fw-bolder">
                      {intl.formatMessage({ id: "Low" })}
                    </span>
                  </div>
                  <div className="min-w-80px ms-4">
                    <span className="text-warning   ms-1 fw-bolder">-</span>
                    <span className="text-warning fw-bolder">
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
                  src="/media/reports-indicators/chart4.PNG"
                  alt=""
                  className="d-block w-100 h-500px"
                /> */}
                <StackChart/>
                {/* <BarChart2 /> */}
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div className="card card-xl-stretch mb-xl-8 card-body shadow ">
                <div className="card-header border-0 pt-3 pb-2 mb-2">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder fs-4 mb-1 ">
                      {intl.formatMessage({ id: "ItemStatusSummary" })}{" "}
                    </span>
                    <span className="mt-3 fw-semibold fs-6 text-muted">
                      {intl.formatMessage({
                        id: "SummaryOfItemsAccordingToTheirStatus",
                      })}{" "}
                    </span>
                  </h3>
                  <div className="card-toolbar card-diff-toolbar w-150px">
                    <div
                      className="btn btn-secondary mx-1 text-center w-100"
                      // data-bs-toggle="modal"
                      // data-bs-target="#rega_modal_filter_general_approvals"
                    >
                      {intl.formatMessage({ id: "ViewTheReport" })}{" "}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap me-6 pe-2 pt-1 mb-5">
                  <div className="min-w-100px ms-2">
                    <span className="text-primary  ms-1 fw-bolder">-</span>
                    <span className="text-primary fw-bolder">
                      {intl.formatMessage({ id: "OutgoingRatio" })}
                    </span>
                  </div>

                  <div className="min-w-100px ms-2">
                    <span className="text-muted  ms-1 fw-bolder">-</span>
                    <span className="text-muted fw-bolder">
                      {intl.formatMessage({ id: "PlannedForExchange" })}
                    </span>
                  </div>
                </div>
                <div className="d-flex mt-5 mb-7 align-items-center mx-auto justify-content-between w-75">
                  <div className="card  bg-light-danger w-50 ms-4 h-200px d-flex align-items-center justify-content-center">
                    <p className="text-black fw-bolder text-center fs-4">
                      {intl.formatMessage({ id: "Costs" })}{" "}
                    </p>
                    <p className="text-muted fw-bolder text-center">
                      ر.س691,234,654
                    </p>
                  </div>
                  <div className="card bg-light-success w-50 h-200px  d-flex align-items-center justify-content-center">
                    <p className="text-black fw-bolder text-center fs-4">
                      {intl.formatMessage({ id: "RemainingCosts" })}{" "}
                    </p>
                    <p className="text-muted fw-bolder text-center">
                      ر.س691,234,654
                    </p>
                  </div>{" "}
                </div>

                <div className="row mt-5 d-flex align-items-center justify-content-center w-100 ">
                  <div className="col-12">
                    <div className="card card-xl-stretch mb-xl-8 card-body  shadow">
                      <div className="card-header border-0 pt-1 pb-2 mb-2">
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bolder fs-4 mb-1 ">
                            {intl.formatMessage({ id: "OutgoingRatio" })}{" "}
                          </span>
                        </h3>
                      </div>
                      <div className="d-flex flex-wrap mb-3 mx-6">
                        <div className="progress mx-2 w-100 h-100 bg-secondary">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PmoReportsIndicatorsScheduledReports;
