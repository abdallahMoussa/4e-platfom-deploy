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
  org: any;
}

interface BasicInformationDTO {
  id: string;
  userName: string;
  imageUrl: string;
  email: string;
  nationalId: string;
  fullName: string;
  address: string;
  userGender: number;
  phoneNumber: string;
  birthDate: Date | null;
  nationality: string;
  maritalStatus: number;
}

interface ScientificDataAndExperiences {
  id: string;
  qualificationType: string;
  university: string;
  specialization: string;
  date: Date | null;
  scientificExpertise: string;
  attachments: string;
}

export class UserDataModel {
  functionalData: FunctionalData;
  basicInformationDTO: BasicInformationDTO;
  jobHistory: any;
  scientificDataAndExperiences: ScientificDataAndExperiences[];

  constructor(
    functionalData: FunctionalData,
    basicInformationDTO: BasicInformationDTO,
    jobHistory: any,
    scientificDataAndExperiences: ScientificDataAndExperiences[]
  ) {
    this.functionalData = functionalData;
    this.basicInformationDTO = basicInformationDTO;
    this.jobHistory = jobHistory;
    this.scientificDataAndExperiences = scientificDataAndExperiences;
  }
}
