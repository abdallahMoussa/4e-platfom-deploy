export class RoleModelArray {
  data: role[];
  totalPages: number;
  totalItems: number;

  constructor(data: role[], totalPages: number, totalItems: number) {
    this.data = data;
    this.totalPages = totalPages;
    this.totalItems = totalItems;
  }
}
export class role {
  id: string;
  nameAr: string;
  nameEn: string;
  details: string;
  code: string;
  count: number;
  roleCategoryNameEn: string;
  roleCategoryNameAr: string;
  roleCategoryId: string;

  constructor(
    id: string,
    nameAr: string,
    nameEn: string,
    details: string,
    code: string,
    count: number,
    roleCategoryNameEn: string,
    roleCategoryNameAr: string,
    roleCategoryId: string
  ) {
    this.id = id;
    this.code = code;
    this.count = count;
    this.details = details;
    this.nameAr = nameAr;
    this.nameEn = nameEn;
    this.roleCategoryNameAr = roleCategoryNameAr;
    this.roleCategoryId = roleCategoryId;
    this.roleCategoryNameEn = roleCategoryNameEn;
  }
}
