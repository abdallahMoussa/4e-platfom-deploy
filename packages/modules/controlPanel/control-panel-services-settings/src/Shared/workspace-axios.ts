import { getToken } from "@4eplatform/shared";
import axios from "axios";
let baseUserUrl = process.env.REACT_APP_BASE_WORKSPACE_URL;
const workspaceAxiosInstance = axios.create({
  baseURL: `http://ncvc.4explain.net/:5186/api`,
});

// Add request interceptor
workspaceAxiosInstance.interceptors.request.use(
  function (config) {
    // config.headers.Authorization = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4OTBCMzc3MEJENTU2MkM2OEYyQjdEQjlBMDE4OUUwIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUxMTEvIiwibmJmIjoxNzAzMTYwMjYwLCJpYXQiOjE3MDMxNjAyNjAsImV4cCI6MTcwMzI0NjY2MCwiYXVkIjoiVXNlck1hbmFnZW1lbnRTZXJ2ZXIiLCJzY29wZSI6WyI0RU1pY3JvU2VydmljZXMiXSwiYW1yIjpbInB3ZCJdLCJjbGllbnRfaWQiOiJjbGllbnQiLCJzdWIiOiI4NTlkNTFiZS02ZjVjLTRlNWUtOGEwYy0wOGRiZTM1ODY5MGYiLCJhdXRoX3RpbWUiOjE3MDMxNjAyNTksImlkcCI6ImxvY2FsIiwiZW1haWwiOiJBaG1lZEBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJBZG1pbiIsIm5hbWUiOiJBaG1lZCIsImp0aSI6IkFCMEQwRTIyNUU0OTM1NjVCODU2QTJBODRBRDc1RjkzIn0.jl3yJH3xOAee9GctlxwZ_qzkO5MNQme4YJb_7-JkmJab05_uuPfxNpYF45gD-M27Hh2p8s0QmUjJ3CbpQKGEUTVAYjT5wcTLwZjmD8BC6bFm9biE5XFFuJtbJO1zgVJz2UzKZuIVQwNsDrAZjDJxnqBMaeLbWDg6xjoLhOPs-jehelgMLv9GH666jCjtFQCZ7y3X3WxBQZMofYOKoEXSaZzlDV07kh-Rmug50LUuOBIXMhPBGOLXUqyx5js5YeOn9w5E1cID9iGve0lzO9IBlX0eGJSWIT1bLHTL15PYlLPQxCyIeSdxSGKSD2Gnli1L4KAyb9E9VTDReDy7vm74Mw";
    config.headers.Authorization = `Bearer ${getToken()}`

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
workspaceAxiosInstance.interceptors.response.use(
  function (response) {
    // Handle successful responses
    return response;
  },
  function (error) {
    // Handle errors in responses
    return Promise.reject(error);
  }
);


export default workspaceAxiosInstance;

