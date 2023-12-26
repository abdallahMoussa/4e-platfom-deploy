import { getToken } from "@4eplatform/shared";
import axios from "axios";
let baseUserUrl = process.env.REACT_APP_BASE_USER_URL;
const AggregatorAxiosInstance = axios.create({
 baseURL: `https://ncvc.4explain.net:7152/api`,
   // baseURL: `http://localhost:5034/api`,

});

// Add request interceptor
AggregatorAxiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${getToken()}`;

    if (config.params != null) {
      config.params = {
        ...config.params,
      };
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add response interceptor
AggregatorAxiosInstance.interceptors.response.use(
  function (response) {
    // Handle successful responses
    return response;
  },
  function (error) {
    // Handle errors in responses
    return Promise.reject(error);
  }
);

export default AggregatorAxiosInstance;
