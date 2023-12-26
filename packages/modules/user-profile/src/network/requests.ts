import { AxiosResponse } from "axios";
import userAxiosInstance from "./user-mangement-axios";
import { ResponseModel } from "../user-profile/models/response-model";

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string, params?: any) =>
    userAxiosInstance.get(url, { params }).then(responseBody),
  getById: (url: string, id: string | number | Number, params?: any) =>
    userAxiosInstance.get(`${url}/${id}`, { params }).then(responseBody),
  post: (url: string, body: {}) =>
    userAxiosInstance.post(url, body).then(responseBody),
  postForId: (url: string, id: number | Number | string, body: {}) => {
    return userAxiosInstance.post(`${url}/${id}`, body).then(responseBody);
  },
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

const USER_PROFILE_OVERVIEW_API_URLS = {
  BASIC_INFO: "/v1/UserProfile/GetBasicInformation",
  USER_EXPERIENCES_BY_ID: "/v1/UserProfile/GetUserExperienceById",
  POST_USER_EXPERIENCE: "/v1/UserProfile/PostUserExperience",
  PUT_USER_EXPERIENCE: "/v1/UserProfile/PutUserExperience",
  DELETE_USER_EXPERIENCE: "/v1/UserProfile/DeleteUserExperience",
  PUT_USER_BASIC_INFO: "/v1/UserProfile/PostUserBasicInformation",

  // GET_USER_BY_ID: "/v1/User/GetUser",
  // ADD_ROLE_TO_USER: "/v1/User/PostUserRole",
  // ADD_DOMAIN: "/v1/Domain",
  // EDIT_USER_PASSWORD: "/v1/User/ChangeUserPassword",
  // DELETE_USER: "/v1/User/DeleteUser",
  // ALL_ROLES:"v1/Role/GetAllPaginationRoles",
  // ROLE_BY_ID:"v1/Role/GetDetailsRoleById",
  // ROLE_Category: "Lookup/GetAllRoleCategory",
  // ALL_USER_ROLES: "/v1/User/GetRolesByUserId",
  // DELETE_ROLE_FROM_USER: "/v1/User/DeleteRoleFromUser",
  // ADD_LOGIN_PERMISSION: "/v1/User/PostUserLoginPermission",
  // EDIT_LOGIN_PERMISSION: "/v1/User/PutUserPermission",
};

export const userProfileOverviewApiConsume = {
  getBasicInfo: (params?: any): Promise<ResponseModel> =>
    requests.get(USER_PROFILE_OVERVIEW_API_URLS.BASIC_INFO, params),
  // getAllUserRoles: (
  //   id: number | string | Number,
  //   params?: any
  // ): Promise<ResponseModel> =>
  //   requests.get(`${USERS_API_URLS.ALL_USER_ROLES}/${id}`, params),
  getUserExperiencebyId: (
    id: number | string | Number,
    params?: any
  ): Promise<ResponseModel> =>
    requests.get(
      `${USER_PROFILE_OVERVIEW_API_URLS.USER_EXPERIENCES_BY_ID}/${id}`,
      params
    ),

  PostUserExperience: (data: any): Promise<ResponseModel> =>
    requests.post(USER_PROFILE_OVERVIEW_API_URLS.POST_USER_EXPERIENCE, data),
  PutUserExperience: (
    data: any,
    id: number | string | Number
  ): Promise<ResponseModel> =>
    requests.put(
      `${USER_PROFILE_OVERVIEW_API_URLS.PUT_USER_EXPERIENCE}/${id}`,
      data
    ),
  DeleteUserExperience: (
    id: number | Number | string
  ): Promise<ResponseModel> =>
    requests.delete(
      `${USER_PROFILE_OVERVIEW_API_URLS.PUT_USER_EXPERIENCE}/${id}`
    ),
  PutUserBasicInfo: (
    data: any,
    // id: number | string | Number
  ): Promise<ResponseModel> =>
    requests.put(`${USER_PROFILE_OVERVIEW_API_URLS.PUT_USER_BASIC_INFO}`, data),
  // AddRoleToUser: (role: any): Promise<ResponseModel> =>
  //   requests.post(USERS_API_URLS.ADD_ROLE_TO_USER, role),
  // deleteRoleFromUser: (body: any): Promise<ResponseModel> => {
  //   return requests.deleteByIdWithBody(
  //     `${USERS_API_URLS?.DELETE_ROLE_FROM_USER}`,
  //     {data:body}
  //   );
  // },
  // // EditDomain: (domain: EditDomainModel, id:number | string | Number): Promise<ResponseModel> =>
  // //   requests.put(`${API_URLS.ADD_DOMAIN}/${id}`, domain),
  // delete: (id: number | string | Number): Promise<ResponseModel> =>
  //   requests.deleteById(`${USERS_API_URLS?.DELETE_USER}`, id),
  // EditUserPassword: (
  //   data: any,
  //   id: number | string | Number
  // ): Promise<ResponseModel> =>
  //   requests.put(`${USERS_API_URLS?.EDIT_USER_PASSWORD}/${id}`, data),
  // AddLoginPermission: (id: any, body: any): Promise<ResponseModel> =>
  //   requests.postForId(USERS_API_URLS.ADD_LOGIN_PERMISSION, id, body),
  // EditLoginPermission: (id: any, body: any): Promise<ResponseModel> =>
  //   requests.putById(USERS_API_URLS.EDIT_LOGIN_PERMISSION, id, body),
};

export const usersRootUrl = "http://ncvc.4explain.net:5111/";
