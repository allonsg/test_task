import {useMsal} from "@azure/msal-react";

const useAuth = () => {
    const { accounts} = useMsal();

    const homeAccountId = accounts[0].homeAccountId;
    const username = accounts[0]?.idTokenClaims?.extension_username;


    return {
        isLoggedIn: Boolean(username && homeAccountId)
    };
};

export default useAuth;
