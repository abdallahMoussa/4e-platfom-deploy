import editDomainSlice from "./domains-slice/editDomainSlice";
// rootReducer.js
import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import domainsSlice from "./domains-slice/domainsSlice";
import addDomainSlice from "./domains-slice/addDomainSlice";
import domainSlice from "./domains-slice/domainSlice";
import deleteDomainSlice from "./domains-slice/deleteDomainSlice";
import usersSlice from "./users-slice/usersSlice";
import rolesSlice from "./role/rolesSlice";
import rolesCategorySlice from "./roleCategory/roles-category-Slice";
import roleUserSlice from "./role-user/roleUserSlice";
import roleGroupSlice from "./role-group/roleGroup";
import jobRolesSlice from "./jobRoles-slice/jobRolesSlice";
import jobNamesSlice from "./jobNames-slice/jobNamesSlice";
import userOrgsSlice from './users-slice/orgsSlice'
import jobDegreeSlice from "./users-slice/jobDegreeSlice";
import addUserSlice from "./users-slice/addUserSlice";
import userSlice from "./users-slice/userSlice";
import editUserSummarySlice from "./users-slice/editUserSummarySlice";
import userRolesSlice from "./users-slice/userRolesSlice";
import deleteUserSlice from "./users-slice/deleteUserSlice";
import addRoleToUserSlice from './users-slice/addRoleToUser'
import deleteRoleFromUserSlice from './users-slice/deleteRoleFromUser'
import RoleWorkspacePermisionSlice from "./role-workspace-permision/RoleWorkspacePermisionSlice";
import changePasswordSlice from "./users-slice/changePasswordSlice";
const store = configureStore({
  reducer: {
    domains: domainsSlice,
    addDomain: addDomainSlice,
    editDomain: editDomainSlice,
    domain: domainSlice,
    deleteDomain: deleteDomainSlice,
    users: usersSlice,
    jobRoles: jobRolesSlice,
    roles: rolesSlice,
    rolesCategory: rolesCategorySlice,
    roleUser: roleUserSlice,
    groupRole: roleGroupSlice,
    jobNames: jobNamesSlice,
    userOrgs: userOrgsSlice,
    jobDegrees: jobDegreeSlice,
    addUser: addUserSlice,
    user: userSlice,
    userSummary: editUserSummarySlice,
    userRoles: userRolesSlice,
    roleWorkspacePermision:RoleWorkspacePermisionSlice,
    changePassword:changePasswordSlice,
    deleteUser:deleteUserSlice,
    addRoleToUser:addRoleToUserSlice,
    deleteRoleFromUser:deleteRoleFromUserSlice
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
