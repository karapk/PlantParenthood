import Footer from "./Footer";
import {Navigationbar} from "./NavigationBar";

const Layout = ({ children, setShowLogin, user }) => {  
    return (
        <div>
            <Navigationbar setShowLogin={setShowLogin} user={user} /> 
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
