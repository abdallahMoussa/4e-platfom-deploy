import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useIntl } from "react-intl";
import { toAbsoluteUrl } from "../../helpers";
import { useLang } from "../../i18n/Metronici18n";
import { Home1Workspace } from "../../pages/view/home-template/template-1/home-1-workspace";
import { Footer } from "../../pages/view/home-template/template-1/footer/footer";

const Home1Layout = () => {
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
    <div className="d-flex flex-row flex-column-fluid">
      <div
        className="wrapper d-flex flex-column flex-row-fluid"
        id="kt_wrapper"
      >
        <div className="position-absolute top-0 h-350px w-100">
          <div className="w-100 h-100 bg-green1 position-absolute opacity-20"></div>
          <img
            className="w-100 h-100 img-fluid object-fit-cover"
            src={toAbsoluteUrl(
              "/media/theme-img/Templates/Template/header-bg1.jpg"
            )}
            alt=""
          />
        </div>
        {/* begin::Wrapper */}
        <div className="d-flex flex-column-fluid align-items-start container-xxl">
          <div id="kt_content" className="content flex-row-fluid">
            <Outlet />
          </div>
        </div>

        {/* end::Wrapper */}
        <div className="w-100 footer1 theme-bg">
          <Footer />
        </div>
      </div>

      {/* end::Content */}
    </div>
  );
};
const Home1Template = () => (
  <Routes>
    <Route element={<Home1Layout />}>
      <Route path="home-1-workspace" element={<Home1Workspace />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Route>
  </Routes>
);

export { Home1Template };
