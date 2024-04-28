import { lazy } from "react";

import MainLayout from "../layouts/MainLayout.tsx";
import AuthGuard from "../utils/route-guard/AuthGuard";

const OrdersPage = lazy(() => import("../pages/main/Orders.tsx"));

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: "orders",
          element: <OrdersPage />,
        },
      ],
    },
  ],
};

export default MainRoutes;
