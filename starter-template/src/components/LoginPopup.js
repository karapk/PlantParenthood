import React, { useState } from 'react';
import { ImCross } from "react-icons/im";

function LoginPopup({ setShowLogin, setUser }) { // Accept setUser as a prop
    const [currState, setCurrState] = useState("Login");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = currState === 'Login' ? '/api/auth/login' : '/api/auth/register';
        const data = currState === 'Login' ? { email, password } : { email, password, name };

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (response.ok) {
                setSuccess(currState === 'Login' ? "Login successful!" : "Registration successful!");
                setError('');
                setUser(result.user || { email }); // Set the user information
                setTimeout(() => {
                    setShowLogin(false);
                }, 2000);
            } else {
                setError(result.error);
                setSuccess('');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
            setSuccess('');
        }
    };

    return (
        <div className="login-popup">
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <ImCross onClick={() => setShowLogin(false)} className="close-icon" />
                </div>
                <div className="login-popup-inputs">
                    {currState === 'Sign Up' && <input type="text" placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} required />}
                    <input type="email" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button>{currState === 'Sign Up' ? "Create Account" : "Login"}</button>

                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}  {/* Display success message */}

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use and privacy policy.</p>
                </div>
                {currState === 'Login' ? (
                    <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                )}
            </form>
        </div>
    );
}

export default LoginPopup;
