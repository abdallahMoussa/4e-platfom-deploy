import clsx from "clsx";
import React, { FC, useState } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import {
  HeaderNotificationsMenu,
  HeaderUserMenu,
  ModeDropdown,
  Search,
} from "../../../partials";
import { useToolbar } from "../../core/ToolbarProvider";

const toolbarButtonMarginClass = "ms-1 ms-lg-3",
  toolbarButtonHeightClass = "w-30px h-30px w-md-40px h-md-40px",
  toolbarUserAvatarHeightClass = "symbol-30px symbol-md-40px",
  toolbarButtonIconSizeClass = "svg-icon-1";

type MenuProps = {
  show?: any;
  handleShow?: any;
};
const Topbar: FC<MenuProps> = ({ show, handleShow }) => {

  const { setShowToolBox, setShowMyFavorite } = useToolbar();

  return (
    <div className="d-flex align-items-stretch flex-shrink-0">
      <div className="topbar d-flex align-items-stretch flex-shrink-0">
        {/* Search */}
        <div
          className={clsx(
            "d-flex align-items-stretch",
            toolbarButtonMarginClass
          )}
        >
          <Search />
        </div>
        {/* NOTIFICATIONS */}
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
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="bottom"
          >
            <KTSVG
              path="/media/icons/duotune/general/gen060.svg"
              className={toolbarButtonIconSizeClass}
            />
          </div>
          <HeaderNotificationsMenu />
        </div>

        {/* Services and Tools */}
        <div
          className={clsx(
            "d-flex align-items-center d-lg-block d-md-block d-sm-block d-none",
            toolbarButtonMarginClass
          )}
          onClick = {() => setShowToolBox(true)}
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
            "d-flex align-items-center d-lg-block d-md-block d-sm-block d-none",
            toolbarButtonMarginClass
          )}
          onClick = {() => setShowMyFavorite(true)}
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
            "d-flex align-items-center d-lg-block d-md-block d-sm-block d-none",
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

        {/* light and dark */}
        <div
          className={clsx(
            "d-flex align-items-center",
            toolbarButtonMarginClass
          )}
        >
          {/* begin::Menu wrapper */}
          <div
            className={clsx(
              "btn btn-icon btn-active-light-primary btn-custom",
              toolbarButtonHeightClass
            )}
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="bottom"
          >
            <KTSVG path="/media/icons/duotune/general/gen063.svg" />
            <KTSVG path="/media/icons/duotune/general/gen062.svg" />
          </div>
          <ModeDropdown />
          {/* end::Menu wrapper */}
        </div>

        {/* begin::User */}
        <div
          className={clsx(
            "d-flex align-items-center",
            toolbarButtonMarginClass
          )}
          id="kt_header_user_menu_toggle"
        >
          {/* begin::Toggle */}
          <div
            className={clsx(
              "cursor-pointer symbol",
              toolbarUserAvatarHeightClass
            )}
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="bottom"
          >
            <img
              className="h-30px w-30px rounded"
              src={toAbsoluteUrl("/media/avatars/300-3.jpg")}
              alt="4e Workspace"
            />
          </div>
          <HeaderUserMenu show={show} handleShow={handleShow} />
          {/* end::Toggle */}
        </div>
        {/* end::User */}
      </div>
    </div>
  );
};

export { Topbar };
