
import { AxiosResponse } from 'axios';
// import { ResponseModel } from '../models/response-model';
// import { WorkSpace } from '../models/WorkSpace';
import axiosRequest from './axios.configs';
const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string, params?: any) => axiosRequest.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) => axiosRequest.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axiosRequest.put(url, body).then(responseBody),
  delete: (url: string) => axiosRequest.delete(url).then(responseBody),
};

 const End_Points = {
  login:"v1/Account/Login"
};

  export const httpRequest = {
    login: (user: {}): Promise<any> => requests.post(`${End_Points.login}`, user),
  };