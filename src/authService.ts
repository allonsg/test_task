import { PublicClientApplication } from "@azure/msal-browser";

import { msalConfig } from "./authConfig.ts";

const authService = new PublicClientApplication(msalConfig);

export const handleRedirectPromise = () => {
  return authService.handleRedirectPromise();
};

export default authService;
