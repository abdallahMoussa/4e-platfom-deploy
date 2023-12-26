export class BasicInfoModel {
  id: string;
  imageUrl: string;
  email: string;
  nationalId: string;
  firstName: string;
  secondName: string;
  thirdName: string;
  forthName: string;
  address: string;
  userGender: number;
  phoneNumber: string;
  birthDate: Date | null;
  nationality: string;
  maritalStatus: number;

  constructor(
    id: string,
    imageUrl: string,
    email: string,
    nationalId: string,
    firstName: string,
    secondName: string,
    thirdName: string,
    forthName: string,
    address: string,
    userGender: number,
    phoneNumber: string,
    birthDate: Date | null,
    nationality: string,
    maritalStatus: number
  ) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.email = email;
    this.nationalId = nationalId;
    this.firstName = firstName;
    this.secondName = secondName;
    this.thirdName = thirdName;
    this.forthName = forthName;
    this.address = address;
    this.userGender = userGender;
    this.phoneNumber = phoneNumber;
    this.birthDate = birthDate;
    this.nationality = nationality;
    this.maritalStatus = maritalStatus;
  }
}
