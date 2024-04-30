import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header.tsx";

const MainLayout = () => {
  return (
    <main>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MainLayout;
