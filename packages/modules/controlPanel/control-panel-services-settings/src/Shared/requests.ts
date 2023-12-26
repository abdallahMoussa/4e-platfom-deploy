import { AxiosResponse } from 'axios';
import workspaceAxiosInstance from './workspace-axios';
import aggAxiosInstance from './agg-axios';
import orgAxiosInstance from './org-axios';
import axiosInstance from '../requests/aggregator-axios';
const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  getWorkSpace: (url: string, params?: any) => workspaceAxiosInstance.get(url, { params }).then(responseBody),
  postWorkSpace: (url: string, body: {}) => workspaceAxiosInstance.post(url, body).then(responseBody),
  putWorkSpace: (url: string, body: {}) => workspaceAxiosInstance.put(url, body).then(responseBody),
  deleteWorkSpace: (url: string) => workspaceAxiosInstance.delete(url).then(responseBody),

  getAgg: (url: string, params?: any) => axiosInstance.get(url, { params }).then(responseBody),
  postAgg: (url: string, body: {}) => axiosInstance.post(url, body).then(responseBody),
  putAgg: (url: string, body: {}) => axiosInstance.put(url, body).then(responseBody),
  deleteAgg: (url: string) => axiosInstance.delete(url).then(responseBody),

  getOrg: (url: string, params?: any) => orgAxiosInstance.get(url, { params }).then(responseBody),
  postOrg: (url: string, body: {}) => orgAxiosInstance.post(url, body).then(responseBody),
  putOrg: (url: string, body: {}) => orgAxiosInstance.put(url, body).then(responseBody),
  deleteWOrg: (url: string) => orgAxiosInstance.delete(url).then(responseBody),
};