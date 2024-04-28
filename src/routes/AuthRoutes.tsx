import { lazy } from "react";

import AuthLayout from "../layouts/AuthLayout.tsx";
import GuestGuard from "../utils/route-guard/GuestGuard";

const WelcomePage = lazy(() => import("../pages/auth/Welcome"));

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
          element: <WelcomePage />,
        },
      ],
    },
  ],
};

export default AuthRoutes;
