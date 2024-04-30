import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default AuthLayout;
