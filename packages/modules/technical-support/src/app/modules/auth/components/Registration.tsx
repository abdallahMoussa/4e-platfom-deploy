/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { getUserByToken, register } from "../core/_requests";
import { useAuth } from "../core/Auth";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/helpers";
import { PasswordMeterComponent } from "../../../../_metronic/assets/ts/components";
import { useIntl } from "react-intl";
import { getCurrentSystemLanguage } from "../../../partials/functions/language";
import AuthFooter from "./AuthFooter";
import LoginLogoSide from "./LoginLogoSide";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};

const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("First name is required"),
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  lastname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Last name is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
  changepassword: Yup.string()
    .required("Password confirmation is required")
    .when("password", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Password and Confirm Password didn't match"
      ),
    }),
  acceptTerms: Yup.bool().required("You must accept the terms and conditions"),
});

export function Registration() {
  const [loading, setLoading] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();
  let intl = useIntl();
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        const { data: auth } = await register(
          values.email,
          values.firstname,
          values.lastname,
          values.password,
          values.changepassword
        );
        saveAuth(auth);
        const { data: user } = await getUserByToken(auth.api_token);
        setCurrentUser(user);
      } catch (error) {
        console.error(error);
        saveAuth(undefined);
        setStatus("The registration details is incorrect");
        setSubmitting(false);
        setLoading(false);
      }
    },
  });
  let [showDropdownContent, setShowDropdownContent] = useState(false);
  let handleShowDropdownContent = () => {
    setShowDropdownContent((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    PasswordMeterComponent.bootstrap();
  }, []);

  return (
    <div className="d-flex flex-column flex-lg-row flex-column-fluid">
      <div
        className={`d-flex flex-column-fluid flex-lg-row-auto justify-content-center p-12 ${
          getCurrentSystemLanguage() == "ar"
            ? "justify-content-lg-end "
            : "justify-content-lg-start "
        }`}
      >
        <div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-7">
          <div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
            <div className="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
              <form
                className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
                noValidate={true}
                id="kt_sign_up_form"
                action="#"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="text-center mb-11">
                  <h1 className="text-dark fw-bolder mb-3">
                    {intl.formatMessage({ id: "SignUp" })}
                  </h1>
                </div>

                <div className="fv-row mb-8 fv-plugins-icon-container">
                  <input
                    type="text"
                    placeholder={intl.formatMessage({ id: "Email" })}
                    name="email"
                    autoComplete="off"
                    className="form-control bg-light"
                  />

                  <div className="fv-plugins-message-container invalid-feedback"></div>
                </div>

                <div
                  className="fv-row mb-8 fv-plugins-icon-container"
                  data-kt-password-meter="true"
                >
                  <div className="mb-1">
                    <div className="position-relative mb-4">
                      <input
                        className="form-control bg-light"
                        type="password"
                        placeholder={intl.formatMessage({ id: "Password" })}
                        name="password"
                        autoComplete="off"
                      />

                      <span
                        className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                        data-kt-password-meter-control="visibility"
                      >
                        <i className="ki-duotone ki-eye-slash fs-2"></i>{" "}
                        <i className="ki-duotone ki-eye fs-2 d-none"></i>{" "}
                      </span>
                    </div>

                    <div
                      className="d-flex align-items-center mb-3"
                      data-kt-password-meter-control="highlight"
                    >
                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>

                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                    </div>
                  </div>

                  <div className="text-muted">
                    {intl.formatMessage({
                      id: "Use8OrMoreCharactersWithAMixOfLetters,Numbers&Symbols",
                    })}
                  </div>

                  <div className="fv-plugins-message-container invalid-feedback"></div>
                </div>

                <div className="fv-row mb-8 fv-plugins-icon-container">
                  <input
                    type="text"
                    placeholder={intl.formatMessage({ id: "RepeatPassword" })}
                    name="confirm-password"
                    autoComplete="off"
                    className="form-control bg-light"
                  />

                  <div className="fv-plugins-message-container invalid-feedback"></div>
                </div>

                <div className="fv-row mb-8 fv-plugins-icon-container">
                  <label className="form-check form-check-inline position-relative px-9">
                    <span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">
                      {" "}
                      {intl.formatMessage({
                        id: "IAcceptThe",
                      })}
                      <a href="#" className="ms-1 link-primary">
                        {intl.formatMessage({
                          id: "Terms",
                        })}
                      </a>
                    </span>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="toc"
                      value="1"
                      style={{
                        position: "absolute",
                        [getCurrentSystemLanguage() == "ar"
                          ? "right"
                          : "left"]: `${
                          getCurrentSystemLanguage() == "ar" ? "0px" : "31px"
                        }`,
                      }}
                    />
                  </label>
                  <div className="fv-plugins-message-container invalid-feedback"></div>
                </div>

                <div className="d-grid mb-10">
                  <button
                    type="submit"
                    id="kt_sign_up_submit"
                    className="btn btn-primary"
                  >
                    <span className="indicator-label">
                      {intl.formatMessage({ id: "Registration" })}
                    </span>

                    <span className="indicator-progress">
                      {intl.formatMessage({ id: "PleaseWait" })}...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  </button>
                </div>

                <div className="text-gray-500 text-center fw-semibold fs-6">
                  {intl.formatMessage({ id: "AlreadyHaveAnAccount" })}
                  <span className="mx-2">?</span>
                  <a href="/auth/login" className="link-primary fw-semibold">
                    {intl.formatMessage({ id: "SignIn" })}
                  </a>
                </div>
              </form>
            </div>
          </div>
          <AuthFooter />
        </div>
      </div>
      <div className="d-flex flex-lg-row-fluid">
        <LoginLogoSide />
      </div>
    </div>
  );
}
