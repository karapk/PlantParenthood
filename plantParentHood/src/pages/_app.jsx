import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import { MsalProvider, useMsal } from '@azure/msal-react';
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { msalConfig, b2cPolicies } from '../authConfig';
import { compareIssuingPolicy } from '../utils/claimUtils';
import Layout from '../components/Layout';

const msalInstance = new PublicClientApplication(msalConfig);

const Pages = () => {
    const { instance } = useMsal();

    useEffect(() => {
        const callbackId = instance.addEventCallback((event) => {
            console.log('MSAL Event:', event);
            console.log('MSAL Event Payload:', event.eventType);
            if (
                (event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) &&
                event.payload.account
            ) {
                {
                    console.log("Setting Active Account:", event.payload.account);
                    instance.setActiveAccount(event.payload.account); // Set the active account
                }
                // Handle profile edit flow
                if (event.payload.idTokenClaims['tfp'] === b2cPolicies.names.editProfile) {
                    // const originalSignInAccount = instance
                    //     .getAllAccounts()
                    //     .find(
                    //         (account) =>
                    //             account.idTokenClaims.oid === event.payload.idTokenClaims.oid &&
                    //             account.idTokenClaims.sub === event.payload.idTokenClaims.sub &&
                    //             account.idTokenClaims['tfp'] === b2cPolicies.names.signUpSignIn
                    //     );

                    const signUpSignInFlowRequest = {
                        authority: b2cPolicies.authorities.signUpSignIn.authority,
                        account: originalSignInAccount,
                    };

                    instance.ssoSilent(signUpSignInFlowRequest);
                }

                // Handle forgot password flow
                // if (compareIssuingPolicy(event.payload.idTokenClaims, b2cPolicies.names.forgotPassword)) {
                //     const signUpSignInFlowRequest = {
                //         authority: b2cPolicies.authorities.signUpSignIn.authority,
                //     };
                //     instance.loginRedirect(signUpSignInFlowRequest);
                // }
            }

            // if (event.eventType === EventType.LOGIN_FAILURE) {
            //     if (event.error && event.error.errorMessage.includes('AADB2C90118')) {
            //         const resetPasswordRequest = {
            //             authority: b2cPolicies.authorities.forgotPassword.authority,
            //             scopes: [],
            //         };
            //         instance.loginRedirect(resetPasswordRequest);
            //     }
            // }
        });

        return () => {
            if (callbackId) {
                instance.removeEventCallback(callbackId);
            }
        };
    }, [instance]);

    return null;
};

const App = ({ Component, pageProps }) => {

    return (
        <MsalProvider instance={msalInstance}>
            <Layout>
                <Pages />
                <Component {...pageProps} />
            </Layout>
        </MsalProvider>
    );
};

export default App;
