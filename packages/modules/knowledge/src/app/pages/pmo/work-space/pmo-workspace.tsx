import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { FaChartLine, FaTools, FaTable } from "react-icons/fa";
import { WorkspaceCard } from "./components/WorkspaceCard";
import { WorkspaceTable } from "./components/WorkspaceTable";
import { WorkSpaceToolbar1 } from "./toolbar/WorkSpaceToolbar1";
import { WorkSpaceToolbar2 } from "./toolbar/WorkSpaceToolbar2";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { RightToolbar } from "../partials/RightToolbar";
import { IconType } from "react-icons/lib";

const PmoWorkSpace: FC = () => {
  const intl = useIntl();
  const [getCardsList, setCardsList] = useState([
    //My Tools
    {
      id: 1,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "NewFeasibilityStudy" }),
      icon: <i className="fad fa-layer-plus fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "NewProjectFeasibilityStudy" }),
      count: "",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "/pmo-new-feasibility-study",
      color: "svg-icon-warning",
      background: "bg-light-warning",
      isShow: true,
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ProjectList" }),
      icon: <KTSVG path="/media/icons/duotune/general/gen076.svg" />,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ViewAndAddProjects" }),
      count: "",
      lastUpdate: "20/04/2022",
      lastLogin: "20/04/2022",
      link: "/pmo-project-management",
      color: "svg-icon-primary",
      background: "bg-light-primary",
      isShow: true,
    },
    {
      id: 3,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ReportsAndIndicators" }),
      icon: <i className="fad fa-file-chart-pie fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({
        id: "ProjectFollowUpReportsAndIndicators",
      }),
      count: "",
      lastUpdate: "20/07/2022",
      lastLogin: "30/08/2022",
      link: "/pmo-reports-indicators",
      color: "svg-icon-info",
      background: "bg-light-info",
      isShow: true,
    },
    {
      id: 4,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "GeneralApproval" }),
      icon: <i className="fad fa-check-double fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ProjectApprovalsAndDeliverables" }),
      count: "",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/pmo-general-approval",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
    },
    {
      id: 5,
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
    {
      id: 6,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ProblemsAndChallenges" }),
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
      id: 7,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ChangeRequests" }),
      icon: <i className="fad fa-repeat fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "AllChangeRequests" }),
      count: "",
      lastUpdate: "15/04/2022",
      lastLogin: "29/04/2022",
      link: "/pmo-change-requests",
      color: "svg-icon-gblue",
      background: "bg-light-gblue",
      isShow: true,
    },
    {
      id: 8,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "FormsAndOperationsGuide" }),
      icon: <i className="bi bi-layout-text-window fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({
        id: "ReferenceGuideToRegulationsAndLaws",
      }),
      count: "",
      lastUpdate: "02/12/2022",
      lastLogin: "30/12/2022",
      link: "/pmo-forms-operations-guide",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
    },
    {
      id: 9,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "Services" }),
      title: intl.formatMessage({ id: "Reports&Indicators" }),
      icon: <i className="fad fa-file-chart-pie fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "Description" }),
      count: ": 0",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "#",
      color: "svg-icon-primary",
      background: "bg-light-primary",
      isShow: true,
    },
    {
      id: 10,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "Services" }),
      title: intl.formatMessage({ id: "Alerts" }),
      icon: <KTSVG path="/media/icons/duotune/general/gen069.svg" />,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "Description" }),
      count: ": 0",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "/notifications-details",
      color: "svg-icon-primary",
      background: "bg-light-primary",
      isShow: true,
    },
    {
      id: 11,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "Services" }),
      title: intl.formatMessage({ id: "SearchAndFiltering" }),
      icon: <i className="fal fa-filter fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "Description" }),
      count: ": 0",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "#",
      color: "svg-icon-danger",
      background: "bg-light-danger",
      isShow: true,
    },

    //Shared Services
    {
      id: 30,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "TrackRequests" }),
      icon: <i className="fad fa-sitemap fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "TrackRequests" }),
      count: "",
      lastUpdate: "11/07/2022",
      lastLogin: "22/07/2022",
      link: "/track-requests-tools",
      color: "svg-icon-info",
      background: "bg-light-info",
      isShow: true,
    },
    {
      id: 31,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "ServiceLevelAgreement" }),
      icon: <i className="fad fa-handshake fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ShowAndCreateSLA" }),
      count: "",
      lastUpdate: "11/07/2022",
      lastLogin: "22/07/2022",
      link: "/service-level-agreement-details",
      color: "svg-icon-primary",
      background: "bg-light-primary",
      isShow: false,
    },
    {
      id: 32,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "OutputReview" }),
      icon: <i className="fad fa-list fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ReviewAllOutput" }),
      count: "",
      lastUpdate: "11/07/2022",
      lastLogin: "22/07/2022",
      link: "/output-review",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: false,
    },
    {
      id: 33,
      name: intl.formatMessage({ id: "ItManagement" }),
      dept: intl.formatMessage({ id: "Services" }),
      title: intl.formatMessage({ id: "AuthorityApps" }),
      icon: <i className="bi bi-basket2-fill fs-3x"></i>,
      subIcon: <i className="bi bi-window-stack"></i>,
      subTitle: intl.formatMessage({ id: "NumberOfApps" }),
      count: "5",
      lastUpdate: "15/04/2022",
      lastLogin: "29/04/2022",
      link: "/authority-apps-details",
      color: "svg-icon-info",
      background: "bg-light-info",
      isShow: false,
    },

    //System Tools

  ]);

  const removeFromCardList = (title, isShow) => {
    const index = getCardsList.findIndex((item) => item.title === title);
    const newCardList = [...getCardsList];
    newCardList[index].isShow = isShow;
    setCardsList(newCardList);
  };

  const [getTableList, setTableList] = useState([
    //My Tools
    {
      id: 1,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "NewFeasibilityStudy" }),
      icon: <i className="fad fa-layer-plus fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      count: "",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "/pmo-new-feasibility-study",
      color: "svg-icon-warning",
      background: "bg-light-warning",
      isShow: true,
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ProjectList" }),
      icon: (
        <KTSVG
          path="/media/icons/duotune/general/gen076.svg"
          className="svg-icon-3x"
        />
      ),
      subIcon: <i className="bi bi-tools"></i>,
      count: "",
      lastUpdate: "20/04/2022",
      lastLogin: "20/04/2022",
      link: "/pmo-projects-management",
      color: "svg-icon-primary",
      background: "bg-light-primary",
      isShow: true,
    },
    {
      id: 3,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ReportsAndIndicators" }),
      icon: <i className="fad fa-file-chart-pie fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      count: "",
      lastUpdate: "20/07/2022",
      lastLogin: "30/08/2022",
      link: "/pmo-reports-indicators",
      color: "svg-icon-info",
      background: "bg-light-info",
      isShow: true,
    },
    {
      id: 4,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "GeneralApproval" }),
      icon: <i className="fad fa-check-double fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      count: "",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/pmo-general-approval",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
    },
    {
      id: 5,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "Risks" }),
      icon: <i className="fad fa-radiation fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      count: "",
      lastUpdate: "15/06/2022",
      lastLogin: "20/06/2022",
      link: "/pmo-risks",
      color: "svg-icon-danger",
      background: "bg-light-danger",
      isShow: true,
    },
    {
      id: 6,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ProblemsAndChallenges" }),
      icon: <i className="fad fa-exclamation-triangle fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      count: "",
      lastUpdate: "23/07/2022",
      lastLogin: "20/04/2022",
      link: "/pmo-problems-challenges",
      color: "svg-icon-warning",
      background: "bg-light-warning",
      isShow: true,
    },
    {
      id: 7,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "ChangeRequests" }),
      icon: <i className="fad fa-repeat fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      count: "",
      lastUpdate: "15/04/2022",
      lastLogin: "29/04/2022",
      link: "/pmo-change-requests",
      color: "svg-icon-gblue",
      background: "bg-light-gblue",
      isShow: true,
    },
    {
      id: 8,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "FormsAndOperationsGuide" }),
      icon: <i className="bi bi-layout-text-window fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      count: "",
      lastUpdate: "02/12/2022",
      lastLogin: "30/12/2022",
      link: "/pmo-forms-operations-guide",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
    },
    {
      id: 9,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "Services" }),
      title: intl.formatMessage({ id: "Reports&Indicators" }),
      icon: <i className="fad fa-file-chart-pie fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "Description" }),
      count: ": 0",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "#",
      color: "svg-icon-primary",
      background: "bg-light-primary",
      isShow: true,
    },
    {
      id: 10,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "Services" }),
      title: intl.formatMessage({ id: "Alerts" }),
      icon: <KTSVG path="/media/icons/duotune/general/gen069.svg" />,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "Description" }),
      count: ": 0",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "/notifications-details",
      color: "svg-icon-primary",
      background: "bg-light-primary",
      isShow: true,
    },
    {
      id: 11,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "Services" }),
      title: intl.formatMessage({ id: "SearchAndFiltering" }),
      icon: <i className="fal fa-filter fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "Description" }),
      count: ": 0",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "#",
      color: "svg-icon-danger",
      background: "bg-light-danger",
      isShow: true,
    },

    //Shared Services
    {
      id: 30,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "TrackRequests" }),
      icon: <i className="fad fa-sitemap fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      count: "17",
      lastUpdate: "11/07/2022",
      lastLogin: "22/07/2022",
      link: "/track-requests-tools",
      color: "svg-icon-info",
      background: "bg-light-info",
      isShow: true,
    },
    {
      id: 31,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "ServiceLevelAgreement" }),
      icon: <i className="fad fa-handshake fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      count: "5",
      lastUpdate: "11/07/2022",
      lastLogin: "22/07/2022",
      link: "/service-level-agreement-details",
      color: "svg-icon-primary",
      background: "bg-light-primary",
      isShow: false,
    },
    {
      id: 32,
      name: intl.formatMessage({ id: "PMOOffice" }),
      dept: intl.formatMessage({ id: "StrategicPlanning" }),
      title: intl.formatMessage({ id: "OutputReview" }),
      icon: <i className="fad fa-list fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      count: "10",
      lastUpdate: "11/07/2022",
      lastLogin: "22/07/2022",
      link: "/output-review",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: false,
    },
    {
      id: 33,
      name: intl.formatMessage({ id: "ItManagement" }),
      dept: intl.formatMessage({ id: "SharedServices" }),
      title: intl.formatMessage({ id: "AuthorityApps" }),
      icon: <KTSVG path="/media/icons/duotune/general/gen077.svg" />,
      subIcon: <i className="bi bi-window-stack"></i>,
      count: "5",
      lastUpdate: "15/04/2022",
      lastLogin: "29/04/2022",
      link: "/authority-apps-details",
      color: "svg-icon-info",
      background: "bg-light-info",
      isShow: false,
    },

    //System Tools
 
  ]);

  const removeFromTableList = (title, isShow) => {
    const index = getTableList.findIndex((item) => item.title === title);
    const newTableList = [...getCardsList];
    newTableList[index].isShow = isShow;
    setTableList(newTableList);
  };

  return (
    <>
      <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
        <div
          id="kt_toolbar_container"
          className="container-xxl p-0 d-flex flex-stack flex-wrap p-0"
        >
          <WorkSpaceToolbar1 />
          <WorkSpaceToolbar2
            removeFromCardList={removeFromCardList}
            removeFromTableList={removeFromTableList}
          />
        </div>
      </div>
      <div
        className="flex-lg-row-fluid"
        data-select2-id="select2-data-129-tmo1"
      >
        <div className="tab-content">
          <div
            id="kt_project_users_card_pane"
            className="tab-pane fade active show"
          >
            <div className="row g-6 g-xl-9">
              {getCardsList.map((card) => (
                <WorkspaceCard
                  id={card.id}
                  name={card.name}
                  dept={card.dept}
                  title={card.title}
                  icon={card.icon as any}
                  subIcon={card.subIcon as any}
                  subTitle={card.subTitle}
                  count={card.count}
                  lastUpdate={card.lastUpdate}
                  lastLogin={card.lastLogin}
                  link={card.link}
                  color={card.color}
                  background={card.background}
                  isShow={card.isShow}
                />
              ))}
            </div>
          </div>
          <div id="kt_project_users_table_pane" className="tab-pane fade">
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
                        <th className="min-w-90px">
                          {intl.formatMessage({ id: "LastUpdate" })}
                        </th>
                        <th className="min-w-90px">
                          {intl.formatMessage({ id: "LastLogin" })}
                        </th>
                        <th className="min-w-50px text-end">
                          {intl.formatMessage({ id: "Details" })}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="fs-6">
                      {getTableList.map((table) => (
                        <WorkspaceTable
                          name={table.name}
                          dept={table.dept}
                          title={table.title}
                          icon={table.icon as any}
                          count={table.count}
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
      <RightToolbar
        removeFromCardList={removeFromCardList}
        removeFromTableList={removeFromTableList}
      />
    </>
  );
};

export { PmoWorkSpace };
