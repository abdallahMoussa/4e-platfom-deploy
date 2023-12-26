import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { WorkspaceTable } from "./components/WorkspaceTable";
import { WorkSpaceToolbar1 } from "./toolbar/WorkSpaceToolbar1";
import { WorkSpaceToolbar2 } from "./toolbar/WorkSpaceToolbar2";
import { RightToolbar } from "../partials/RightToolbar";
import { KTSVG } from "../../../helpers";
import { WorkspaceCard } from "./components/WorkspaceCard";

const TechnicalSupportWorkSpace: FC = () => {
  const intl = useIntl();
  const [getCardsList, setCardsList] = useState([
    //Technical Support - My Tools
    {
      id: 1,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "TechnicalSupportFeedbacks" }),
      icon: <i className="fad fa-scroll fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ViewAndAddReports" }),
      count: "",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "/technical-support-feedbacks-manager",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "AdministrationManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "TechnicalSupportFeedbacks" }),
      icon: <i className="fad fa-scroll fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ViewAndAddReports" }),
      count: "",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "/technical-support-feedbacks-adminstration-manager",
      color: "svg-icon-warning",
      background: "bg-light-warning",
      isShow: true,
    },
    {
      id: 3,
      name: intl.formatMessage({ id: "TechnicalSupportEmployee" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "TechnicalSupportFeedbacks" }),
      icon: <i className="fad fa-scroll fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ViewAndAddReports" }),
      count: "",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "/technical-support-feedbacks-employee",
      color: "svg-icon-primary",
      background: "bg-light-primary",
      isShow: true,
    },

    {
      id: 4,
      name: intl.formatMessage({ id: "AdministrationEmployee" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "TechnicalSupportFeedbacks" }),
      icon: <i className="fad fa-scroll fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ViewAndAddReports" }),
      count: "",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "/technical-support-feedbacks-administration-employee",
      color: "svg-icon-danger",
      background: "bg-light-danger",
      isShow: true,
    },
    {
      id: 5,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "CreateNewService" }),
      icon: <i className="fad fa-file-plus fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "CreateServicesRelatedToAdmin" }),
      count: "",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/create-new-service",
      color: "svg-icon-info",
      background: "bg-light-info",
      isShow: true,
    },
    {
      id: 6,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "ServiceLevelAgreement" }),
      icon: <i className="fad fa-handshake fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ShowAndCreateSLA" }),
      count: "",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/technical-support-service-level-agreement-details",
      color: "svg-icon-primary",
      background: "bg-light-primary",
      isShow: true,
    },
    {
      id: 7,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "TechnicalSupportReports" }),
      icon: <i className="fas fa-signal fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ViewTechnicalSupportReports" }),
      count: "",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/technical-support-reports",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
    },
    {
      id: 8,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "ReportCurrentService" }),
      icon: <i className="fad fa-file fs-3x "></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "IFaceAproblem" }),
      count: "",
      lastUpdate: "20/07/2022",
      lastLogin: "30/08/2022",
      link: "/current-service-report",
      color: "svg-icon-danger",
      background: "bg-light-danger",
      isShow: true,
    },
    {
      id: 9,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "TechnicalSupportReportsSolutions" }),
      icon: <i className="fad fa-file-check fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({
        id: "ViewTechnicalSupportReportsSolutions",
      }),
      count: "",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/technical-reports-solutions",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
    },
    {
      id: 10,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "RequestNewService" }),
      icon: <i className="fad fa-layer-plus fs-3x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "INeedSomeThingNew" }),
      count: "",
      lastUpdate: "20/04/2022",
      lastLogin: "20/04/2022",
      link: "/new-service-request",
      color: "svg-icon-warning",
      background: "bg-light-warning",
      isShow: true,
    },
    {
      id: 11,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
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
      id: 12,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
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
      id: 13,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
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

    //Important Note :Technical Support- Shared Services Tools

    //System Tools

  ]);

  const removeFromCardList = (title, isShow) => {
    const index = getCardsList.findIndex((item) => item.title === title);
    const newCardList = [...getCardsList];
    newCardList[index].isShow = isShow;
    setCardsList(newCardList);
  };

  const [getTableList, setTableList] = useState([
    //Technical Support - My Tools
    {
      id: 1,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "TechnicalSupportFeedbacks" }),
      icon: <i className="fad fa-scroll fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ViewAndAddReports" }),
      count: "",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "/technical-support-feedbacks-manager",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
    },

    {
      id: 2,
      name: intl.formatMessage({ id: "AdministrationManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "TechnicalSupportFeedbacks" }),
      icon: <i className="fad fa-scroll fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ViewAndAddReports" }),
      count: "",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "/technical-support-feedbacks-adminstration-manager",
      color: "svg-icon-warning",
      background: "bg-light-warning",
      isShow: true,
    },
    {
      id: 3,
      name: intl.formatMessage({ id: "TechnicalSupportEmployee" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "TechnicalSupportFeedbacks" }),
      icon: <i className="fad fa-scroll fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ViewAndAddReports" }),
      count: "",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "/technical-support-feedbacks-employee",
      color: "svg-icon-primary",
      background: "bg-light-primary",
      isShow: true,
    },
    {
      id: 4,
      name: intl.formatMessage({ id: "AdministrationEmployee" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "TechnicalSupportFeedbacks" }),
      icon: <i className="fad fa-scroll fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ViewAndAddReports" }),
      count: "",
      lastUpdate: "20/04/2022",
      lastLogin: "25/03/2022",
      link: "/technical-support-feedbacks-administration-employee",
      color: "svg-icon-danger",
      background: "bg-light-danger",
      isShow: true,
    },
    {
      id: 5,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "CreateNewService" }),
      icon: <i className="fad fa-file-plus fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "CreateServicesRelatedToAdmin" }),
      count: "",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/create-new-service",
      color: "svg-icon-info",
      background: "bg-light-info",
      isShow: true,
    },
    {
      id: 6,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "ServiceLevelAgreement" }),
      icon: <i className="fad fa-handshake fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ShowAndCreateSLA" }),
      count: "",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/technical-support-service-level-agreement-details",
      color: "svg-icon-primary",
      background: "bg-light-primary",
      isShow: true,
    },
    {
      id: 7,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "TechnicalSupportReports" }),
      icon: <i className="fas fa-signal fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "ViewTechnicalSupportReports" }),
      count: "",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/technical-support-reports",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
    },
    {
      id: 8,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "ReportCurrentService" }),
      icon: <i className="fad fa-file fs-2x "></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "IFaceAproblem" }),
      count: "",
      lastUpdate: "20/07/2022",
      lastLogin: "30/08/2022",
      link: "/current-service-report",
      color: "svg-icon-danger",
      background: "bg-light-danger",
      isShow: true,
    },
    {
      id: 9,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "TechnicalSupportReportsSolutions" }),
      icon: <i className="fad fa-file-check fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({
        id: "ViewTechnicalSupportReportsSolutions",
      }),
      count: "",
      lastUpdate: "22/04/2022",
      lastLogin: "23/04/2022",
      link: "/technical-reports-solutions",
      color: "svg-icon-success",
      background: "bg-light-success",
      isShow: true,
    },
    {
      id: 10,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
      dept: intl.formatMessage({ id: "TechnicalSupportManagement" }),
      title: intl.formatMessage({ id: "RequestNewService" }),
      icon: <i className="fad fa-layer-plus fs-2x"></i>,
      subIcon: <i className="bi bi-tools"></i>,
      subTitle: intl.formatMessage({ id: "INeedSomeThingNew" }),
      count: "",
      lastUpdate: "20/04/2022",
      lastLogin: "20/04/2022",
      link: "/new-service-request",
      color: "svg-icon-warning",
      background: "bg-light-warning",
      isShow: true,
    },
    {
      id: 11,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
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
      id: 12,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
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
      id: 13,
      name: intl.formatMessage({ id: "TechnicalSupportManager" }),
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

    //Technical Support System Tools
 
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
            className="tab-pane fade active show "
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

export { TechnicalSupportWorkSpace };
