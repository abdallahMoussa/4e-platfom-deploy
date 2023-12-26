import {AxiosResponse} from 'axios'
import {ResponseModel} from './app/partials/response-model'
import userAxiosInstance from './app/platform-axios'
const responseBody = (response: AxiosResponse) => response.data

export const requests = {
  get: (url: string, params?: any) => userAxiosInstance.get(url, {params}).then(responseBody),
  post: (url: string, body: {}) => userAxiosInstance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => userAxiosInstance.put(url, body).then(responseBody),
  delete: (url: string) => userAxiosInstance.delete(url).then(responseBody),
}

const API_URLS = {
  PlatformMainSettings: 'GetPlatformSettingsMainInfo',
  PostMainSettings: 'PostPlatformSettings',
  PostMainSites: 'PostPlatformSettingsSites',
  FetchSites: 'GetPlatformSettingsSites',
  addPlatformIcon: 'PostPlatformSettingsDepartmentIcons',
  addPlatformDepartment: 'PostPlatformSettingsDepartmentItems',
  tab2Sites: 'GetPlatformSettingssDepartment',
  deleteSite: 'DeletePlatformSettingsSites/',
}

export const platformConsume = {
  getAllPlatform: (params?: any): Promise<ResponseModel> => requests.get(API_URLS.PlatformMainSettings, params),
  getAllSites: (params?: any): Promise<ResponseModel> => requests.get(API_URLS.FetchSites, params),
  getSitesDepartment: (params?: any): Promise<ResponseModel> => requests.get(API_URLS.tab2Sites, params),
  postMainSettings: (body: any): Promise<ResponseModel> => requests.post(API_URLS.PostMainSettings, body),
  postMainSites: (body: any): Promise<ResponseModel> => requests.post(API_URLS.PostMainSites, body),
  postPlatformDepartment: (body: any): Promise<ResponseModel> => requests.post(API_URLS.addPlatformDepartment, body),
  postPlatformIcon: (body: any): Promise<ResponseModel> => requests.post(API_URLS.addPlatformIcon, body),
  deleteSite: (id:any): Promise<ResponseModel> => requests.delete(API_URLS.deleteSite + id),
}
