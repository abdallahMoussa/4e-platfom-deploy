/* eslint-disable react-hooks/exhaustive-deps */
import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { useLayout } from "../../core";
import { Header } from "./Header";
import { DefaultTitle } from "./page-title/DefaultTitle";
import { Topbar } from "./Topbar";
import { useIntl } from "react-intl";

export function HeaderWrapper() {
  const intl = useIntl();

  const { config, classes, attributes } = useLayout();
  const { header, aside } = config;

  const [show, setShow] = useState(false);

  return (
    <div
      id="kt_header"
      className={clsx(
        "header",
        classes.header.join(" "),
        "align-items-stretch"
      )}
      data-kt-sticky="true"
      data-kt-sticky-name="header"
      data-kt-sticky-offset="{default: '200px', lg: '300px'}"
      {...attributes.headerMenu}
    >
      {/* <div className={clsx(classes.headerContainer.join(' '), 'd-flex align-items-center')}> */}
      <div className="container-xxl d-flex align-items-center">
        {/* begin::Aside mobile toggle */}
        {aside.display && (
          <div
            className="d-flex align-items-center d-lg-none ms-n3 me-1"
            title="Show aside menu"
          >
            <div
              className="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px"
              id="kt_aside_mobile_toggle"
            >
              <KTSVG
                path="/media/icons/duotune/abstract/abs015.svg"
                className="svg-icon-2x mt-1"
              />
            </div>
          </div>
        )}
        {/* end::Aside mobile toggle */}

        <div
          className="d-flex topbar align-items-center d-lg-none ms-n2 me-3"
          title="Show aside menu"
        >
          <div
            className="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px"
            id="kt_header_menu_mobile_toggle"
          >
            <KTSVG
              path="/media/icons/duotune/abstract/abs015.svg"
              className="svg-icon-2x"
            />
          </div>
        </div>

        <div className="header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0">
          <Link to="/home-workspace">
            {intl.locale == "ar" ? (
              <>
                <img
                  alt="Logo"
                  src={toAbsoluteUrl("/media/theme-img/logo-header-wt-ar.png")}
                  className="logo-default h-lg-50px h-md-50px h-sm-50px h-35px"
                />
                <img
                  alt="Logo"
                  src={toAbsoluteUrl("/media/theme-img/logo-header-col-ar.png")}
                  className="logo-sticky h-lg-50px h-md-50px h-sm-50px h-35px"
                />
              </>
            ) : (
              <>
                <img
                  alt="Logo"
                  src={toAbsoluteUrl("/media/theme-img/logo-header-wt-en.png")}
                  className="logo-default h-50px"
                />
                <img
                  alt="Logo"
                  src={toAbsoluteUrl("/media/theme-img/logo-header-col-en.png")}
                  className="logo-sticky h-50px"
                />
              </>
            )}
          </Link>
        </div>

        {/* begin::Wrapper */}
        <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
          {/* begin::Navbar */}
          {header.left === "menu" && (
            <div className="d-flex align-items-stretch" id="kt_header_nav">
              <Header show={show} />
            </div>
          )}

          {header.left === "page-title" && (
            <div className="d-flex align-items-center" id="kt_header_nav">
              <DefaultTitle />
            </div>
          )}

          <div className="d-flex align-items-stretch flex-shrink-0">
            <Topbar show={show} handleShow={() => setShow(!show)} />
          </div>
        </div>
        {/* end::Wrapper */}
      </div>
    </div>
  );
}
