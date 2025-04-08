import Link from 'next/link';
import {AuthenticatedTemplate, UnauthenticatedTemplate, useMsal} from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest } from '../authConfig';
import {Nav, Navbar, Dropdown, DropdownButton, Button} from 'react-bootstrap';

export const Navigationbar = ({ setShowLogin, user }) => { // Accept `user` as a prop
    const { instance, inProgress } = useMsal();
    let activeAccount;

    if(instance) {
        activeAccount = instance.getActiveAccount();
    }

    const handleLoginRedirect = () => {
        instance.loginRedirect(loginRequest).catch((error) => console.log(error));
    };
    const handleLogoutRedirect = () => {
        instance.loginRedirect(loginRequest).catch((error) => console.log(error));
    };
    const handleProfileEdit = () => {
        if (inProgress === InteractionStatus.None) {
            instance.acquireTokenRedirect(b2cPolicies.authotities.editProfile);
    }
};
    const userName = () => {
        if (activeAccount) {
            if (activeAccount.username){
                return activeAccount.username;
            } else if (activeAccount.name) {
                return activeAccount.name;
            } else {
                return 'User Uknown';
            }
        }
    };
    return (
        <Navbar className="navbar navbar-expand-md navbar-dark fixed-top bg-dark custom-navbar">
           <Link className="navbar-brand nav-link" href="/">
                PlantParentHood
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" href="/">
                            Home <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/aboutUs">
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="/plantnet">
                            PlantNet
                        </Link>
                    </li>
                </ul>
                {user ? ( // Check if the user is logged in
                    <span className="navbar-text">Welcome, {user.name || user.email}</span>
                ) : (
                    <button onClick={() => setShowLogin(true)} className="btn-signin">Sign In</button>
                )}
            </div>
            <AuthenticatedTemplate>
                    <Nav.Link className="navbarButton" href="/">
                        Home
                    </Nav.Link>
                    <div className="collapse navbar-collapse justify-content-end">
                        <Button variant="info" onClick={handleProfileEdit} className="profileButton">
                            Edit Profile
                        </Button>

                        <DropdownButton
                            variant="warning"
                            drop="start"
                            title={userName()}
                        >
                            <Dropdown.Item as="button" onClick={handleLogoutRedirect}>
                                Sign out using Redirect
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                </AuthenticatedTemplate>
        </Navbar>
    );
};


