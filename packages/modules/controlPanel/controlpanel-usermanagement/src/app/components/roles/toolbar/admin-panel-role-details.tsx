import { FC } from "react";
//import { RightToolbar } from "../partials/RightToolbar";
import { UserManagmentRoleDetailsToolbar } from "./UserManagmentRoleDetailsToolbar";
import UserRoleDetails from "../components/UserRoleDetails";

export const AdmimPanelRoleDetails: FC = () => {
  return (
    <>
    <UserManagmentRoleDetailsToolbar/>
    <UserRoleDetails/>
    {/* <RightToolbar/> */}
    </>
  )
};
