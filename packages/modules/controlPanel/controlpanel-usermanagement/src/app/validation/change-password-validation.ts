import { object, string, InferType, number, ref } from "yup";
export const changePasswordSchema = object({
  newPassword: string()
    .required("InputFieldIsRequried")
    .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      /^\d{6}[A-Z][a-z]$/,
      "PasswordMustBeAtLeast8CharactersLong,ContainAtLeastOneNumber,LowerCaseLetter,UppercaseLetterAndSpecialCharacter"
    ),
  passwordConfirmation: string()
    .required("InputFieldIsRequried")
    .oneOf([ref("newPassword"), null], "ItMustMatchTheNewPassword"),
});

export type changePasswordProps = InferType<typeof changePasswordSchema>;
