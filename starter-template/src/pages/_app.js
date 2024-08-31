import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import '../styles/globals.css';
import LoginPopup from '../components/LoginPopup';

function MyApp({ Component, pageProps }) {
    const [showLogin, setShowLogin] = useState(false);
    
    return (
        <>
            {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
            <Layout setShowLogin={setShowLogin}>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
