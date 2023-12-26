import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import ErrorBoundary from '../services/handleErrors/ErrorBoundary';
import { loadRoutes } from '../services/dynamicRoutes/loadRoutes';
import Nav from '../components/Nav';

interface RouteDefinition {
  path: string;
  component: React.ReactNode;
}


const GatewayRoutes: React.FC = () => {
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
    <ErrorBoundary>
      <Router>
         <Nav />            
         <Routes>
           <Route path="/" element={<Home/>} />
           {routes.map((route, index) => (
                     <Route
                       key={index}
                       path={route.path}
                       element={route.component}  />
                       ))}

           <Route path="*" element={<Home/>} />
          </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default GatewayRoutes;
