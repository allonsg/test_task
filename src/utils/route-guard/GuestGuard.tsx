import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth.tsx";

interface GuardProps {
  children: ReactNode;
}

const GuestGuard = ({ children }: GuardProps) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn && location.pathname === "/") {
      navigate("/auth", {
        state: {
          from: location.pathname,
        },
        replace: true,
      });
    }

    if (isLoggedIn) {
      navigate(location?.state?.from ? location?.state?.from : "/home", {
        state: {
          from: "",
        },
        replace: true,
      });
    }
  }, [isLoggedIn, navigate, location]);

  return children;
};

export default GuestGuard;
