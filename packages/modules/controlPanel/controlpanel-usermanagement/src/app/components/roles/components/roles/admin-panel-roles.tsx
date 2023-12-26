import { FC } from "react";
import { UserManagementRolesToolbar } from "./roles-toolbar";
//import { RightToolbar } from "../partials/RightToolbar";
import UserRoles from "./roles-cards";

export const AdminPanelRolesDetails: FC = () => {
  return (
    <>
    <UserManagementRolesToolbar/>
    <UserRoles/>
    {/* <RightToolbar/> */}
    </>
  )
};
