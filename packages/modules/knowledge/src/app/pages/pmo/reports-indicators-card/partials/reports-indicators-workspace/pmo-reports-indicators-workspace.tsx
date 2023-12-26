import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { FaChartLine, FaTools, FaTable } from "react-icons/fa";
import { ReportsIndicatorsCard } from "./components/ReportsIndicatorsCard";
import { ReportsIndicatorsTable } from "./components/ReportsIndicatorsTable";
import { KTSVG, toAbsoluteUrl } from "../../../../../helpers";
import { ReportsIndicatorsRightToolbar } from "../reports-indicators-right-toolbar/ReportsIndicatorsRightToolbar";
import { IconType } from "react-icons/lib";

const PmoReportsIndicatorsWorkSpace: FC = () => {
  const intl = useIntl();
  const [getCardsList, setCardsList] = useState([
    {
      id: 1,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ScheduledReports" }),
      icon: <i className="fad fa-file-chart-pie fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "DefineWeeklyOrMonthlyReports" }),
      count: "",
      lastUpdate: "20/07/2022",
      lastLogin: "30/08/2022",
      link: "/pmo-reports-indicators/scheduled-reports",
      color: "svg-icon-info",
      background: "bg-light-info",
      isShow: true,
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ChallengesBoard" }),
      icon: <i className="fad fa-exclamation-triangle fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "DetailsOfProblemsAndChallenges" }),
      count: "",
      lastUpdate: "23/07/2022",
      lastLogin: "20/04/2022",
      link: "/pmo-problems-challenges",
      color: "svg-icon-warning",
      background: "bg-light-warning",
      isShow: true,
    },
    {
      id: 3,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ProjectsStatus" }),
      icon: <i className="fad fa-repeat fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ReportsAboutProjectsStatus" }),
      count: "",
      lastUpdate: "15/04/2022",
      lastLogin: "29/04/2022",
      link: "/pmo-reports-indicators/projects-status",
      color: "svg-icon-gblue",
      background: "bg-light-gblue",
      isShow: true,
    },

    {
      id: 4,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ItemsStatus" }),
      icon: <i className="bi bi-layout-text-window fs-3x"></i>,
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
    },
    {
      id: 5,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "PerformanceIndicators" }),
      icon: <i className="bi bi-graph-up-arrow " style={{fontSize:"40px"}}></i>,
      subIcon: <i className="bi bi-tools"></i>,
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
    },

    {
      id: 6,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "OutputsStatus" }),
      icon: <i className="bi bi-layout-text-window fs-3x"></i>,
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
    },
    {
      id: 7,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "FinancialReport" }),
      icon: <i className="fad fa-file-chart-pie fs-3x"></i>,
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
    },
    {
      id: 8,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "Risks" }),
      icon: <i className="fad fa-radiation fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "RisksSchedule" }),
      count: "",
      lastUpdate: "15/06/2022",
      lastLogin: "20/06/2022",
      link: "/pmo-risks",
      color: "svg-icon-danger",
      background: "bg-light-danger",
      isShow: true,
    },
  ]);

  const removeFromCardList = (title, isShow) => {
    const index = getCardsList.findIndex((item) => item.title === title);
    const newCardList = [...getCardsList];
    newCardList[index].isShow = isShow;
    setCardsList(newCardList);
  };

  const [getTableList, setTableList] = useState([
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
    },
    {
      id: 5,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "PerformanceIndicators" }),
      icon: <i className="bi bi-graph-up-arrow " style={{fontSize:"30px"}}></i>,
      subIcon: <i className="bi bi-tools"></i>,
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
    },
    {
      id: 8,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "Risks" }),
      icon: <i className="fad fa-radiation fs-2x text-danger" ></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "RisksSchedule" }),
      count: "",
      lastUpdate: "15/06/2022",
      lastLogin: "20/06/2022",
      link: "/pmo-risks",
      color: "svg-icon-danger",
      background: "bg-light-danger",
      isShow: true,
    },
  ]);

  const removeFromTableList = (title, isShow) => {
    const index = getTableList.findIndex((item) => item.title === title);
    const newTableList = [...getCardsList];
    newTableList[index].isShow = isShow;
    setTableList(newTableList);
  };

  return (
    <>
      
      <div
        className="flex-lg-row-fluid"
        data-select2-id="select2-data-129-tmo1"
      >
        <div className="tab-content">
         
          <div id="kt_project_users_table_pane" className="tab-pane fade active show">
            <div className="card card-flush">
              <div className="card-body pt-0">
                <div className="table-responsive">
                  <table
                    id="kt_project_users_table"
                    className="table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder"
                  >
                    <thead className="fs-7 text-gray-400 text-uppercase">
                      <tr>
                        <th className="min-w-250px">
                          {intl.formatMessage({ id: "Servicename" })}
                        </th>
                        <th className="min-w-90px">
                          {intl.formatMessage({ id: "Management" })}
                        </th>
                        {/* <th className="min-w-90px">
                          {intl.formatMessage({ id: "Number" })}
                        </th> */}
                        <th className="min-w-90px">
                          {intl.formatMessage({ id: "LastUpdate" })}
                        </th>
                        <th className="min-w-90px">
                          {intl.formatMessage({ id: "LastLogin" })}
                        </th>
                        {/* <th className="min-w-50px text-end">
                          {intl.formatMessage({ id: "Details" })}
                        </th> */}
                      </tr>
                    </thead>
                    <tbody className="fs-6">
                      {getTableList.map((table) => (
                        <ReportsIndicatorsTable
                          name={table.name}
                          dept={table.dept}
                          title={table.title}
                          icon={table.icon as any}
                          // count={table.count}
                          lastUpdate={table.lastUpdate}
                          lastLogin={table.lastLogin}
                          link={table.link}
                          color={table.color}
                          background={table.background}
                          isShow={table.isShow}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReportsIndicatorsRightToolbar
        removeFromCardList={removeFromCardList}
        removeFromTableList={removeFromTableList}
      /> 
    </>
  );
};

export { PmoReportsIndicatorsWorkSpace };
