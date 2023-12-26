import React, { Fragment } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { useIntl } from "react-intl";

function LoginLogoSide() {
  const intl = useIntl();
  return (
    <Fragment>
      <div className="d-flex flex-column flex-center w-100">
        <div className="text-white fw-bolder text-center mb-7 d-flex align-items-center ">
          {intl.locale == "ar" ? (
            <img
              alt="Logo"
              src={toAbsoluteUrl("/media/theme-img/logo-login-ar.png")}
              className="logo-default  h-lg-300px h-sm-100 w-100"
            />
          ) : (
            <img
              alt="Logo"
              src={toAbsoluteUrl("/media/theme-img/logo-login-en.png")}
              className="logo-default  h-lg-300px h-sm-100 w-100"
            />
          )}
        </div>
        {/*<div className="text-white fw-bolder text-center mb-7   rega-login-text">
          الهيئة العامة للعقار
           </div>*/}
      </div>
    </Fragment>
  );
}

export default LoginLogoSide;
