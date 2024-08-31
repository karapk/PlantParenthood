import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, setShowLogin, user }) => {  // Accept `user` as a prop
    return (
        <div>
            <Navbar setShowLogin={setShowLogin} user={user} />  {/* Pass `user` to Navbar */}
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
