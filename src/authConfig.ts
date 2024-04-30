import { AZURE_APP_CLIENT_ID } from "./constants.ts";

export const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_susi",
  },
  authorities: {
    signUpSignIn: {
      authority: "https://ryag.b2clogin.com/ryag.onmicrosoft.com/b2c_1_susi",
    },
  },
  authorityDomain: "ryag.b2clogin.com",
};

export const msalConfig = {
  auth: {
    clientId: AZURE_APP_CLIENT_ID!,
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    // redirectUri: "http://localhost:5173/home",
    redirectUri: "http://localhost:5173/auth/callback",
    postLogoutRedirectUri: "http://localhost:5173/auth",
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["openid", "email", "profile"],
};

export const silentRequest = {
  scopes: ["openid", "profile"],
  loginHint: "example@domain.net",
};
