export class RoleUserModelArray {
  data: UserRole[];
  totalPages: number;
  totalItems: number;

  constructor(data: UserRole[], totalPages: number, totalItems: number) {
    this.data = data;
    this.totalPages = totalPages;
    this.totalItems = totalItems;
  }
}

export class UserRole {
  roleId: string;
  userId: string;
   createdOn: Date;
  // firstName: string | null;
  // secondName: string | null;
  userName: string;
  imageUrl: string;
  email: string;

  constructor(
    roleId: string,
    userId: string,
    createdOn: Date,
    userName: string,
    imageUrl: string,
    email: string,
    
    // firstName: string | null = null,
    // secondName: string | null = null
  ) {
    this.roleId = roleId;
    this.userId = userId;
     this.createdOn = createdOn;
    this.userName = userName;
    this.imageUrl = imageUrl;
    this.email = email;
    // this.firstName = firstName;
    // this.secondName = secondName;
  }
}

