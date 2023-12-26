import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { I18nProvider } from "../app/i18n/i18nProvider";
import { LayoutProvider, LayoutSplashScreen } from "../app/layout/core";
import { MasterInit } from "../app/layout/MasterInit";
import { AuthInit } from "./modules/auth";
import "react-circular-progressbar/dist/styles.css";
import SystemsProvider from "./providers/systems-provider";
import UserProvider from "./providers/user-provider";
import { Provider } from "react-redux";
import store from "./store/store";
const App = () => {
  const I18N_CONFIG_KEY = process.env.REACT_APP_I18N_CONFIG_KEY || "i18nConfig";
  if (localStorage.getItem("i18nConfig") == null) {
    localStorage.setItem(
      I18N_CONFIG_KEY,
      JSON.stringify({ selectedLang: "ar" })
    );
    localStorage.setItem("selectedLang", "Ar");
    window.location.reload();
  }
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Provider store={store} >
        <I18nProvider>
          <UserProvider>
            <SystemsProvider>
              <LayoutProvider>
                <AuthInit>
                  <Outlet />
                  <MasterInit />
                </AuthInit>
              </LayoutProvider>
            </SystemsProvider>
          </UserProvider>
        </I18nProvider>
      </Provider>
    </Suspense>
  );
};

export { App };
