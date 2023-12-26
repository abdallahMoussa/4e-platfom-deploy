export interface PostOrgModel {
    nameAr:string,
    nameEn:string,
    description:string,
    categoryId:string,
    parentId:string |null
  }

  export interface PutOrgModel {
    id:string
    nameAr:string,
    nameEn:string,
    description:string,
    categoryId:string,
    parentId:string | null
  }