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
      <button
        onClick={handleLoginRedirect}
        className="transform rounded-lg bg-blue-500 px-8 py-4 font-bold text-white transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
