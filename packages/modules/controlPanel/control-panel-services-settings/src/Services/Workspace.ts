import { ResponseModel } from "../Shared/models/response-model";
import { requests } from "../Shared/requests";

export const WorkSpaceApiCustom = {
    getWorkSpaseById: (url:string): Promise<ResponseModel> => requests.getAgg(url),
    putWorkSpase: (url:string,body: any): Promise<ResponseModel> => requests.putAgg(url,body),
    GetAllOrganiztion: (url:string): Promise<ResponseModel> => requests.getOrg(url),
    GetAllLookUp: (url:string): Promise<ResponseModel> => requests.getWorkSpace(url),
}