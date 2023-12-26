import { Color, State } from "../response-status";
export class GetWorkSpaceByIdResponse {
  id: string = '00000000-0000-0000-0000-000000000000';
  noteNameAr: string = '';
  noteNameEn: string = '';
  description: string = '';
  url:string = '';
  icon: string = '';
  color: Color = 0;
  state:State = 0;
  isActive: boolean = false;
  visitDate: Date = new Date();
  lastUpdate: Date = new Date();
  noteTypeId: string = '';
  organizationHierarchyId: string = '3a16d49d-d9ea-4a1c-7728-08dbef2c5ccb';
  parentId: string = '00000000-0000-0000-0000-000000000000';
  orgNameAr: string = '';
  orgNameEn: string = '';
  lkNoteTypes:lkNoteTypes=new lkNoteTypes();
}

export class lkNoteTypes {
  id: string = '00000000-0000-0000-0000-000000000000';
  nameAr:string = '';
  nameEn: string = '';
}
