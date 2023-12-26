
export class MemberModel {
  memberId: number;
  orgId: number;
  memberName: string;
  orgName: string;
  imageUrl: string;
  isChecked: boolean;
  constructor(memberId: number, orgId: number, memberName: string, orgName: string, imageUrl: string, isChecked: boolean) {
    {
      this.memberId = memberId;
      this.orgId = orgId;
      this.memberName = memberName;
      this.orgName = orgName;
      this.imageUrl = imageUrl;
      this.isChecked = isChecked;
    }
  }
}
