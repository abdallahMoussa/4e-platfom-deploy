/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useIntl } from "react-intl";
import { Registration } from "./components/Registration";
import { ForgotPassword } from "./components/ForgotPassword";
import { Login } from "./components/Login";
import { ConfirmSignup } from "./components/ConfirmSignup";
import { toAbsoluteUrl } from "../../../app/helpers";
import { useLang } from "../../i18n/Metronici18n";

const AuthLayout = () => {
  const intl = useIntl();
  useEffect(() => {
    document.body.classList.add("bg-white");
    return () => {
      document.body.classList.remove("bg-white");
    };
  }, []);

  const lang = useLang();

  useEffect(() => {
    if (lang === "ar") {
      //require('../../assets/sass/core/layout/ar/_base_ar.scss')
      // @ts-ignore
      require("../../assets/sass/core/layout/ar/_base_ar.scss");
      require("../../assets/sass/core/layout/Theme/_theme_style.scss");
    } else if (lang === "en") {
      require("../../assets/sass/core/layout/Theme/_theme_style.scss");
    }
  }, []);

  return (
    <div
      className="auth-bg bgi-size-cover h-100 bgi-attachment-fixed bgi-position-center"
      style={{
        backgroundImage: `url(${toAbsoluteUrl(
          "/media/theme-img/header-bg.jpg"
        )})`,
      }}
    >
      {/* begin::Content */}
      <div className="flex-column flex-column-fluid p-10 pb-lg-10 login-page">
        {/* begin::Wrapper */}
        <div className="rounded p-lg-10 p-0">
          <Outlet />
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
    </div>
  );
};

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="ConfirmSignup" element={<ConfirmSignup />} />
      <Route index element={<Login />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Route>
  </Routes>
);

export { AuthPage };
