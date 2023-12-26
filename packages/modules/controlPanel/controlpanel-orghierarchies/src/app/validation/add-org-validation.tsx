import { object, string, InferType } from "yup";

export const OrgSchema = object({
  nameAr: string()
    .required("RequiredInputField")
    .matches(/^[ء-ي ]+$/, "RoleNameMustBeInArabic"),
  nameEn: string()
    .required("RequiredInputField")
    .matches(/^[a-zA-Z ]+$/, "OrgNameMustBeInEnglish"),
  description: string()
    .required("RequiredInputField")
    .matches(/^[a-zA-Z ]+$/, "DescriptionNameMustBeInEnglish"),

  categoryId: string()
    .required("OrgCategoryIdMustBeRequired")
    .test({
      test: (categoryId: string | any) =>
      categoryId.replace(/\s/g, "").length > 0,
      message: "OrgCategoryIdMustBeRequired",
    }),

  parentId: string()
    .notRequired()
    .nullable()
       
});

export type OrgProps = InferType<typeof OrgSchema>;
