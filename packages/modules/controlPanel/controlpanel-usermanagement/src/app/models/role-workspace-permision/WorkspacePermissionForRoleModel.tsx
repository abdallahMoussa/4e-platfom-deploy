
export class PermissionModelDto {
  data: PermissionModel[];
  totalPages: number;
  totalItems: number;

  constructor(
    data: PermissionModel[],
    totalPages: number,
    totalItems: number
  ) {
    this.data = data;
    this.totalPages = totalPages;
    this.totalItems = totalItems;
  }
}

export class PermissionModel {
    permissionId: string;
    nameAr: string;
    nameEn: string;
    isPermissionChecked: boolean;
  
    constructor(permissionId: string, nameAr: string, nameEn: string, isPermissionChecked: boolean) {
      this.permissionId = permissionId;
      this.nameAr = nameAr;
      this.nameEn = nameEn;
      this.isPermissionChecked = isPermissionChecked;
    }
  }
  

  