import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MasterLayout } from "../../app/layout/MasterLayout";
import { loadRoutes } from "../services/dynamicRoutes/loadRoutes";

import { HomeWorkspace } from "../pages/home-workspace";

interface RouteDefinition {
  path: string;
  component: React.ReactNode;
}

const PrivateRoutes = () => {
  const [routes, setRoutes] = useState<RouteDefinition[]>([]);

  const fetchRoutes = async () => {
    try {
      const loadedRoutes = await loadRoutes();
      setRoutes(loadedRoutes);
    } catch (error) {
      console.error("Error loading routes:", error);
    }
  };
  useEffect(() => {
    fetchRoutes();
  }, []);

  return (
    <Routes>
    <Route element={<MasterLayout />}>
        <Route path="/home-workspace" element={<HomeWorkspace />} />
        <Route index path="/" element={<HomeWorkspace />} />

           {routes.map((route, index) => (
                     <Route
                       key={index}
                       path={route.path}
                       element={route.component}  />
                       ))}

    {/* <Route path="*" element={<Navigate to="/home-workspace" />} /> */}
    </Route>
  </Routes>
  );
};


export { PrivateRoutes };
