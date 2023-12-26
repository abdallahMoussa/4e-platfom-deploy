import { role } from "./role-model";

export class roleDetails extends role {
  countUser: number;
  // countPermision: number;
   countGroup: number;

  constructor(
    id: string,
    nameAr: string,
    nameEn: string,
    details: string,
    code: string,
    count: number,
    countUser: number,
    // countPermision: number,
     countGroup: number,
     RoleCategoryNameEn: string,
     RoleCategoryNameAr: string,
     RoleCategoryId: string,
   
  ) {
    super(id, nameAr, nameEn, details, code, count,RoleCategoryNameEn,RoleCategoryNameAr,RoleCategoryId);
  
    this.countUser = countUser;
   //  this.countPermision = countPermision;
     this.countGroup = countGroup;
  }
}