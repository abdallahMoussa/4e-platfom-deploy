import {
  object,
  string,
  InferType,
  ref,
  date,
  array,
  number,
  boolean,
} from "yup";

export const AddUserSchema = object({
  // firstName: string().required("InputFieldIsRequried"),
  // secondName: string().required("InputFieldIsRequried"),
  // thirdName: string().required("InputFieldIsRequried"),
  // forthName: string().required("InputFieldIsRequried"),
  quadrupleName: string()
    .test(
      "is-quadruple-name",
      "QuadrupleNameMustConsistOfFourNamesSeparatedBySpaces",
      (value) => {
        if (!value) {
          return true;
        }

        const names = value.trim().split(" ");

        // Check if there are exactly four names
        return names.length === 4;
      }
    )
    .required("InputFieldIsRequried"),
  userName: string()
    .required("InputFieldIsRequried")
    .matches(/^[a-zA-Z]+$/, "UsernameMustContainOnlyEnglishCharacters"),
  email: string()
    .required("InputFieldIsRequried")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "InvalidEmail"
    ),
  phoneNumber: string()
    .required("InputFieldIsRequried")
    .matches(
      /^(\+9665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/,
      "InvalidPhone"
    ),
  nationalId: string()
    .required("InputFieldIsRequried")
    .matches(/^\d{10}$/, "InvalidNationalID"),
  userType: number(),
  domainId: string().when("userType", {
    is: 1,
    then: string().required("InputFieldIsRequried"),
  }),
  jobNameId: string().required("InputFieldIsRequried"),
  address: string(),
  jobDegreeId: string().required("InputFieldIsRequried"),
  jobRoleId: string().required("InputFieldIsRequried"),
  startDate: string()
    .required("InputFieldIsRequried")
    .typeError("InputFieldIsRequried")
    .test({
      name: "startDate",
      message: "StartDateMustBeBeforeOrEqualToEndDate",
      test: function (value) {
        const endDate = this.parent.endDate;
        const startDate = this.parent.startDate;
        if (!endDate) {
          return true;
        }
        return new Date(startDate) <= new Date(endDate);
      },
    })
    .test({
      name: "startDate",
      message: "StartDateMustBeAfterOrEqualToday",
      test: function (value: any) {
        const today = new Date();
        const startDate = new Date(value);
        return startDate >= today;
      },
    }),

  endDate: string()
    .required("InputFieldIsRequried")
    .typeError("InputFieldIsRequried")
    .test({
      name: "endDate",
      message: "EndDateMustBeEqualToOrGreaterThanStartDate",
      test: function (value: any) {
        const startDate: any = this.parent.startDate;
        if (!startDate || !value) {
          // If either start or end date is not present, don't perform the comparison
          return true;
        }
        return new Date(value) >= new Date(startDate);
      },
    }),
  isExpired: boolean(),
  expirationDateFrom: string()
    .required("InputFieldIsRequried")
    .typeError("InputFieldIsRequried")
    .test({
      name: "expirationDateFrom",
      message: "ExpirationDateMustBeEqualToOrAfterToday",
      test: function (value) {
        const expirationDateFrom: any = this.parent.expirationDateFrom;
        return new Date(expirationDateFrom) >= new Date();
      },
    })
    .test({
      name: "expirationDateFrom",
      message: "ExpirationDateFromMustBeBeforeOrEqualExpirationDateFrom",
      test: function (value) {
        const expirationDateFrom = this.parent.expirationDateFrom;
        const expirationDateTo = this.parent.expirationDateTo;
        if (!expirationDateTo) {
          return true;
        }

        return new Date(expirationDateFrom) <= new Date(expirationDateTo);
      },
    }),
  // .string().when("isExpired", {
  //   is: true,
  //   then:
  //   string()
  //     .required("InputFieldIsRequried")
  //     .typeError("InputFieldIsRequried")
  //     .test({
  //       name: "expirationDateFrom",
  //       message: "ExpirationDateMustBeEqualToOrAfterToday",
  //       test: function (value) {
  //         const expirationDateFrom: any = this.parent.expirationDateFrom;
  //         return new Date(expirationDateFrom) >= new Date();
  //       },
  //     })
  //     .test({
  //       name: "expirationDateFrom",
  //       message: "ExpirationDateFromMustBeBeforeOrEqualExpirationDateFrom",
  //       test: function (value) {
  //         const expirationDateFrom = this.parent.expirationDateFrom;
  //         const expirationDateTo = this.parent.expirationDateTo;
  //         if (!expirationDateTo) {
  //           return true;
  //         }

  //         return new Date(expirationDateFrom) <= new Date(expirationDateTo);
  //       },
  //     }),
  // }),
  expirationDateTo: string()
    .typeError("InputFieldIsRequried")
    .required("InputFieldIsRequried")
    .test({
      name: "expirationDateTo",
      message: "ExpirationDateToMustBeEqualToOrGreaterThanExpirationDateFrom",
      test: function (value) {
        const expirationDateFrom = this.parent.expirationDateFrom;
        const expirationDateTo = this.parent.expirationDateTo;
        if (!expirationDateFrom || !expirationDateTo) {
          return true;
        }
        return new Date(expirationDateTo) >= new Date(expirationDateFrom);
      },
    }),
  // .string().when(["isExpired", "expirationDateFrom"], {
  //   is: (isExpired: boolean, expirationDateFrom: string | null) =>
  //     isExpired && expirationDateFrom,
  //   then: string()
  //     .typeError("InputFieldIsRequried")
  //     .required("InputFieldIsRequried")
  //     .test({
  //       name: "expirationDateTo",
  //       message: "ExpirationDateToMustBeEqualToOrGreaterThanExpirationDateFrom",
  //       test: function (value) {
  //         const expirationDateFrom = this.parent.expirationDateFrom;
  //         const expirationDateTo = this.parent.expirationDateTo;
  //         if (!expirationDateFrom || !expirationDateTo) {
  //           return true;
  //         }
  //         return new Date(expirationDateTo) >= new Date(expirationDateFrom);
  //       },
  //     }),

  // }),
  hiringDate: string()
    .required("InputFieldIsRequried")
    .typeError("InputFieldIsRequried"),
});

export type AddUserProps = InferType<typeof AddUserSchema>;
