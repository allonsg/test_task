import { useMsal } from "@azure/msal-react";

const Orders = () => {
  const { instance } = useMsal();
  const username =
    instance.getActiveAccount()?.idTokenClaims?.extension_username;

  return <div>Hello {username as string}</div>;
};

export default Orders;
