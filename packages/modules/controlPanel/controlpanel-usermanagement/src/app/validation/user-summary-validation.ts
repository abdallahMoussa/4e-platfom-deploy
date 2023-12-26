import { object, string, InferType, number } from "yup";
export const userSummarySchema = object({
  userName: string()
    .required("InputFieldIsRequried")
    .matches(/^[a-zA-Z]+$/, "UsernameMustContainOnlyEnglishCharacters"),
  phoneNumber: string()
    .required("InputFieldIsRequried")
    .matches(
      /^(\+9665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/,
      "InvalidPhone"
    ),
  nationalId: string()
    .required("InputFieldIsRequried")
    .matches(/^\d{10}$/, "InvalidNationalID"),
  address: string(),
  userGender: string().required("InputFieldIsRequried"),
});

export type userSummaryProps = InferType<typeof userSummarySchema>;
