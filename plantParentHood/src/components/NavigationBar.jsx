import Link from 'next/link';
import {AuthenticatedTemplate, UnauthenticatedTemplate, useMsal} from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest, b2cPolicies } from '../authConfig';
import {Nav, Navbar, Dropdown, DropdownButton, Button} from 'react-bootstrap';


export const Navigationbar = () => { // Accept `user` as a prop
    const { instance, inProgress } = useMsal();
    let activeAccount;

    if(instance) {
        console.log("Setting Active Account:", instance.getActiveAccount() );
        activeAccount = instance.getActiveAccount();
    }

    const handleLoginRedirect = () => {
        instance.loginRedirect(loginRequest).catch((error) => console.log(error));
    };
    const handleLogoutRedirect = () => {
        instance.logoutRedirect().catch((error) => console.log(error));
    };
    const handleProfileEdit = () => {
        if (inProgress === InteractionStatus.None) {
            instance.acquireTokenRedirect(b2cPolicies.authorities.editProfile);
    }
};
    const userName = () => {
        console.log('Active Account', activeAccount);
        if (activeAccount) {
            if (activeAccount.username){
                return activeAccount.username;
            } else if (activeAccount.name) {
                return activeAccount.name;
            } else {
                return 'Guest';
            }
        }
    };
    return (
        <>
            <Navbar  variant="dark" className="navbarStyle">
                <Link className="navbar-brand" href="/">
                   plantsparenthood
                </Link>
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
                <UnauthenticatedTemplate>
                    <div className="collapse navbar-collapse justify-content-end">
                        <DropdownButton variant="secondary" className="ml-auto" drop="start" title="Sign In">
                            <Dropdown.Item as="button" onClick={handleLoginRedirect}>
                                Sign in using Redirect
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                </UnauthenticatedTemplate>
            </Navbar>
        </>
    );
};


