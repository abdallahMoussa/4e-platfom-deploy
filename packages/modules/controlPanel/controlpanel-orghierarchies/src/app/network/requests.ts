import { AxiosResponse } from "axios";
import userAxiosInstance from "./orghierarchies-axios";
import { ResponseModel } from "../models/response-model";
import { OrgProps } from "../validation/add-org-validation";
import { PostOrgModel, PutOrgModel } from "../models/consume-org-model";

let baseUserUrl = "http://ncvc.4explain.net:7152/api";
let baseOrgUrl = "http://ncvc.4explain.net:5041/api";
let baseAggrUrl = "http://ncvc.4explain.net:5034/api";

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string, params?: any) =>
    userAxiosInstance.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) =>
    userAxiosInstance.post(url, body).then(responseBody),
  put: (url: string, body: {}) =>
    userAxiosInstance.put(url, body).then(responseBody),
  delete: (url: string, params?: any) =>
    userAxiosInstance.delete(url, { params }).then(responseBody),
  putForDelete: (url: string, id: number | string | Number) =>
    userAxiosInstance.put(`${url}/${id}`).then(responseBody),
};

const API_URLS = {
  OrgDomain: `${baseOrgUrl}/OrgHierarchy`,
  GetAllOrgs: `${baseOrgUrl}/OrgHierarchy/GetAll`,
  GetAllOrgsCategory: `${baseOrgUrl}/Lookup/GetAllLookup`,
  GetOrgManager: `${baseAggrUrl}/Org/GeManger`,
};

export const orgApiConsume = {
  getAllOrgs: (params?: any): Promise<ResponseModel> =>
    requests.get(API_URLS.GetAllOrgs, params),
  getAllOrgCategory: (params?: any): Promise<ResponseModel> =>
    requests.get(API_URLS.GetAllOrgsCategory, params),
  post: (orgData: OrgProps): Promise<ResponseModel> =>
    requests.post(API_URLS.OrgDomain, orgData),
  update: (orgData: PutOrgModel): Promise<ResponseModel> =>
    requests.put(`${API_URLS.OrgDomain}/${orgData.id}`, orgData),
  delete: (id: string, params: any): Promise<ResponseModel> =>
    requests.delete(`${API_URLS.OrgDomain}/${id}`, params),
};

export const UserApiConsume = {
  getAllOrgs: (params?: any): Promise<ResponseModel> =>
    requests.get(API_URLS.GetAllOrgs, params),
  getOrgManagerbyId: (id: string): Promise<ResponseModel> =>
    requests.get(`${API_URLS.GetOrgManager}/${id}`),
  //  Promise<Product> => requests.get(`${productDetailsUrl2}/${id}`,params),
  // create: (post: Product): Promise<string> =>
  //   requests.post(allProductsUrl2, post),
  // update: (post: any, id: number): Promise<string> =>
  //   requests.put(`${allProductsUrl2}/${id}`, post),
  // delete: (id: number): Promise<void> => requests.delete(`${allProductsUrl2}/${id}`),
};
export const AggApiConsume = {
  getAllOrgs: (params?: any): Promise<ResponseModel> =>
    requests.get(API_URLS.GetAllOrgs, params),
  getOrgManagerbyId: (id: string): Promise<ResponseModel> =>
    requests.get(`${API_URLS.GetOrgManager}/${id}`),
  //  Promise<Product> => requests.get(`${productDetailsUrl2}/${id}`,params),
  // create: (post: Product): Promise<string> =>
  //   requests.post(allProductsUrl2, post),
  // update: (post: any, id: number): Promise<string> =>
  //   requests.put(`${allProductsUrl2}/${id}`, post),
  // delete: (id: number): Promise<void> => requests.delete(`${allProductsUrl2}/${id}`),
};
