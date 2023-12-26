interface Org {
  orgId: string;
  orgNameAr: string;
  orgNameEn: string;
}

interface FunctionalData {
  userId: string;
  jobCode: string | null;
  hiringDate: Date | null;
  vacation: string | null;
  lengthOfService: string | null;
  jobNameNameAr: string | null;
  jobNameNameEn: string | null;
  jobDegreeId: string | null;
  promotion: string | null;
  org: Org[];
}

class JobHistory {
  id: string;
  position: string;
  startDate: Date | null;
  endDate: Date | null;

  constructor(
    id: string,
    position: string,
    startDate: Date | null,
    endDate: Date | null
  ) {
    this.id = id;
    this.position = position;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
export class UserJobsInfoModel {
  functionalData: FunctionalData;
  jobHistory: JobHistory | null;
  constructor(functionalData: FunctionalData, jobHistory: JobHistory | null) {
    this.functionalData = functionalData;
    this.jobHistory = jobHistory;
  }
}
