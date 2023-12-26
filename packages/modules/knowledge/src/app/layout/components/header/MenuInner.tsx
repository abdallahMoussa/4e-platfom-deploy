import clsx from "clsx";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { WorkspaceDropdown } from "./WorkspaceDropdown";
import { InnerGateDropdown } from "./InnerGateDropdown";
import { useState } from "react";
import { KTSVG } from "../../../helpers";

const toolbarButtonMarginClass = "ms-1 ms-lg-3",
  toolbarButtonHeightClass = "w-30px h-30px w-md-40px h-md-40px",
  toolbarUserAvatarHeightClass = "symbol-30px symbol-md-40px",
  toolbarButtonIconSizeClass = "svg-icon-1";

type MenuProps = {
  show?: any;
};
export function MenuInner<MenuProps>({ show }) {
  const intl = useIntl();

  return (
    <>
      {/*<MenuItem title={intl.formatMessage({ id: "Home" })} to='/home-workspace' />
      <MenuItem title={intl.formatMessage({ id: "Workspace" })} to='/knowledge-workspace' />*/}

      <div className="menu-item me-lg-1">
        <Link to={{ pathname: "/home-workspace" }} className="menu-link py-3">
          <span className="menu-title">
            {intl.formatMessage({ id: "Home" })}
          </span>
        </Link>
      </div>

      <div
        className={clsx(
          `menu-item-special me-lg-1 ${show ? "d-block" : "d-none"}`
        )}
      >
        {/* begin::Menu wrapper */}
        <a
          className={clsx("menu-link py-3")}
          data-kt-menu-trigger={show ? "click" : ""}
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="bottom"
        >
          <span className="menu-title">
            {intl.formatMessage({ id: "Systems" })}
          </span>
        </a>
        <WorkspaceDropdown />
        {/* end::Menu wrapper */}
      </div>

      <div className="menu-item me-lg-1">
        <Link
          to={{ pathname: "/dynamic-workspace" }}
          className="menu-link py-3"
        >
          <span className="menu-title">
            {intl.formatMessage({ id: "Workspace" })}
          </span>
        </Link>
      </div>
      <div className="menu-item me-lg-1">
        <Link to={{ pathname: "/tasks-details" }} className="menu-link py-3">
          <span className="menu-title">
            {intl.formatMessage({ id: "Tasks" })}
          </span>
        </Link>
      </div>
      <div className="menu-item me-lg-1">
        <Link to={{ pathname: "/agenda-details" }} className="menu-link py-3">
          <span className="menu-title">
            {intl.formatMessage({ id: "Agenda" })}
          </span>
        </Link>
      </div>
      <div className="menu-item me-lg-1 d-lg-none d-md-none d-sm-none d-block d-flex gap-3">
         {/* Services and Tools */}
         <div
          className={clsx(
            "d-flex align-items-center",
            toolbarButtonMarginClass
          )}
        >
          <div
            className={clsx(
              "btn btn-icon btn-active-light-primary btn-custom",
              toolbarButtonHeightClass
            )}
            id="kt_tools_box_toggle"
          >
            <KTSVG
              path="/media/icons/duotune/general/system-tools.svg"
              className={toolbarButtonIconSizeClass}
            />
            
          </div>
        </div>

        {/* My Favorite */}
        <div
          className={clsx(
            "d-flex align-items-center d-lg-block",
            toolbarButtonMarginClass
          )}
        >
          <div
            className={clsx(
              "btn btn-icon btn-active-light-primary btn-custom",
              toolbarButtonHeightClass
            )}
            id="kt_my_favorite_toggle"
          >
            <KTSVG
              path="/media/icons/duotune/general/gen061.svg"
              className={toolbarButtonIconSizeClass}
            />
          </div>
        </div>

        {/* CHAT*/}
        <div
          className={clsx(
            "d-flex align-items-center",
            toolbarButtonMarginClass
          )}
        >
          <div
            className={clsx(
              "btn btn-icon btn-active-light-primary btn-custom position-relative",
              toolbarButtonHeightClass
            )}
            id="kt_drawer_chat_toggle"
          >
            <KTSVG
              path="/media/icons/duotune/communication/com012.svg"
              className={toolbarButtonIconSizeClass}
            />

            <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
          </div>
        </div>
      </div>
      {/* <div className={clsx('menu-item-special me-lg-1')}>
        <a
          className={clsx('menu-link py-3')}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='bottom'>
          <span className="menu-title">{intl.formatMessage({ id: "InnerGate" })}</span>
        </a>
        <InnerGateDropdown />
      </div>*/}
    </>
  );
}
