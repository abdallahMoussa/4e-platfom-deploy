
import { AxiosResponse } from 'axios';
import { ResponseModel } from '../models/response-model';
import axiosInstance from './aggregator-axios';
import { WorkSpace, WorkSpaceSystem } from '../models/WorkSpace';
const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string, params?: any) => axiosInstance.get(url, { params }).then(responseBody),
  post : (url: string | undefined, body: {}) => {
    if (url) {
      return axiosInstance.post(url, body).then(responseBody);
    } else {
      return axiosInstance.post('', body).then(responseBody);
    }
  },
  put: (url: string, body: {}) => axiosInstance.put(url, body).then(responseBody),
  delete: (url: string) => axiosInstance.delete(url).then(responseBody),
};

 const API_URLS = {
  workSpaces: "/GetWorkSpaces",
  getWorkSpaceComponent:"/GetWorkSpaceBySubsystem",
  addSubsystems: "",
  addCardsystems:"/PutSubsystem",
  editSubsystem:"/PutSubsystem"
};


  export const workSpaceAggregatorApiConsume = {
    getAllWorkspaces: (params?: any): Promise<ResponseModel> => requests.get(API_URLS.workSpaces,params),
    getWorkSpaceComponent: (id:string,params?: any): Promise<ResponseModel>=>requests.get(`${API_URLS.getWorkSpaceComponent}/${id}`, params),
    editSubsystem: (id: string, item: {}): Promise<ResponseModel> => requests.put(`${API_URLS.editSubsystem}/${id}`, item),
    editSubsystemCard: (id: string, item: {}): Promise<ResponseModel> => requests.put(`${id}`, item),

    AddWorkSpace: (workspace: WorkSpace)  =>
    requests.post(API_URLS.addSubsystems, workspace),
    AddCardsystems: (workspace: WorkSpaceSystem)  =>
    requests.post(API_URLS.addCardsystems, workspace),
  };