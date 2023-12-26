export class PostHierarchyMembersModel {
    orgId: number;
    managerId: number;
    jobId: number;
  
    constructor(orgId: number, managerId: number, jobId: number) {
      this.orgId = orgId;
      this.managerId = managerId;
      this.jobId = jobId;
    }
  }
  