import Link from 'next/link';

const Navbar = ({ setShowLogin, user }) => { // Accept `user` as a prop

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark custom-navbar">
            <a className="navbar-brand" href="#">
                PlantParentHood
            </a>
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
                        <a className="nav-link" href="#">
                            PlantNet
                        </a>
                    </li>
                </ul>
                {user ? ( // Check if the user is logged in
                    <span className="navbar-text">Welcome, {user.name || user.email}</span>
                ) : (
                    <button onClick={() => setShowLogin(true)} className="btn-signin">Sign In</button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
