// import {useMsal} from "@azure/msal-react";
// import {loginRequest} from "./authConfig.ts";
import Routes from "./routes";

const App = () => {
  // const {instance, accounts} = useMsal();
  //
  // const handleLoginRedirect = async () => {
  //     try {
  //         await instance.loginPopup(loginRequest);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // };
  //
  // const handleLogoutRedirect = async () => {
  //     try {
  //         await instance.logout();
  //     } catch (error) {
  //         console.log(error);
  //     }
  //
  // };
  //
  // const username = instance.getActiveAccount()?.idTokenClaims?.extension_username;
  return <Routes />;
  // return (
  //   <>
  //     {/*<div>Hello {username as string}</div>*/}
  //     {/*<div className="flex flex-col gap-[1rem] w-fit">*/}
  //     {/*    <button onClick={handleLoginRedirect} className="bg-gray-500 rounded-md p-2">Login</button>*/}
  //     {/*    <button onClick={handleLogoutRedirect} className="bg-gray-500 rounded-md p-2">Logout</button>*/}
  //     {/*</div>*/}
  //   </>
  // );
};

export default App;
