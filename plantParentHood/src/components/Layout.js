import Footer from "./Footer";
import {Navigationbar} from "./NavigationBar";

const Layout = ({ children, setShowLogin, userName }) => {  
    return (
        <div>
            <Navigationbar  /> 
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
