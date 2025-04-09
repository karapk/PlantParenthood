/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from '@azure/msal-browser';

/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
    names: {
        // signUpSignIn: 'B2C_1_SignUpIn',
        signUpSignIn: 'B2C_1_signupsignin1', 
        // forgotPassword: 'B2C_1_TRS_Password_Reset',
        editProfile: 'B2C_1_profileediting0',
    },
    authorities: {
        signUpSignIn: {
            authority: 'https://plantsparenthood.b2clogin.com/plantsparenthood.onmicrosoft.com/B2C_1_signupsignin1',
        },
        // forgotPassword: {
            // authority: 'https://plantsparenthood.b2clogin.com/plantsparenthood.onmicrosoft.com/B2C_1_Reset',
        // },
        editProfile: {
            authority: 'https://plantsparenthood.b2clogin.com/plantsparenthood.onmicrosoft.com/B2C_1_profileediting0'
        },
    },
    // authorityDomain: 'https://uvokmigration.b2clogin.com/uvokmigration.onmicrosoft.com'
    authorityDomain: 'https://plantsparenthood.b2clogin.com/plantsparenthood.onmicrosoft.com'
};

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig = {
    auth: {
        clientId: '70931e45-d01c-44de-a982-58ad962eddcd',
        // clientId: 'add67e8f-1b71-4566-a5b4-28e2f3c7679f', // Verify OK web from Ryan Hoegg Azure AD B2C
        authority: b2cPolicies.authorities.signUpSignIn.authority, // Choose SUSI as your default authority.
        knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
        redirectUri: '/', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
        postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache: {
        cacheLocation: 'localStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};


/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: [],
};


/**
 * An optional silentRequest object can be used to achieve silent SSO
 * between applications by providing a "login_hint" property.
 */
export const silentRequest = {
    scopes: ["openid", "profile"],
    loginHint: "example@domain.net"
};