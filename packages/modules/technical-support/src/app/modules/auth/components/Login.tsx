/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { getCurrentSystemLanguage } from "../../../partials/functions/language";
import AuthFooter from "./AuthFooter";
import LoginLogoSide from "./LoginLogoSide";
import { useForm } from "react-hook-form";
import { useUser } from "../../../providers/user-provider";
export function Login() {
  let { user, setUser, login } = useUser();

  const intl = useIntl();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const [isNotValid, setIsNotValid] = useState(false);

  const onSubmit = (data) => {
    setIsNotValid(false);
    if (
      (data.username === "demo@rega.com" ||
        data.username === "demo@ncvc.com" ||
        data.username === "demo@gac.com" ||
        data.username === "demo@jwan.com" ||
        data.username === "demo@iti.com" ||
        data.username === "demo@rsnf.com") &&
      data.password === "demo2030"
    ) {
      // Perform login logic and set the user data
      const user = {
        username: data.username,
        password: "demo2030",
      };

      console.log("hhhhhhhhhhhhhhhhh", user);
      setUser(user);

      window.location.href = "/home-workspace";
      // navigate("/home-workspace");
    } else {
      setIsNotValid(true);
    }
    console.log("loggeddddddd", user);
  };

  return (
    <div className="row">
      <div className="col-lg-5 col-md-6 col-sm-12 align-items-center">
        <div className="bg-body d-flex flex-column flex-center rounded-4 w-100 p-7">
          <div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-100 px-0 px-lg-15 px-md-10">
            <div className="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
              <form
                className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
                noValidate={true}
                id="kt_sign_in_form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="text-center mb-11">
                  <h1 className="text-dark fw-bolder mb-3">
                    {intl.formatMessage({ id: "SignIn" })}
                  </h1>
                </div>

                <div className="fv-row mb-8 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                  <input
                    type="text"
                    placeholder={intl.formatMessage({ id: "Username" })}
                    name="username"
                    autoComplete="off"
                    className="form-control bg-light w-100"
                    {...register("username", { required: true })}
                    style={{
                      direction: `${
                        getCurrentSystemLanguage() == "ar" ? "rtl" : "ltr"
                      }`,
                    }}
                  />
                  {errors.username && (
                    <div className="text-danger my-3">
                      {intl.formatMessage({ id: "ThisFelidIsRequired" })}
                    </div>
                  )}

                  <div className="fv-plugins-message-container invalid-feedback"></div>
                </div>

                <div className="fv-row mb-3 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                  <input
                    type="password"
                    placeholder={intl.formatMessage({ id: "Password" })}
                    name="password"
                    autoComplete="off"
                    className="form-control bg-light"
                    {...register("password", { required: true })}
                    style={{
                      direction: `${
                        getCurrentSystemLanguage() == "ar" ? "rtl" : "ltr"
                      }`,
                    }}
                  />
                  {errors.password && (
                    <div className="text-danger my-3">
                      {intl.formatMessage({ id: "ThisFelidIsRequired" })}
                    </div>
                  )}
                  <div className="fv-plugins-message-container invalid-feedback"></div>
                </div>
                <div className="mb-2 pt-2 pb-3">
                  <label htmlFor="domain" className="form-label px-2 fontSz-6">
                    {intl.formatMessage({ id: "Domain" })}
                  </label>

                  <select
                    id="domain"
                    className="form-select myform-control inputHeight form-select-solid select2-hidden-accessible mt-1"
                    data-kt-select2="true"
                    data-placeholder={intl.formatMessage({ id: "Choose" })}
                    data-dropdown-parent="#kt_menu_62775e8642438"
                    data-allow-clear="true"
                    data-select2-id="select2-data-4-vqtd"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option disabled selected>
                      {intl.formatMessage({ id: "Choose" })}
                    </option>
                    <option value="1">
                      {intl.formatMessage({ id: "Domain1" })}
                    </option>
                    <option value="2">
                      {intl.formatMessage({ id: "Domain2" })}{" "}
                    </option>
                    <option value="3">
                      {intl.formatMessage({ id: "Domain3" })}{" "}
                    </option>
                    <option value="4">
                      {intl.formatMessage({
                        id: "Domain4",
                      })}
                    </option>
                    <option value="5">
                      {intl.formatMessage({
                        id: "Domain5",
                      })}
                    </option>
                  </select>
                </div>
                {isNotValid && (
                  <div className="text-danger my-3">
                    {intl.formatMessage({
                      id: "UsernameOrPasswordIsIncorrect",
                    })}
                  </div>
                )}
                <div className="d-flex flex-stack flex-wrap justify-content-start gap-3 fs-base fw-semibold mb-8">
                  <div></div>

                  <a className="link-primary" href="/auth/forgot-password">
                    {intl.formatMessage({ id: "ForgotPassword" })}
                  </a>
                </div>

                <div className="d-grid mb-10">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    // onClick={async () =>
                    //   (await trigger()) && onSubmit(getValues())
                    // }
                  >
                    <span className="indicator-label">
                      {intl.formatMessage({ id: "SignIn" })}
                    </span>

                    <span className="indicator-progress">
                      {intl.formatMessage({ id: "PleaseWait" })}
                      ...{" "}
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  </button>
                  {/* <a
                  role="button"
                  type="submit"
                  id="kt_sign_in_submit"
                  className="btn btn-primary"
                  href="/home-workspace"
                >
                  <span className="indicator-label">
                    {intl.formatMessage({ id: "SignIn" })}
                  </span>

                  <span className="indicator-progress">
                    {intl.formatMessage({ id: "PleaseWait" })}
                    ...{" "}
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                </a> */}
                </div>

                <div className="text-gray-500 text-center fw-semibold fs-6">
                  {intl.formatMessage({ id: "NotAMemberYet" })}

                  <span className="mx-2">؟</span>
                  <a className="link-primary" href="/auth/registration">
                    {intl.formatMessage({ id: "SignUp" })}
                  </a>
                </div>
              </form>
            </div>
          </div>
          <AuthFooter />
        </div>
      </div>
      <div className="col-lg-7 col-md-6 col-sm-12 p-3 d-flex flex-center flex-column align-items-center align-items-center">
        <LoginLogoSide />
      </div>
    </div>
  );
}
