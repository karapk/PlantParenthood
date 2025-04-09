import Footer from "./Footer";
import { Navigationbar } from "./NavigationBar";
import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";

const Layout = ({ children, setShowLogin, userName }) => {
    const { accounts } = useMsal();

    return (
        <div>
            <Navigationbar />
            <main>{children}</main>
            <AuthenticatedTemplate>
                <footer>
                    <center>
                        {accounts.length > 0
                            ? `You are logged in as ${accounts[0].username}`
                            : "You are logged in"}
                    </center>
                </footer>
            </AuthenticatedTemplate>
            <Footer />
        </div>
    );
};

export default Layout;
