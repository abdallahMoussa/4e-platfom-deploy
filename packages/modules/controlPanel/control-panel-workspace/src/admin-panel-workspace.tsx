import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { WorkspaceCard } from "./components/WorkspaceCard";
import { WorkspaceTable } from "./components/WorkspaceTable";
import { WorkSpaceToolbar1 } from "./toolbar/WorkSpaceToolbar1";
import { WorkSpaceToolbar2 } from "./toolbar/WorkSpaceToolbar2";
import { KTSVG, toAbsoluteUrl } from "./helpers";
import { RightToolbar } from "./partials/RightToolbar";
import ToolbarProvider from "./layout/core/ToolbarProvider";

const AdminPanelWorkSpace: FC = () => {
  const intl = useIntl();
  const [getCardsList, setCardsList] = useState([
    //Admin Panel - My Tools
    {
      id: 1,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
      dept: intl.formatMessage({ id: "ControlPanel" }),
      title: intl.formatMessage({ id: "OrganizationalChart" }),
      icon: <i className="fad fa-sitemap fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ManagementsCounts" }),
      count: ": 12",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "/admin-panel-hierararchy",
      color: "svg-icon-warning",
      background: "bg-light-warning",
      isShow: true,
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
      dept: intl.formatMessage({ id: "ControlPanel" }),
      title: intl.formatMessage({ id: "UsersManagement" }),
      icon: <i className="fad fa-users fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "UsersCounts" }),
      count: ": 20",
      lastUpdate: "20/04/2022",
      lastLogin: "20/04/2022",
      link: "/admin-panel-users-workspace",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
    },
    {
      id: 3,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
      dept: intl.formatMessage({ id: "ControlPanel" }),
      title: intl.formatMessage({ id: "ViewAllCards" }),
      icon: <i className="fad fa-window-restore fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "CardsCounts" }),
      count: ": 25",
      lastUpdate: "20/07/2022",
      lastLogin: "30/08/2022",
      link: "/systems-services-settings",
      color: "svg-icon-info",
      background: "bg-light-info",
      isShow: true,
    },
    {
      id: 4,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
      dept: intl.formatMessage({ id: "ControlPanel" }),
      title: intl.formatMessage({ id: "BasicData" }),
      icon: <i className="fad fa-database fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "DataCounts" }),
      count: ": 35",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/admin-panel-basic-data",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
    },
    {
      id: 5,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
      dept: intl.formatMessage({ id: "ControlPanel" }),
      title: intl.formatMessage({ id: "WebsiteGeneralSettings" }),
      icon: <i className="fas fa-cogs fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "OrganizationSettingsCount" }),
      count: ": 15",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/adminPanel/platform-settings",
      color: "svg-icon-danger",
      background: "bg-light-danger",
      isShow: true,
    },
    {
      id: 6,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
      dept: intl.formatMessage({ id: "ControlPanel" }),
      title: intl.formatMessage({ id: "PortalStatistics" }),
      icon: <i className="far fa-chart-bar fs-3x"></i>,
      subIcon: <i className="bi bi-window-stack"></i>,
      subTitle: intl.formatMessage({ id: "Events1Num" }),
      count: "5",
      lastUpdate: "15/04/2022",
      lastLogin: "17/05/2022",
      link: "/admin-panel-portal-statistics",
      color: "svg-icon-danger",
      background: "bg-light-danger",
      isShow: true,
    },
    {
      id: 7,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
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
      id: 8,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
      dept: intl.formatMessage({ id: "Services" }),
      title: intl.formatMessage({ id: "Alerts" }),
      icon: <KTSVG path="/media/icons/duotune/general/gen069.svg" />,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "Description" }),
      count: ": 0",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "/adminPanel/platform-settings",
      color: "svg-icon-primary",
      background: "bg-light-primary",
      isShow: true,
    },
    {
      id: 9,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
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


    //Important Note :Admin panel- Shared Services Tools
    {
      id: 60,
      name: intl.formatMessage({ id: "UserControlPanel" }),
      dept: intl.formatMessage({ id: "ControlPanel" }),
      title: intl.formatMessage({ id: "IntroducingTheAuthorityForView" }),
      icon: <i className="bi bi-megaphone fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "OrganizationSettingsCount" }),
      count: ": 15",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/admin-panel-organization-profile-view",
      color: "svg-icon-primary",
      background: "bg-light-primary",
      isShow: false,
    },

    //System Tools
  ]);

  const removeFromCardList = (title:any, isShow:any) => {
    const index = getCardsList.findIndex((item) => item.title === title);
    const newCardList = [...getCardsList];
    newCardList[index].isShow = isShow;
    setCardsList(newCardList);
  };

  const [getTableList, setTableList] = useState([
    //Admin Panel - My Tools
    {
      id: 1,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
      dept: intl.formatMessage({ id: "ControlPanel" }),
      title: intl.formatMessage({ id: "OrganizationalChart" }),
      icon: <i className="fad fa-sitemap fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ManagementsCounts" }),
      count: "12",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "/admin-panel-hierararchy",
      color: "svg-icon-warning",
      background: "bg-light-warning",
      isShow: true,
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
      dept: intl.formatMessage({ id: "ControlPanel" }),
      title: intl.formatMessage({ id: "UsersManagement" }),
      icon: <i className="fad fa-users fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "UsersCounts" }),
      count: "20",
      lastUpdate: "20/04/2022",
      lastLogin: "20/04/2022",
      link: "/admin-panel-users-workspace",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
    },
    {
      id: 3,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
      dept: intl.formatMessage({ id: "ControlPanel" }),
      title: intl.formatMessage({ id: "ViewAllCards" }),
      icon: <i className="fad fa-window-restore fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "CardsCounts" }),
      count: "25",
      lastUpdate: "20/07/2022",
      lastLogin: "30/08/2022",
      link: "/systems-services-settings",
      color: "svg-icon-info",
      background: "bg-light-info",
      isShow: true,
    },
    {
      id: 4,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
      dept: intl.formatMessage({ id: "ControlPanel" }),
      title: intl.formatMessage({ id: "BasicData" }),
      icon: <i className="fad fa-database fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "DataCounts" }),
      count: ": 35",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/admin-panel-basic-data",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
    },
    {
      id: 5,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
      dept: intl.formatMessage({ id: "ControlPanel" }),
      title: intl.formatMessage({ id: "WebsiteGeneralSettings" }),
      icon: <i className="fas fa-cogs fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "OrganizationSettingsCount" }),
      count: ": 15",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/adminPanel/platform-settings",
      color: "svg-icon-danger",
      background: "bg-light-danger",
      isShow: true,
    },
    {
      id: 6,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
      dept: intl.formatMessage({ id: "ControlPanel" }),
      title: intl.formatMessage({ id: "PortalStatistics" }),
      icon: <i className="far fa-chart-bar fs-2x"></i>,
      subIcon: <i className="bi bi-window-stack"></i>,
      subTitle: intl.formatMessage({ id: "Events1Num" }),
      count: "5",
      lastUpdate: "15/04/2022",
      lastLogin: "17/05/2022",
      link: "/admin-panel-portal-statistics",
      color: "svg-icon-danger",
      background: "bg-light-danger",
      isShow: true,
    },
    {
      id: 7,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
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
      id: 8,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
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
      id: 9,
      name: intl.formatMessage({ id: "AdminPanelDashboard" }),
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

    //Important Note :Admin panel- Shared Services Tools
    {
      id: 60,
      name: intl.formatMessage({ id: "UserControlPanel" }),
      dept: intl.formatMessage({ id: "ControlPanel" }),
      title: intl.formatMessage({ id: "IntroducingTheAuthorityForView" }),
      icon: <i className="bi bi-megaphone fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "OrganizationSettingsCount" }),
      count: ": 15",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/admin-panel-organization-profile-view",
      color: "svg-icon-primary",
      background: "bg-light-primary",
      isShow: false,
    },
    //Admin Panel System Tools
  ]);

  const removeFromTableList = (title:any, isShow:any) => {
    const index = getTableList.findIndex((item) => item.title === title);
    const newTableList = [...getCardsList];
    newTableList[index].isShow = isShow;
    setTableList(newTableList);
  };

  return (
    <>
    <ToolbarProvider>
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
    </ToolbarProvider>
     
    </>
  );
};

export { AdminPanelWorkSpace };
