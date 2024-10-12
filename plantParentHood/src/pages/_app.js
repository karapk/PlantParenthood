import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import '../styles/globals.css';
import LoginPopup from '../components/LoginPopup';

function MyApp({ Component, pageProps }) {
    const [showLogin, setShowLogin] = useState(false);
    const [user, setUser] = useState(null); // Manage user state here

    return (
        <>
            {showLogin && <LoginPopup setShowLogin={setShowLogin} setUser={setUser} />}  {/* Pass setUser */}
            <Layout setShowLogin={setShowLogin} user={user}> {/* Pass user and setShowLogin */}
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
