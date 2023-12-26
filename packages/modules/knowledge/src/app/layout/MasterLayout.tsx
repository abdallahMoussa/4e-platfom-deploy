import React, { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AsideDefault } from "./components/aside/AsideDefault";
import { Footer } from "./components/Footer";
import { HeaderWrapper } from "./components/header/HeaderWrapper";
import { ScrollTop } from "./components/ScrollTop";
import { Content } from "./components/Content";
import { PageDataProvider, useLayout } from "./core";
import { useLocation } from "react-router-dom";
import {
  DrawerMessenger,
  ActivityDrawer,
  Main,
  InviteUsers,
  UpgradePlan,
} from "../partials";
import { MenuComponent } from "../../app/assets/ts/components";
import { useLang } from "../i18n/Metronici18n";

interface Iprop {
  children?: React.ReactNode;
}

const MasterLayout: React.FC<Iprop> = ({ children }) => {
  const { classes } = useLayout();

  const location = useLocation();
  const lang = useLang();

  useEffect(() => {
    if (lang === "ar") {
      require("../assets/sass/core/layout/ar/_base_ar.scss");
      require("../assets/sass/core/layout/Theme/_theme_style.scss");
      // @ts-ignore
      // import("../assets/sass/core/layout/ar/_base_ar.scss");
    } else if (lang === "en") {
      require("../assets/sass/core/layout/Theme/_theme_style.scss");
    }

    setTimeout(() => {
      MenuComponent.reinitialization();
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization();
    }, 500);
  }, [location.key]);

  return (
    <Fragment>
      <PageDataProvider>
        <div className="page d-flex flex-row flex-column-fluid">
          <div
            className="wrapper d-flex flex-column flex-row-fluid"
            id="kt_wrapper"
          >
            <HeaderWrapper />
            <Content>
              <div id="kt_content " className="content flex-row-fluid p-0">
                <Outlet />
              </div>
            </Content>
            <Footer />
          </div>
        </div>

        {/* begin:: Drawers 
        <ActivityDrawer />
        <DrawerMessenger />
        {/* end:: Drawers */}

        {/* begin:: Modals
        <Main />
        <InviteUsers />
        <UpgradePlan /> */}
        <ScrollTop />
      </PageDataProvider>
    </Fragment>
  );
};

export { MasterLayout };
