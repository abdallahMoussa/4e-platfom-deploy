import { AxiosResponse } from "axios";
import userAxiosInstance from "./user-mangement-axios";
import { ResponseModel } from "./models/response-model";
import { DomainModel } from "./models/domain/add-domain-model";
import { EditDomainModel } from "./models/domain/edit-domain-model";

export class DeleteUserRoleModel {
  id: string;
  userId: string;
  constructor(id: string, userId: string) {
    this.id = id;
    this.userId = userId;
  }
}

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string, params?: any) =>
    userAxiosInstance.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) =>
    userAxiosInstance.post(url, body).then(responseBody),
  postForId: (url: string, id: number | Number | string, body: {}) =>{
    return userAxiosInstance.post(`${url}/${id}`, body).then(responseBody)
  }
   ,
  putById: (url: string, id: number | Number | string, body: {}) =>
    userAxiosInstance.put(`${url}/${id}`, body).then(responseBody),
  put: (url: string, body: {}) =>
    userAxiosInstance.put(url, body).then(responseBody),
  delete: (url: string) => userAxiosInstance.delete(url).then(responseBody),
  putForDelete: (url: string, id: number | string | Number) =>
    userAxiosInstance.put(`${url}/${id}`).then(responseBody),
  deleteById: (url: string, id: number | Number | string) =>
    userAxiosInstance.delete(`${url}/${id}`).then(responseBody),
  deleteByIdWithBody: (url: string, body: any) => {
    console.log("body from request", body);
    return userAxiosInstance.delete(`${url}`, body).then(responseBody);
  },
};

const DOMAINS_API_URLS = {
  ALL_DOMAINS: "/v1/Domain",
  GET_DOMAIN_BY_ID: "/v1/Domain",
  ADD_DOMAIN: "/v1/Domain",
  EDIT_DOMAIN: "/v1/Domain",
  DELETE_DOMAIN: "/v1/Domain/DeleteDomain",
};

const USERS_API_URLS = {
  ALL_USERS: "/v1/User",
  GET_USER_BY_ID: "/v1/User/GetUser",
  ADD_ROLE_TO_USER: "/v1/User/PostUserRole",
  // ADD_DOMAIN: "/v1/Domain",
  EDIT_USER_PASSWORD: "/v1/User/ChangeUserPassword",
  DELETE_USER: "/v1/User/DeleteUser",
  // ALL_ROLES:"v1/Role/GetAllPaginationRoles",
  // ROLE_BY_ID:"v1/Role/GetDetailsRoleById",
  ROLE_Category: "Lookup/GetAllRoleCategory",
  ALL_USER_ROLES: "/v1/User/GetRolesByUserId",
  DELETE_ROLE_FROM_USER: "/v1/User/DeleteRoleFromUser",
  ADD_LOGIN_PERMISSION: "/v1/User/PostUserLoginPermission",
  EDIT_LOGIN_PERMISSION: "/v1/User/PutUserPermission",
};

const JOBDEGREE_API_URLS = {
  ALL_JOBDEGREE: "/Lookup/GetAllJobDegree",
};

const Job_Roles_API_URLS = {
  ALL_JOB_ROLES: "/Lookup/GetAllJobRole",
};

const Job_NAMES_API_URLS = {
  ALL_JOB_NAMES: "/Lookup/GetAllJobNames",
};

export const domainApiConsume = {
  getAllDomains: (params?: any): Promise<ResponseModel> =>
    requests.get(DOMAINS_API_URLS.ALL_DOMAINS, params),
  getDomainbyId: (
    id: number | string | Number,
    params?: any
  ): Promise<ResponseModel> =>
    requests.get(`${DOMAINS_API_URLS.GET_DOMAIN_BY_ID}/${id}`, params),
  AddDomain: (domain: DomainModel): Promise<ResponseModel> =>
    requests.post(DOMAINS_API_URLS.ADD_DOMAIN, domain),
  EditDomain: (
    domain: EditDomainModel,
    id: number | string | Number
  ): Promise<ResponseModel> =>
    requests.put(`${DOMAINS_API_URLS.ADD_DOMAIN}/${id}`, domain),
  delete: (id: number | string | Number): Promise<ResponseModel> =>
    requests.putForDelete(`${DOMAINS_API_URLS.DELETE_DOMAIN}`, id),
};

export const userApiConsume = {
  getAllUsers: (params?: any): Promise<ResponseModel> =>
    requests.get(USERS_API_URLS.ALL_USERS, params),
  getAllUserRoles: (
    id: number | string | Number,
    params?: any
  ): Promise<ResponseModel> =>
    requests.get(`${USERS_API_URLS.ALL_USER_ROLES}/${id}`, params),
  getUserbyId: (
    id: number | string | Number,
    params?: any
  ): Promise<ResponseModel> =>
    requests.get(`${USERS_API_URLS.GET_USER_BY_ID}/${id}`, params),
  AddRoleToUser: (role: any): Promise<ResponseModel> =>
    requests.post(USERS_API_URLS.ADD_ROLE_TO_USER, role),
  deleteRoleFromUser: (body: any): Promise<ResponseModel> => {
    return requests.deleteByIdWithBody(
      `${USERS_API_URLS?.DELETE_ROLE_FROM_USER}`,
      {data:body}
    );
  },
  // EditDomain: (domain: EditDomainModel, id:number | string | Number): Promise<ResponseModel> =>
  //   requests.put(`${API_URLS.ADD_DOMAIN}/${id}`, domain),
  delete: (id: number | string | Number): Promise<ResponseModel> =>
    requests.deleteById(`${USERS_API_URLS?.DELETE_USER}`, id),
  EditUserPassword: (
    data: any,
    id: number | string | Number
  ): Promise<ResponseModel> =>
    requests.put(`${USERS_API_URLS?.EDIT_USER_PASSWORD}/${id}`, data),
  AddLoginPermission: (id: any, body: any): Promise<ResponseModel> =>
    requests.postForId(USERS_API_URLS.ADD_LOGIN_PERMISSION, id, body),
  EditLoginPermission: (id: any, body: any): Promise<ResponseModel> =>
    requests.putById(USERS_API_URLS.EDIT_LOGIN_PERMISSION, id, body),
};

export const jobDegreeApiConsume = {
  getAllJobDegree: (params?: any): Promise<ResponseModel> =>
    requests.get(JOBDEGREE_API_URLS.ALL_JOBDEGREE, params),
};

export const jobRoleApiConsume = {
  getAllJobRoles: (params?: any): Promise<ResponseModel> =>
    requests.get(Job_Roles_API_URLS.ALL_JOB_ROLES, params),
};

export const jobNameApiConsume = {
  getAllJobNames: (params?: any): Promise<ResponseModel> =>
    requests.get(Job_NAMES_API_URLS.ALL_JOB_NAMES, params),
};

export const usersRootUrl = "http://ncvc.4explain.net:5111/";
