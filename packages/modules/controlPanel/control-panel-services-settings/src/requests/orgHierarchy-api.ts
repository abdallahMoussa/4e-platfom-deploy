
import { AxiosResponse } from 'axios';
import { ResponseModel } from '../models/response-model';
import orgHierarchyInstance from './orgHierarchy-axios';
const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string, params?: any) => orgHierarchyInstance.get(url, { params }).then(responseBody)
};

 const API_URLS = {
  GetAll: "GetAll",
};

export const orgHierarchyApiConsume = {
    getAllOrgHierarchy: (params?: any): Promise<any> => requests.get(API_URLS.GetAll,params)
  };