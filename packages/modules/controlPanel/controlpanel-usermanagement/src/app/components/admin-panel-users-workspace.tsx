import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { AdminPanelUsersToolbar } from "../toolbars/AdminPanelUsersToolbar";
import { UserManagementTable } from "./UserManagementTable";

export const AdminPanelUsersWorkspace: FC = () => {
   const intl = useIntl();
   const [getCardsList, setCardsList] = useState([
      {
         id: 1,
         name: intl.formatMessage({ id: "PMOOffice" }),
         dept: intl.formatMessage({ id: "StrategicPlanning" }),
         title: intl.formatMessage({ id: "Users" }),
         icon: <i className="bi bi-person-fill fs-3x"></i>,
         subIcon: <i className="bi bi-tools"></i>,
         subTitle: `${intl.formatMessage({
            id: "Show",
         })} ${intl.formatMessage({ id: "UserDetails" })}`,
         count: "",
         lastUpdate: "20/04/2022",
         lastLogin: "25/03/2022",
         link: "admin-panel-users/users",
         color: "svg-icon-success",
         background: "bg-light-success",
         isShow: true,
      },
      {
         id: 2,
         name: intl.formatMessage({ id: "PMOOffice" }),
         dept: intl.formatMessage({ id: "StrategicPlanning" }),
         title: intl.formatMessage({ id: "Groups" }),
         //icon: <KTSVG path="/media/icons/duotune/general/gen119_groups.svg" />,
         subIcon: <i className="bi bi-tools"></i>,
         subTitle: `${intl.formatMessage({
            id: "Show",
         })} ${intl.formatMessage({ id: "Groups" })}`,
         count: "",
         lastUpdate: "20/04/2022",
         lastLogin: "20/04/2022",
         link: "admin-panel-users/groups",
         color: "svg-icon-info",
         background: "bg-light-info",
         isShow: true,
      },
      {
         id: 3,
         name: intl.formatMessage({ id: "PMOOffice" }),
         dept: intl.formatMessage({ id: "StrategicPlanning" }),
         title: intl.formatMessage({ id: "Roles" }),
         icon: <i className="fas fa-user-tag fs-2x"></i>,
         subIcon: <i className="bi bi-tools"></i>,
         subTitle: `${intl.formatMessage({
            id: "Show",
         })} ${intl.formatMessage({ id: "Roles" })}`,
         count: "",
         lastUpdate: "20/04/2022",
         lastLogin: "20/04/2022",
         link: "admin-panel-users/roles",
         color: "svg-icon-dark",
         background: "bg-light-dark",
         isShow: true,
      },
      {
         id: 4,
         name: intl.formatMessage({ id: "PMOOffice" }),
         dept: intl.formatMessage({ id: "StrategicPlanning" }),
         title: intl.formatMessage({ id: "Domains" }),
         icon: <i className="bi bi-house-door-fill fs-2x text-warning"></i>,
         subIcon: <i className="bi bi-tools"></i>,
         subTitle: `${intl.formatMessage({
            id: "Show",
         })} ${intl.formatMessage({ id: "Domains" })}`,
         count: "",
         lastUpdate: "20/04/2022",
         lastLogin: "20/04/2022",
         link: "admin-panel-users/domains",
         color: "text-warning",
         background: "bg-light-warning",
         isShow: true,
      },
      {
         id: 3,
         name: intl.formatMessage({ id: "PMOOffice" }),
         dept: intl.formatMessage({ id: "StrategicPlanning" }),
         title: intl.formatMessage({ id: "Permissions" }),
         icon: <i className="bi bi-key-fill fs-3x"></i>,
         subIcon: <i className="bi bi-tools"></i>,
         subTitle: `${intl.formatMessage({
            id: "Show",
         })} ${intl.formatMessage({
            id: "Permissions",
         })}`,
         count: "",
         lastUpdate: "20/07/2022",
         lastLogin: "30/08/2022",
         link: "admin-panel-users/permissions",
         color: "svg-icon-info",
         background: "bg-light-info",
         isShow: true,
      },
   ]);
   return (
      <>
         <AdminPanelUsersToolbar />
         {/* <RightToolbar /> */}

         <div
            className="flex-lg-row-fluid"
            data-select2-id="select2-data-129-tmo1"
         >
            <div className="tab-content">
               <div
                  id="kt_project_users_table_pane"
                  className="tab-pane fade active show"
               >
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
                                       {intl.formatMessage({
                                          id: "Servicename",
                                       })}
                                    </th>
                                    <th className="min-w-90px">
                                       {intl.formatMessage({
                                          id: "Management",
                                       })}
                                    </th>
                                    <th className="min-w-90px">
                                       {intl.formatMessage({ id: "Number" })}
                                    </th>
                                    <th className="min-w-90px">
                                       {intl.formatMessage({
                                          id: "LastUpdate",
                                       })}
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
                                 {getCardsList.map((table) => (
                                    <UserManagementTable
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
                                       hasMoreActions={false}
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
      </>
   );
};
