import { AxiosResponse } from "axios";
import userAxiosInstance from "./user-mangement-axios";
import { ResponseModel } from "./models/response-model";

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string, params?: any) =>
    userAxiosInstance.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) =>
    userAxiosInstance.post(url, body).then(responseBody),
  put: (url: string, body: {}) =>
    userAxiosInstance.put(url, body).then(responseBody),
  delete: (url: string) => userAxiosInstance.delete(url).then(responseBody),
  putForDelete: (url: string, id: number | string | Number) =>
    userAxiosInstance.put(`${url}/${id}`).then(responseBody),
};

const USERS_API_URLS = {
  EDIT_USER_SUMMARY: "/v1/User/PutUserSummary",
};

export const userAccountApiConsume = {
  editUserSummary: (
    data: any,
    id: number | string | Number
  ): Promise<ResponseModel> =>
    requests.put(`${USERS_API_URLS?.EDIT_USER_SUMMARY}/${id}`, data),
};
