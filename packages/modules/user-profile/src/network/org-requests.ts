import { AxiosResponse } from "axios";
import { ResponseModel } from "./models/response-model";
import userOrgsAxiosInstance from "./user-mangement-orgs-axios";

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string, params?: any) =>
    userOrgsAxiosInstance.get(url, { params }).then(responseBody),
};

const USERS_API_URLS = {
  ALL_ORGS: "/OrgHierarchy/GetAll",
};

export const userOrgsApiConsume = {
  getAllOrgs: (params?: any): Promise<ResponseModel> =>
    requests.get(USERS_API_URLS.ALL_ORGS, params),
};
