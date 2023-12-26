import React, { FC, useState } from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { UsersListToolbar } from "../domain-components/toolbars/UsersListToolbar";
import { UsersTable } from "./UsersTable";
import { SystemPagination } from "../SystemPagination";
import { FilterFormsPopup } from "../domain-components/popups/FilterFormsPopup";


export const AdminPanelUsersDetails: FC = () => {
   const intl = useIntl();
   const navigate = useNavigate();

   const userFilter = {
      id: 1,
      name: intl.formatMessage({ id: "UserInformation" }),
      items: [
         {
            id: 1,
            inputType: "text",
            name: intl.formatMessage({ id: "Username" }),
         },
         {
            id: 2,
            inputType: "select",
            name: intl.formatMessage({ id: "Source" }),
            options: [
               {
                  id: 1,
                  name: "مصدر 1",
               },
               {
                  id: 2,
                  name: "مصدر 2",
               },
               {
                  id: 3,
                  name: "مصدر 3",
               },
            ],
         },
         {
            id: 3,
            inputType: "date",
            name: intl.formatMessage({ id: "LastSignIn" }),
         },
         {
            id: 4,
            inputType: "radio",
            name: intl.formatMessage({ id: "Permission" }),
            options: [
               {
                  id: 1,
                  name: "permission",
                  value: intl.formatMessage({ id: "Enabled" }),
               },
               {
                  id: 2,
                  name: "permission",
                  value: intl.formatMessage({ id: "Disabled" }),
               },
            ],
         },
         {
            id: 5,
            inputType: "radio",
            name: intl.formatMessage({ id: "UnifiedEntry" }),
            options: [
               {
                  id: 1,
                  name: "unifiedEntry",
                  value: intl.formatMessage({ id: "Enabled" }),
               },
               {
                  id: 2,
                  name: "unifiedEntry",
                  value: intl.formatMessage({ id: "Disabled" }),
               },
            ],
         },
      ],
   };

   return (
      <>
         <div className="d-flex justify-content-between align-items-center">
            <div>
               <UsersListToolbar
                  title="UsersList"
                  subTitle="Users"
                  subTitleLink="/admin-panel-users-workspace"
               />
               {/* <RightToolbar /> */}
            </div>

            <div>
               <button
                  className="btn btn-custom btn-active-white btn-flex btn-color-white btn-active-color-primary fw-bolder me-4 bg-light bg-opacity-10 me-4"
                  data-bs-toggle="modal"
                  data-bs-target="#rega_modal_filter_forms"
               >
                  {/* <span className="svg-icon svg-icon-5 svg-icon-gray-500 m-0">
                     <KTSVG
                        path="/media/icons/duotune/general/gen100_filter.svg"
                        className="svg-icon-1x"
                     />
                  </span> */}
                  {intl.formatMessage({ id: "Filtering" })}
               </button>
               <button
                  className="btn btn-bg-white btn-active-color-primary"
                  onClick={() => navigate("/admin-panel-users-workspace/admin-panel-users/add")}
               >
                  {intl.formatMessage({
                     id: "AddUser",
                  })}
               </button>
            </div>
         </div>

         <div
            id="kt_content_container"
            className="d-flex flex-column-fluid align-items-start container-xxl p-0"
         >
            <div className="content flex-row-fluid" id="kt_content">
               <div
                  className="flex-lg-row-fluid"
                  data-select2-id="select2-data-129-tmo1"
               >
                  <div className="card mb-5 mb-xl-8">
                     <div className="card-body py-3">
                        <UsersTable />
                        {/* <SystemPagination /> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div
            className="modal fade"
            id="rega_modal_filter_forms"
            aria-hidden="true"
         >
            <FilterFormsPopup data={userFilter} />;
         </div>
      </>
   );
};
