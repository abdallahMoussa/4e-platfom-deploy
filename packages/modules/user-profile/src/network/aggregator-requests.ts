import { AxiosResponse } from "axios";
import { ResponseModel } from "../user-profile/models/response-model";
import aggregatorAxiosInstance from "./user-mangment-aggregator";
const responseBody = (response: AxiosResponse) => response.data;
export const requests = {
  get: (url: string, params?: any) =>
    aggregatorAxiosInstance.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) =>
    aggregatorAxiosInstance.post(url, body).then(responseBody),
  put: (url: string, body: {}) =>
    aggregatorAxiosInstance.put(url, body).then(responseBody),
  delete: (url: string) =>
    aggregatorAxiosInstance.delete(url).then(responseBody),
  putForDelete: (url: string, id: number | string | Number) =>
    aggregatorAxiosInstance.put(`${url}/${id}`).then(responseBody),
};

const USER_PROFILE_OVERVIEW_API_URLS = {
  USER_VIEW: "/User/UserView",
  JOB_INFO: "/User/functionalDataAllinformationJob",
  POST_JOB_INFO: "/User/PutfunctionDataAllInformationJob",
};

export const userProfileOverviewApiConsume = {
  getUserView: (params?: any): Promise<ResponseModel> =>
    requests.get(USER_PROFILE_OVERVIEW_API_URLS.USER_VIEW, params),
  getJobsInfo: (params?: any): Promise<ResponseModel> =>
    requests.get(USER_PROFILE_OVERVIEW_API_URLS.JOB_INFO, params),
  postJobInfo: (data: any): Promise<ResponseModel> =>
    requests.post(USER_PROFILE_OVERVIEW_API_URLS.POST_JOB_INFO, data),
  // getAllUserRoles: (
  //   id: number | string | Number,
  //   params?: any
  // ): Promise<ResponseModel> =>
  //   requests.get(`${USERS_API_URLS.ALL_USER_ROLES}/${id}`, params),
  // getUserbyId: (
  //   id: number | string | Number,
  //   params?: any
  // ): Promise<ResponseModel> =>
  //   requests.get(`${USERS_API_URLS.GET_USER_BY_ID}/${id}`, params),
  // AddRoleToUser: (role: any): Promise<ResponseModel> =>
  //   requests.post(USERS_API_URLS.ADD_ROLE_TO_USER, role),
  // deleteRoleFromUser: (body: any): Promise<ResponseModel> => {
  //   return requests.deleteByIdWithBody(
  //     `${USERS_API_URLS?.DELETE_ROLE_FROM_USER}`,
  //     {data:body}
  //   );
  // },
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
