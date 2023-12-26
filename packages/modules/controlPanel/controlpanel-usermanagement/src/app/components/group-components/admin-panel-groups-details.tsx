import React, { FC, useState } from "react";
// import { UsersListToolbar } from "./toolbar/UsersListToolbar";
// import { SystemPagination } from "../../partials/SystemPagination";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { UsersListToolbar } from "../domain-components/toolbars/UsersListToolbar";
import { GroupsTable } from "./GroupsTable";
import { SystemPagination } from "../SystemPagination";
import { FilterFormsPopup } from "../domain-components/popups/FilterFormsPopup";
// import { GroupsTable } from "./components/GroupsTable";
// import { KTSVG } from "../../../helpers";
// import { FilterFormsPopup } from "./popup/FilterFormsPopup";
// import { useNavigate } from "react-router";
// import { RightToolbar } from "../partials/RightToolbar";

export const AdminPanelGroupsDetails: FC = () => {
   const intl = useIntl();

   const navigate = useNavigate();
   const groupFilter = {
      id: 2,
      name: intl.formatMessage({ id: "GroupInformation" }),
      items: [
         {
            id: 1,
            inputType: "text",
            name: intl.formatMessage({ id: "GroupName" }),
         },
         {
            id: 2,
            inputType: "date",
            name: intl.formatMessage({ id: "EstablishedDate" }),
         },
         {
            id: 3,
            inputType: "date",
            name: intl.formatMessage({ id: "LastEditDate" }),
         },
      ],
   };

   return (
      <>
         <div className="d-flex justify-content-between align-items-center">
            <div>
               <UsersListToolbar
                  title="GroupsList"
                  subTitle="GroupsManagement"
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
                  <span className="svg-icon svg-icon-5 svg-icon-gray-500 m-0">
                     {/* <KTSVG
                        path="/media/icons/duotune/general/gen100_filter.svg"
                        className="svg-icon-1x"
                     /> */}
                  </span>
                  {intl.formatMessage({ id: "Filtering" })}
               </button>
               <button
                  className="btn btn-bg-white btn-active-color-primary"
                  onClick={() => navigate("/admin-panel-users-workspace/admin-panel-users/groups/add")}
               >
                  {intl.formatMessage({
                     id: "AddGroup",
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
                        <GroupsTable />
                        <SystemPagination />
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
            <FilterFormsPopup data={groupFilter} />;
         </div>
      </>
   );
};
