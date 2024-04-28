import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {AccountInfo, EventType, PublicClientApplication} from "@azure/msal-browser";
import {msalConfig} from "./authConfig.ts";
import {MsalProvider} from "@azure/msal-react";
import {BrowserRouter} from "react-router-dom";

export const msalInstance = new PublicClientApplication(msalConfig);

if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

msalInstance.addEventCallback((event) => {
    if (
        (event.eventType === EventType.LOGIN_SUCCESS ||
            event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
            event.eventType === EventType.SSO_SILENT_SUCCESS) &&
        event.payload
    ) {
        const payload = event.payload as { account: AccountInfo };
        if (payload.account) {
            msalInstance.setActiveAccount(payload.account);
        }
    }
});


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <MsalProvider instance={msalInstance}>
                <App/>
            </MsalProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
