export class UserModel {
  id: string;
  userName: string;
  firstName: string;
  secondName: string;
  thirdName: string;
  forthName: string;
  imageUrl: string;
  userGender: number;
  email: string;
  address: string;
  lastLoginTime: Date;
  phoneNumber: string;
  nationalId: string;
  jobNameAr: string;
  jobNameEn: string;
  languageAr: string;
  languageEn: string;
  constructor(
    id: string,
    userName: string,
    firstName: string,
    secondName: string,
    thirdName: string,
    forthName: string,
    imageUrl: string,
    userGender: number,
    email: string,
    address: string,
    lastLoginTime: Date,
    phoneNumber: string,
    nationalId: string,
    jobNameAr: string,
    jobNameEn: string,
    languageAr: string,
    languageEn: string
  ) {
    this.id = id;
    this.userName = userName;
    this.firstName = firstName;
    this.secondName = secondName;
    this.thirdName = thirdName;
    this.forthName = forthName;
    this.imageUrl = imageUrl;
    this.userGender = userGender;
    this.email = email;
    this.address = address;
    this.lastLoginTime = lastLoginTime;
    this.phoneNumber = phoneNumber;
    this.nationalId = nationalId;
    this.jobNameAr = jobNameAr;
    this.jobNameEn = jobNameEn;
    this.languageAr = languageAr;
    this.languageEn = languageEn;
  }
}
