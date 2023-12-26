export class ScientificDataModel {
  id: string;
  qualificationType: string;
  university: string;
  specialization: string;
  date: Date;
  scientificExpertise: string;
  attachments: string;
  constructor(
    id: string,
    qualificationType: string,
    university: string,
    specialization: string,
    date: Date,
    scientificExpertise: string,
    attachments: string
  ) {
    this.id = id;
    this.qualificationType = qualificationType;
    this.university = university;
    this.specialization = specialization;
    this.date = date;
    this.scientificExpertise = scientificExpertise;
    this.attachments = attachments;
  }
}

