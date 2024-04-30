import { useMsal } from "@azure/msal-react";

import { loginRequest } from "../../authConfig.ts";

const Login = () => {
  const { instance } = useMsal();

  const handleLoginRedirect = async () => {
    try {
      await instance.loginPopup(loginRequest);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <button onClick={handleLoginRedirect} className="buttonLight">
        Login
      </button>
    </div>
  );
};

export default Login;
