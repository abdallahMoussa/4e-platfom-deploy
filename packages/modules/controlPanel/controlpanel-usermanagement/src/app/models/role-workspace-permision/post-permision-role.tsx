export class postPermisionRoleMolde {
  workSpaceId: string;
  roleId: string;
  workSpaceKey: number;
  permissionIds: string[] 
  constructor(roleId: string, workSpaceId: string, workSpaceKey: number,permissionIds:string[]) {
    this.workSpaceId = workSpaceId;
    this.roleId = roleId;
    this.workSpaceKey = workSpaceKey;
    this.permissionIds=permissionIds
   
  }
}
