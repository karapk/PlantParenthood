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
            <Navbar variant="dark" className="navbarStyle px-3">
                <Link className="navbar-brand fw-bold text-uppercase" href="/">
                    PlantsParenthood
                </Link>
                <AuthenticatedTemplate>
                    <div className="d-flex align-items-center">
                        <Button
                            variant="outline-info"
                            onClick={handleProfileEdit}
                            className="me-2 profileButton"
                        >
                            Edit Profile
                        </Button>
                        <DropdownButton
                            variant="warning"
                            drop="start"
                            title={userName()}
                            className="profileDropdown"
                        >
                            <Dropdown.Item as="button" onClick={handleLogoutRedirect}>
                                Sign out
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <div className="ms-auto">
                        <Button
                            variant="secondary"
                            onClick={handleLoginRedirect}
                            className="signinButton"
                        >
                            Sign In
                        </Button>
                    </div>
                </UnauthenticatedTemplate>
            </Navbar>
        </>
    );
};


