import { useMsal } from "@azure/msal-react";

const Home = () => {
  const { instance } = useMsal();

  const handleLogoutRedirect = async () => {
    try {
      await instance.logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      This is the home page.
      <button
        onClick={handleLogoutRedirect}
        className="transform rounded-lg bg-blue-500 px-8 py-4 font-bold text-white transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Login
      </button>
    </div>
  );
};

export default Home;
