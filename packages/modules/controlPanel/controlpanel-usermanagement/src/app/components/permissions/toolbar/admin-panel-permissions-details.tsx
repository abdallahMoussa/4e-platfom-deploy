import { FC } from "react";
//import { RightToolbar } from "../partials/RightToolbar";
import { UserManagementPermissionsToolbar } from "../toolbar/UserManagementPermissionsToolbar";
import { RiFilter2Fill } from "react-icons/ri";
import { useIntl } from "react-intl";
import PermissionsTable from "./PermissionsTable";

export const AdminPanelPermissionsDetails: FC = () => {
   const intl = useIntl();
   return (
      <>
         <div className="d-flex justify-content-between align-items-center">
            <UserManagementPermissionsToolbar />
            <div>
               <div className="d-flex justify-content-between align-items-center mt-3 mt-lg-0 justify-content-lg-end">
                  <div
                     className="btn btn-custom btn-active-white btn-flex btn-color-white btn-active-color-primary fw-bolder me-4 bg-light bg-opacity-10"
                     data-bs-toggle="modal"
                     data-bs-target="#Rega_modal_filter-permissions"
                  >
                     <RiFilter2Fill size={17} />{" "}
                     {intl.formatMessage({ id: "Filtering" })}
                  </div>
                  <div
                     className="btn btn-bg-white btn-active-color-primary"
                     data-bs-toggle="modal"
                     data-bs-target="#Rega_modal_add-user-permission"
                  >
                     {intl.formatMessage({ id: "AddPermission" })}
                  </div>
               </div>
            </div>
         </div>

         <PermissionsTable />
         {/* <RightToolbar /> */}
      </>
   );
};
