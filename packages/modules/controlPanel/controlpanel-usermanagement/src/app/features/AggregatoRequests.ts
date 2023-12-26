import AggregatorAxiosInstance from "../Aggregatoraxios";
import { AxiosResponse } from "axios";

const responseBody = (response: AxiosResponse) => response.data;

export const AggregatoRequests = {
    get: (url: string, params?: any) =>
    AggregatorAxiosInstance.get(url, { params }).then(responseBody),
    post: (url: string, body: {},params?: any) =>
    AggregatorAxiosInstance.post(url, body,{  params }).then(responseBody),
    put: (url: string, body: {}) =>
    AggregatorAxiosInstance.put(url, body).then(responseBody),
    delete: (url: string) => AggregatorAxiosInstance.delete(url).then(responseBody),
    putForDelete: (url: string, id: number | string | Number) =>
    AggregatorAxiosInstance.put(`${url}/${id}`).then(responseBody),
  };