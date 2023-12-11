// import { modules } from "../../../modules";

export const loadRoutes = async () => {
  let routes = [];

  try {
    const { CpanelRoutes } = await import("@4eplatform/cpanel");
    const route = { component: <CpanelRoutes />, path: "/cpanel/*" };

    routes = routes.concat(route);
  } catch (error) {
    console.error("Error loading CpanelRoutes:", error);
  }

  try {
    const { UsersRoutes } = await import("@4eplatform/users");
    const route = { component: <UsersRoutes />, path: "/users/*" };

    routes = routes.concat(route);
  } catch (error) {
    console.error("Error loading UsersRoutes:", error);
  }

  try {
    const { TasksRoutes } = await import("@4eplatform/tasks");
    const route = { component: <TasksRoutes />, path: "/tasks/*" };

    routes = routes.concat(route);
  } catch (error) {
    console.error("Error loading TasksRoutes:", error);
  }

  return routes;

  // for (var module of modules) {
  //   try {
  //     var { default: ModuleRoutes } = await import(module.name);

  //     var route = { component: <ModuleRoutes />, path: module.path };
  //     routes.push(route);
  //   } catch (error) {
  //     console.error(`Error loading ModuleRoutes from ${module.name}:`, error);
  //   }
  // }
};
