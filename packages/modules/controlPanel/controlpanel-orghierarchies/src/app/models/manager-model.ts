export class ManagerModel {
  id: number;
  organizationId: number;
  orgNameAr: string;
  orgNameEn: string;
  managerId: number;
  managerUserName: string;
  imageUrl: string;
  fromAppointmentDay: Date;
  toAppointmentDay: Date;
  constructor(id: number, organizationId: number, orgNameAr: string, orgNameEn: string, managerID: number, managerUserName: string, imageUrl: string, fromAppointmentDay: Date, toAppointmentDay: Date) {
    {
      this.id = id;
      this.organizationId = organizationId;
      this.orgNameAr = orgNameAr;
      this.orgNameEn = orgNameEn;
      this.managerId = managerID;
      this.managerUserName = managerUserName;
      this.imageUrl = imageUrl;
      this.fromAppointmentDay = fromAppointmentDay;
      this.toAppointmentDay = toAppointmentDay;
    }
  }
}
