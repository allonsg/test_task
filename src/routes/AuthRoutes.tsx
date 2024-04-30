import { lazy } from "react";

import AuthLayout from "../layouts/AuthLayout.tsx";
import GuestGuard from "../utils/route-guard/GuestGuard";

const LoginPage = lazy(() => import("../pages/auth/Login.tsx"));

const AuthRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <GuestGuard>
          <AuthLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: "auth",
          element: <LoginPage />,
        },
      ],
    },
  ],
};

export default AuthRoutes;
