import { Navigate, useRoutes } from "react-router-dom";

import AuthRoutes from "./AuthRoutes.tsx";
import MainRoutes from "./MainRoutes.tsx";

const Routes = () => {
  return useRoutes([
    AuthRoutes,
    MainRoutes,
    { path: "*", element: <Navigate to="/orders" /> },
  ]);
};

export default Routes;
