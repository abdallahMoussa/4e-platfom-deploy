import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useIntl } from "react-intl";
import { toAbsoluteUrl } from "../../helpers";
import { useLang } from "../../i18n/Metronici18n";
// import { Home2Workspace } from "../../pages/view/home-template/template-2/home-2-workspace";

const Home2Layout = () => {
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
          <div className="w-100 h-100 bg-green2 position-absolute opacity-20"></div>
          <img
            className="w-100 h-100 img-fluid object-fit-cover"
            src={toAbsoluteUrl(
              "/media/theme-img/Templates/Template/header-bg2.jpg"
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
        {/* <div className="w-100 bg-footer1">
          <Footer />
        </div> */}
      </div>

      {/* end::Content */}
    </div>
  );
};
const Home2Template = () => (
  null
  // <Routes>
  //   <Route element={<Home2Layout />}>
  //     {/* <Route path="home-2-workspace" element={<Home2Workspace />} /> */}
  //     <Route path="*" element={<Navigate to="/error/404" />} />
  //   </Route>
  // </Routes>
);

export { Home2Template };
