export const loadRoutes = async () => {
  let routes = [];

  // add your import here

  // try {
  //    const {component name that you "import & export" it in your module index.tsx file} = await import('module package name);
  //    const route = { component: <component name />, path: "/path of module(same module name if not given)" };
  //    routes = routes.concat(route);
  // } catch (error) {
  //    console.error("Error loading Module Name:", error);
  // }

  try {
    let { CpanelUsers } = await import(
      "@4eplatform/controlpanel-usermanagement"
    );
    let route = {
      component: <CpanelUsers />,
      path: "/admin-panel-users-workspace/*",
    };
    routes = routes.concat(route);
  } catch (error) {
    console.error("Error loading CpanelUsers:", error);
  }

  try {
    let { UserProfile } = await import(
      "@4eplatform/user-profile"
    );
    let route = {
      component: <UserProfile />,
      path: "/user-profile/*",
    };
    routes = routes.concat(route);
  } catch (error) {
    console.error("Error loading UserProfile:", error);
  }

  try {
    let { Orghierarchies } = await import(
      "@4eplatform/controlpanel-orghierarchies"
    );
    let route = {
      component: <Orghierarchies />,
      path: "/admin-panel-hierararchy/*",
    };
    routes = routes.concat(route);
  } catch (error) {
    console.error("Error loading Orghierarchies:", error);
  }

  try {
    let { Settings } = await import("@4eplatform/platform-settings");
    let route = {
      component: <Settings />,
      path: "/adminPanel/platform-settings/*", //incorrect path
    };
    routes = routes.concat(route);
  } catch (error) {
    console.error("Error loading platformsettings:", error);
  }

  try {
    let { ControlPanelWorkspace } = await import(
      "@4eplatform/control-panel-workspace"
    );
    let route = {
      component: <ControlPanelWorkspace />,
      path: "/admin-panel-workspace/*",
    };
    routes = routes.concat(route);
  } catch (error) {
    console.error("Error loading CpanelUsers:", error);
  }

  try {
    let { ControlPanelServicesSettings } = await import(
      "@4eplatform/control-panel-services-settings"
    );
    let route = {
      component: <ControlPanelServicesSettings />,
      path: "/systems-services-settings/*",
    };
    routes = routes.concat(route);
  } catch (error) {
    console.error("Error loading CpanelUsers:", error);
  }

  try {
    let { TechnicalSupport } = await import("@4eplatform/technical-support");
    let route = {
      component: <TechnicalSupport />,
      path: "/*",
    };
    routes = routes.concat(route);
  } catch (error) {
    console.error("Error loading CpanelUsers:", error);
  }

  // try {
  //   let { Knowledge } = await import("@4eplatform/knowledge");
  //   let route = {
  //     component: <Knowledge />,
  //     path: "/*",
  //   };
  //   routes = routes.concat(route);
  // } catch (error) {
  //   console.error("Error loading CpanelUsers:", error);
  // }

  return routes;
};
