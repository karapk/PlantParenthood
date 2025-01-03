import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, setShowLogin, user }) => {  
    return (
        <div>
            <Navbar setShowLogin={setShowLogin} user={user} /> 
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
