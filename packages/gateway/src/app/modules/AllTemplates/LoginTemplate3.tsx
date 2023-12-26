import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useIntl } from "react-intl";
import { toAbsoluteUrl } from "../../helpers";
import { useLang } from "../../i18n/Metronici18n";
// import { Login1Workspace } from "../../pages/view/login-template/template-1/login-1-workspace";
// import { Login2Workspace } from "../../pages/view/login-template/template-2/login-2-workspace";
// import { Login3Workspace } from "../../pages/view/login-template/template-3/login-3-workspace";

const LoginLayout = () => {
  const intl = useIntl();
  //  useEffect(() => {
  //   document.body.classList.add("bg-white");
  //   return () => {
  //     document.body.classList.remove("bg-white");
  //   };
  // }, []);

  const lang = useLang();

  useEffect(() => {
    if (lang === "ar") {
      require("../../assets/sass/core/layout/ar/_base_ar.scss");
      require("../../assets/sass/core/layout/Theme/_theme_style.scss");
      // @ts-ignore
      // import("../../assets/sass/core/layout/ar/_base_ar.scss");
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
      <div className="flex-column flex-column-fluid p-10 pb-lg-10">
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
const LoginTemplate3 = () => (
  null
  // <Routes>
  //   <Route element={<LoginLayout />}>
  //     <Route path="login-3-workspace" element={<Login3Workspace />} />
  //     <Route path="*" element={<Navigate to="/error/404" />} />
  //   </Route>
  // </Routes>
);

export { LoginTemplate3 };
