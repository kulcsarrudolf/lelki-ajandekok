import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map(({ path, element: Element }, index) => (
        <Route key={index} path={path} element={<Element />} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
