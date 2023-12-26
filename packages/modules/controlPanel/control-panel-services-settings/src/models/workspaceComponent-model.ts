export class WorkspaceComponentModelArray {
  data: WorkspaceComponentModel[];
  totalPages: number;
  totalItems: number;

  constructor(
    data: WorkspaceComponentModel[],
    totalPages: number,
    totalItems: number
  ) {
    this.data = data;
    this.totalPages = totalPages;
    this.totalItems = totalItems;
  }
}

export class WorkspaceComponentModel {
  id: string;
  noteNameAr: string;
  noteNameEn: string;
  description: string;
  icon: string;
  color: number;
  state: number;
  isActive: boolean;
  visitDate: string;
  lastUpdate: string;
  noteTypeId: string;
  organizationHierarchyId: string;
  orgNameAr: string;
  orgNameEn: string;
  lkNoteTypes: {
    id: string;
    nameAr: string;
    nameEn: string;
  };

  constructor(
    id = '00000000-0000-0000-0000-000000000001',
    noteNameAr = 'Initial Arabic Note Name',
    noteNameEn = 'Initial English Note Name',
    description = 'Initial Description',
    icon = 'Initial Icon',
    color = 1,
    state = 1,
    isActive = true,
    visitDate = '2023-12-20',
    lastUpdate = '2023-12-20',
    noteTypeId = '00000000-0000-0000-0000-000000000001',
    organizationHierarchyId = '00000000-0000-0000-0000-000000000001',
    orgNameAr = 'Initial Org Name Arabic',
    orgNameEn = 'Initial Org Name English',
    lkNoteTypes = { id: '00000000-0000-0000-0000-000000000001', nameAr: 'Initial Name Arabic', nameEn: 'Initial Name English' }
  ) {
    this.id = id;
    this.noteNameAr = noteNameAr;
    this.noteNameEn = noteNameEn;
    this.description = description;
    this.icon = icon;
    this.color = color;
    this.state = state;
    this.isActive = isActive;
    this.visitDate = visitDate;
    this.lastUpdate = lastUpdate;
    this.noteTypeId = noteTypeId;
    this.organizationHierarchyId = organizationHierarchyId;
    this.orgNameAr = orgNameAr;
    this.orgNameEn = orgNameEn;
    this.lkNoteTypes = lkNoteTypes;
  }
}

