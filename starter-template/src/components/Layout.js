
import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = ({ children, setShowLogin }) => {
    return (
        <div>
            <Navbar setShowLogin={setShowLogin} />
            <main>{children}</main>
            <Footer />
        </div>
        
)};

export default Layout;
