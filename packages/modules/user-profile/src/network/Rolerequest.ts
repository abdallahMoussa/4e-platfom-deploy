
import { ResponseModel } from "./models/response-model";
import { postRole } from "./models/role/post-role";
import { AddUsersToRoleModel } from "./models/role-user/add-user-to-role-model";
import {  requests } from "./requests";
import { DeleteUserRoleModel } from "./models/role-user/delete-user-role-model";
import { AddGroupsToRoleModel } from "./models/role-group/add-group-to-role-model";
import { DeleteGroupRoleModel } from "./models/role-group/delete-group-role-model";
import { edittRoleModel } from "./models/role/edit-role";
import { AggregatoRequests } from "./features/AggregatoRequests";
import { postPermisionRoleMolde } from "./models/role-workspace-permision/post-permision-role";
// import { DeleteUserRoleModel } from "./models/role-user/role-model-user";



const ROLR_API_URLS = {
  ALL_ROLES: "v1/Role/GetAllPaginationRoles",
  ROLE_BY_ID: "v1/Role",
  POST_ROLE: "v1/Role",
  Edit_ROLE: "v1/Role",

};
const UserRole_API_URLS = {
  GET_USER_ROLEID: "v1/Role/GetUserByRoleId",
  Delete_USER_ROLEID: "v1/Role/DeleteUserRole",
  GET_USER_NO_IN_ROLE: "v1/Role/GetUsersWithNoRoleId",
  POST_USERS_TO_ROLES:"v1/Role/PostUserRole"
};
const Group_Role_API_URLS = {
  GET_Group_ROLEID: "v1/Role/GetGroupByRoleId",
  Delete_Group_ROLEID: "v1/Role/DeleteGruopRole",
  GET_GROUP_NO_IN_ROLE: "v1/Role/GetGroupWithNoRoleId",
  POST_GROUPS_TO_ROLES:"v1/Role/PostGroupToRole",
  Delete_GROUP_ROLEID: "v1/Role/DeleteGruopRole",
};

const Gategory_API_URLS = {
  ROLE_Category: "Lookup/GetAllRoleCategory",
};

const RoleWorkSPACRPRRMISION_API_URLS = {
  RoleWorkSPACRPRRMISION_ROLEID: "SubsytemSettingsAggregator/GetAllsubsystemTree",
  WorkspacePermission_For_Role:"User/WorkspacePermissionForRole",
  PostPermission_To_Role:"User/PostPermissionToRole"
};

export const roleApiConsume = {
  getAllRoles: (params?: any): Promise<ResponseModel> =>
  requests.get(ROLR_API_URLS.ALL_ROLES, params),
  getDetailsRoleById: (id: string, params?: any): Promise<ResponseModel> =>
  requests.get(`${ROLR_API_URLS.ROLE_BY_ID}/${id}`, params),
  create: (post: postRole): Promise<string> =>
  requests.post(ROLR_API_URLS.POST_ROLE, post),
  EditRole: (data: edittRoleModel, id:number | string | Number): Promise<string> =>
  requests.put(`${ROLR_API_URLS.Edit_ROLE}/${id}`, data),
};

export const roleCategoryApiConsume = {
  getAllRolesCategory: (params?: any): Promise<ResponseModel> =>
  requests.get(Gategory_API_URLS.ROLE_Category, params),
};

export const UserRoleApiConsume = {
  GetUserByRoleId: (id:string,params?: any): Promise<ResponseModel> =>
  requests.get(`${UserRole_API_URLS.GET_USER_ROLEID}/${id}`, params),
    DeleteUserRole: (DeleteUserRole: DeleteUserRoleModel):
     Promise<ResponseModel> => requests.delete(`${UserRole_API_URLS.Delete_USER_ROLEID}/${DeleteUserRole.id}/${DeleteUserRole.userId}`),
     GetUsersNoInRole: (id: string, params?: any): Promise<ResponseModel> =>
     requests.get(`${UserRole_API_URLS.GET_USER_NO_IN_ROLE}/${id}`, params),

     AddUsersToRole:(post: AddUsersToRoleModel): Promise<ResponseModel> =>
     requests.post(UserRole_API_URLS.POST_USERS_TO_ROLES, post),
    };
export const GroupRoleApiConsume = {
  GetGroupByRoleId: (id:string,params?: any): Promise<ResponseModel> =>
  requests.get(`${Group_Role_API_URLS.GET_Group_ROLEID}/${id}`, params),
  GetGroupsNoInRole: (id: string, params?: any): Promise<ResponseModel> =>
  requests.get(`${Group_Role_API_URLS.GET_GROUP_NO_IN_ROLE}/${id}`, params),
    DeleteGroupRole: (DeleteUserRole: DeleteGroupRoleModel):
     Promise<ResponseModel> => requests.delete(`${Group_Role_API_URLS.Delete_GROUP_ROLEID}/${DeleteUserRole.id}/${DeleteUserRole.GroupId}`),
    AddGroupsToRole:(post: AddGroupsToRoleModel): Promise<ResponseModel> =>
    requests.post(Group_Role_API_URLS.POST_GROUPS_TO_ROLES, post),
   };

   export const RoleWorkspacePermisionApiConsume = {
    GetWorkspaceTreePermisionRoleId: (params?: any): Promise<ResponseModel> =>
    AggregatoRequests.get(`${RoleWorkSPACRPRRMISION_API_URLS.RoleWorkSPACRPRRMISION_ROLEID}`, params),
    
    WorkspacePermissionForRole: (params?: any): Promise<ResponseModel> =>
    AggregatoRequests.get(`${RoleWorkSPACRPRRMISION_API_URLS.WorkspacePermission_For_Role}`, params),
    // GetGroupsNoInRole: (id: string, params?: any): Promise<ResponseModel> =>
    // AggregatoRequests.get(`${Group_Role_API_URLS.GET_GROUP_NO_IN_ROLE}/${id}`, params),
    //   DeleteGroupRole: (DeleteUserRole: DeleteGroupRoleModel):
    //    Promise<ResponseModel> => AggregatoRequests.delete(`${Group_Role_API_URLS.Delete_GROUP_ROLEID}/${DeleteUserRole.id}/${DeleteUserRole.GroupId}`),
    PostPermisionRole:(post: postPermisionRoleMolde,params?: any): Promise<ResponseModel> =>
     AggregatoRequests.post(RoleWorkSPACRPRRMISION_API_URLS.PostPermission_To_Role, post.permissionIds,params),
     };