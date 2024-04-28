import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth.tsx";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth", {
        state: {
          from: location.pathname,
        },
        replace: true,
      });
    }
  }, [isLoggedIn, navigate, location]);

  return children;
};

export default AuthGuard;
