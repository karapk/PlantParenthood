import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import { MsalProvider, useMsal } from '@azure/msal-react';
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { msalConfig, b2cPolicies } from '../authConfig';
import Layout from '../components/Layout';


const msalInstance = new PublicClientApplication(msalConfig);

const Pages = () => {
    const { instance } = useMsal();

    useEffect(() => {
        const callbackId = instance.addEventCallback((event) => {
            console.log('MSAL Event:', event);
            if (
                (event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) &&
                event.payload.account
            ) {
                instance.setActiveAccount(event.payload.account);

                if (event.payload.idTokenClaims['tfp'] === b2cPolicies.names.editProfile) {
                    const signUpSignInFlowRequest = {
                        authority: b2cPolicies.authorities.signUpSignIn.authority,
                        account: instance.getActiveAccount(),
                    };

                    instance.ssoSilent(signUpSignInFlowRequest).catch((error) => {
                        console.error('SSO Silent Error:', error);
                    });
                }

                if (compareIssuingPolicy(event.payload.idTokenClaims, b2cPolicies.names.forgotPassword)) {
                    const signUpSignInFlowRequest = {
                        authority: b2cPolicies.authorities.signUpSignIn.authority,
                    };
                    instance.loginRedirect(signUpSignInFlowRequest).catch((error) => {
                        console.error('Login Redirect Error:', error);
                    });
                }
            }
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
    const [isMsalInitialized, setIsMsalInitialized] = useState(false);

    useEffect(() => {
        const initializeMsal = async () => {
            try {
                await msalInstance.initialize(); // Initialize the MSAL instance
                setIsMsalInitialized(true);
            } catch (error) {
                console.error('MSAL Initialization Error:', error);
            }
        };

        initializeMsal();
    }, []);

    if (!isMsalInitialized) {
        return <div>Loading...</div>; // Show a loading state until MSAL is initialized
    }

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