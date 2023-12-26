import { State } from "./response-status";

export interface WorkSpace {
    noteNameAr:string ;
    noteNameEn:string ;
    url: string;
    description:string;
    icon:string ;
    color:number;
    state:State;
    isActive:boolean;
    visitDate:string;
    organizationHierarchyId:string|null;
    noteTypeId:string | null;
    parentId:string| null;
}

export interface WorkSpaceSystem{
    noteNameAr:string ;
    noteNameEn:string ;
    url: string;
    description:string;
    icon:string ;
    color:number;
    state:State;
    isActive:boolean;
    visitDate:string;
    organizationHierarchyId:string|null;
}