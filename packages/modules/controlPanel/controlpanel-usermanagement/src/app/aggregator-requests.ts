import { AxiosResponse } from "axios";
import { ResponseModel } from "./models/response-model";
import { UserModel } from "./models/users/add-user-model";
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

const USERS_API_URLS = {
  ADD_USER: "/User/PostUser",
};

export const userApiConsume = {
  AddUser: (user: UserModel): Promise<ResponseModel> =>
    requests.post(USERS_API_URLS.ADD_USER, user),
};
