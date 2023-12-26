import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DomainsTable } from "./domains/DomainsTable";
import { AddDomain } from "./popups/AddDomainPopup";
import { SystemPagination } from "../SystemPagination";
import { UsersListToolbar } from "./toolbars/UsersListToolbar";
import { useIntl } from "react-intl";
import { FilterDomainPopup } from "./popups/FilterDomainPopup";
export const AdminPanelDomainsDetails: FC = () => {
   const intl = useIntl();
   
   let [showAddDomain,setShowAddDomain]=useState<boolean>(false)

   const navigate = useNavigate();
   const domainFilter = {
      id: 3,
      name: intl.formatMessage({ id: "DomainInformation" }),
      items: [
         {
            id: 1,
            inputType: "text",
            name: intl.formatMessage({ id: "Creator" }),
         },
         {
            id: 2,
            inputType: "date",
            name: intl.formatMessage({ id: "Date" }),
         },
         {
            id: 3,
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
            id: 4,
            inputType: "radio",
            name: intl.formatMessage({ id: "Status" }),
            options: [
               {
                  id: 1,
                  name: "status",
                  value: intl.formatMessage({ id: "Active" }),
               },
               {
                  id: 2,
                  name: "status",
                  value: intl.formatMessage({ id: "Inactive" }),
               },
            ],
         },
      ],
   };
   let [showFilterDomain,setShowFilterDomain]=useState<boolean>(false)

 
   return (
      <>
         <div className="d-flex justify-content-between align-items-center">
            <div>
               <UsersListToolbar
                  title="DomainsList"
                  subTitle="DomainsManagement"
                  subTitleLink="/admin-panel-users-workspace"
               />
               {/* <RightToolbar /> */}
            </div>

            <div>
               <button
                  className="btn btn-custom btn-active-white btn-flex btn-color-white btn-active-color-primary fw-bolder me-4 bg-light bg-opacity-10 me-4"
                  // data-bs-toggle="modal"
                  // data-bs-target="#rega_modal_filter_forms"
                  onClick={()=>{setShowFilterDomain(true)}}
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
                  data-bs-toggle="modal"
                  data-bs-target="#rega_modal_add_domain"
                  onClick={()=>{setShowAddDomain(true)}}
               >
                  {intl.formatMessage({
                     id: "AddDomain",
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
                        <DomainsTable />
                        {/* <SystemPagination /> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>

            <AddDomain showAddDomain={showAddDomain} handleClose={()=>{setShowAddDomain(false)}} />

         <div
            className="modal fade"
            id="rega_modal_filter_forms"
            aria-hidden="true"
         >
            <FilterDomainPopup data={domainFilter} showFilter={showFilterDomain} handleClose={()=>{setShowFilterDomain(false)}} />;
         </div>
      </>
   );
};
