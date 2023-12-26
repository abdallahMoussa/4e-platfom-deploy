
import { AxiosResponse } from 'axios';
import userAxiosInstance from './workSpace-axios';
import { ResponseModel } from '../models/response-model';
const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string, params?: any) => userAxiosInstance.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) => userAxiosInstance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => userAxiosInstance.put(url, body).then(responseBody),
  delete: (url: string) => userAxiosInstance.delete(url).then(responseBody),
};

 const API_URLS = {
  Subsystems: "GetAllsubsystemfilter",
  WorkspaceActivation: "PutWorkSpaceActivaion",
  EditWorkspaceParts : "PutLookUp",
  getSubsystem:"GetAllSubsystemAndComponent",
  getNoteTypeId:"GetAllLookUp"
};

  export const workSpaceApiConsume = {
    getAllSubsystems: (params?: any): Promise<ResponseModel> => requests.get(API_URLS.Subsystems,params),
    deleteSubsystems: (id:string): Promise<ResponseModel>=>requests.delete(`${id}`),
    editWorkspaceParts:(id:string,item:{}): Promise<ResponseModel>=>requests.put(`${API_URLS.EditWorkspaceParts}/${id}`,item),
    putWorkspaceActivation: (id:string): Promise<ResponseModel>=>requests.put(`${API_URLS.WorkspaceActivation}/${id}`,{id}),

    getSubsystemsDropdown: (params?: any): Promise<ResponseModel> => requests.get(API_URLS.getSubsystem,params),
    getNoteTypeId: (params?: any): Promise<ResponseModel> => requests.get(API_URLS.getNoteTypeId,params),
  };