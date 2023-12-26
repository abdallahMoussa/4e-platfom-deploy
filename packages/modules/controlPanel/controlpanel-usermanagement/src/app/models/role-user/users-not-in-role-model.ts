export class UsersNotInRoleModelArray {
    data: UsersNotInRoleModel[];
    totalPages: number;
    totalItems: number;
  
    constructor(data: UsersNotInRoleModel[], totalPages: number, totalItems: number) {
      this.data = data;
      this.totalPages = totalPages;
      this.totalItems = totalItems;
    }
  }
  
  export class UsersNotInRoleModel {
    roleId: string;
    id: string;
    name: string;
    imageUrl: string;
    email: string;
    isChecked:boolean;
  
    constructor(
      roleId: string,
      id: string,
      name: string,
      imageUrl: string,
      email: string,
    ) {
      this.roleId = roleId;
      this.id = id;
      this.name = name;
      this.imageUrl = imageUrl;
      this.email = email;
      this.isChecked=false;
    }
  }
  
  