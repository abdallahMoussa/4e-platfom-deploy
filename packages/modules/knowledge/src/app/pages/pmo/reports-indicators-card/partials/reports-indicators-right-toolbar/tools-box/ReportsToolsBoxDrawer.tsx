/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { KTSVG } from "../../../../../../helpers";
import { useIntl } from "react-intl";
import { PmoReportsIndicatorsTools } from "./components/PmoReportsIndicatorsTools";

export function ReportsToolsBoxDrawer({ removeFromCardList, removeFromTableList }) {
  const intl = useIntl();

  const [getReportsIndicatorsList, setReportsIndicatorsList] = useState([
    {
      id: 1,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ScheduledReports" }),
      icon: <i className="fad fa-file-chart-pie fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "DefineWeeklyOrMonthlyReports" }),
      count: "",
      lastUpdate: "20/07/2022",
      lastLogin: "30/08/2022",
      link: "/pmo-reports-indicators/scheduled-reports",
      color: "svg-icon-info",
      background: "bg-light-info",
      isShow: true,
      isChecked:true,
      transition: 'text-hover-info',

    },
    {
      id: 2,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ChallengesBoard" }),
      icon: <i className="fad fa-exclamation-triangle fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "DetailsOfProblemsAndChallenges" }),
      count: "",
      lastUpdate: "23/07/2022",
      lastLogin: "20/04/2022",
      link: "/pmo-problems-challenges",
      color: "svg-icon-warning",
      background: "bg-light-warning",
      isShow: true,
      isChecked:true,
      transition: 'text-hover-warning',
    },
    {
      id: 3,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ProjectsStatus" }),
      icon: <i className="fad fa-repeat fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ReportsAboutProjectsStatus" }),
      count: "",
      lastUpdate: "15/04/2022",
      lastLogin: "29/04/2022",
      link: "/pmo-reports-indicators/projects-status",
      color: "svg-icon-gblue",
      background: "bg-light-gblue",
      isShow: true,
      isChecked:true,
      transition: 'text-hover-gblue',

    },

    {
      id: 4,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ItemsStatus" }),
      icon: <i className="bi bi-layout-text-window fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({
        id: "ItemsStatusReport",
      }),
      count: "",
      lastUpdate: "02/12/2022",
      lastLogin: "30/12/2022",
      link: "/pmo-reports-indicators/items-status",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
      isChecked:true,
      transition: 'text-hover-success'
    },
    {
      id: 5,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "PerformanceIndicators" }),
      icon: <i className="bi bi-graph-up-arrow fs-2x"></i>,
      subIcon: <i className="bi bi-tools" ></i>,
      subTitle: intl.formatMessage({
        id: "PerformanceIndicatorsGuide",
      }),
      count: "",
      lastUpdate: "02/12/2022",
      lastLogin: "30/12/2022",
      link: "/pmo-reports-indicators/performance-indicators",
      color: "svg-icon-info",
      background: "bg-light-info",
      isShow: true,
      isChecked:true,
      transition: 'text-hover-info',

    },

    {
      id: 6,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "OutputsStatus" }),
      icon: <i className="bi bi-layout-text-window fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({
        id: "OutputsStatusReport",
      }),
      count: "",
      lastUpdate: "02/12/2022",
      lastLogin: "30/12/2022",
      link: "/pmo-reports-indicators/outputs-status",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
      isChecked:true,
      transition: 'text-hover-success',

    },
    {
      id: 7,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "FinancialReport" }),
      icon: <i className="fad fa-file-chart-pie fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({
        id: "ReportsAndIndicatorsOfFollowUpReports",
      }),
      count: "",
      lastUpdate: "20/07/2022",
      lastLogin: "30/08/2022",
      link: "/pmo-reports-indicators/finanacial-reports",
      color: "svg-icon-info",
      background: "bg-light-info",
      isShow: true,
      isChecked:true,
      transition: 'text-hover-info',

    },
    {
      id: 8,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "Risks" }),
      icon: <i className="fad fa-radiation fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "RisksSchedule" }),
      count: "",
      lastUpdate: "15/06/2022",
      lastLogin: "20/06/2022",
      link: "/pmo-risks",
      color: "svg-icon-danger",
      background: "bg-light-danger",
      isShow: true,
      isChecked:true,
      transition: 'text-hover-danger',

    },
  ]);

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      event.target.name === "mygetReportsIndicatorsList" &&
      window.location.pathname === "/pmo-reports-indicators"
    ) {
      const index = getReportsIndicatorsList.findIndex(
        (item) => item.id === +event.target.id
      );
      const newReportsIndicatorsList = [...getReportsIndicatorsList];
      newReportsIndicatorsList[index].isChecked = event.target.checked;
      setReportsIndicatorsList(newReportsIndicatorsList);
      removeFromCardList(event.target.value, event.target.checked);
      removeFromTableList(event.target.value, event.target.checked);
    }
  };
  return (
    <>
      {/* begin::Tool Box drawer */}
      <div
        id="kt_engage_demos2"
        className="bg-body"
        data-kt-drawer="true"
        data-kt-drawer-name="explore"
        data-kt-drawer-activate="true"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
        data-kt-drawer-direction="end"
        data-kt-drawer-toggle="#reports_indicators_id"
        data-kt-drawer-close="#kt_engage_demos_close"
      >
        <div className="card shadow-none w-100">
          <div className="card-header" id="kt_explore_header">
            <h5 className="card-title fw-bold text-gray-600">
              {intl.formatMessage({ id: "ProjectManagementOffice" })}
            </h5>

            <div className="card-toolbar">
              <button
                type="button"
                className="btn btn-sm btn-icon explore-btn-dismiss me-n5"
                id="kt_engage_demos_close"
              >
                <KTSVG
                  path="/media/icons/duotune/arrows/arr061.svg"
                  className="svg-icon-2"
                />
              </button>
            </div>
          </div>

          <div className="card-body px-0" id="Workspace_List_body">
            <ul className="nav nav-line-tabs side-menu-tab nav-line-tabs-2x nav-stretch fw-bold px-9">
              <li className="nav-item">
                <a
                  className="nav-link text-dark opacity-75 opacity-state-100 pb-4 active"
                  data-bs-toggle="tab"
                  href="#MyToolsTab"
                >
                  {" "}
                  {intl.formatMessage({ id: "ReportsAndIndicators" })}
                </a>
              </li>
            </ul>
            <div className="tab-content rounded h-100 bg-light p-10">
              <div className="tab-pane fade active show" id="MyToolsTab">
                <div
                  id="Workspace_List_scroll"
                  className="hover-scroll-overlay-y"
                  data-kt-scroll="true"
                  data-kt-scroll-height="auto"
                  data-kt-scroll-wrappers="#Workspace_List_body"
                  data-kt-scroll-dependencies="#Workspace_List_header"
                  data-kt-scroll-offset="5px"
                >
                  <div className="rounded border border-dashed border-gray-300 p-0 mb-7">
                    <div className="fs-5 fw-bold mb-0">
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="position-relative w-md-400px ms-md-0">
                          <span className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                            <KTSVG path="/media/icons/duotune/general/gen065.svg" />
                          </span>
                          <input
                            type="text"
                            className="form-control form-control-solid ps-10"
                            name="search"
                            value=""
                            placeholder={intl.formatMessage({
                              id: "TypeYourSearchHere",
                            })}
                          />
                        </div>
                        <div className="d-flex align-items-center">
                          <button type="submit" className="btn btn-primary">
                            {intl.formatMessage({ id: "Search" })}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-body">
                    {getReportsIndicatorsList.map((mytoolscard) => (
                      <>
                        <div className="d-flex align-items-center mb-7">
                          <div className="d-flex flex-stack flex-grow-1 me-5 ms-lg-6">
                            <PmoReportsIndicatorsTools
                              id={mytoolscard.id}
                              title={mytoolscard.title}
                              icon={mytoolscard.icon as any}
                              link={mytoolscard.link}
                              color={mytoolscard.color}
                              transition={mytoolscard.transition}
                            />

                            <div className="form-check form-check-success form-check-sm form-check-custom form-check-solid form-check-lg">
                              <input
                                id={`${mytoolscard.id}`}
                                className="form-check-input widget-9-check xCheckBg"
                                type="checkbox"
                                value={mytoolscard.title}
                                name="mygetReportsIndicatorsList"
                                checked={mytoolscard.isChecked}
                                onChange={(event) => {
                                  handleChangeCheckBox(event);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
