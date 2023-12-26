import { object, string, InferType, boolean } from "yup";

export const AddUserLoginPermissionSchema = object({
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
        const expirationDateFrom: any = this.parent.expirationDateFrom;
        const expirationDateTo = this.parent.expirationDateTo;
        if (!expirationDateTo) {
          return true;
        }

        return new Date(expirationDateFrom) <= new Date(expirationDateTo);
      },
    }),

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
});

export type AddUserLoginPermissionProps = InferType<typeof AddUserLoginPermissionSchema>;
