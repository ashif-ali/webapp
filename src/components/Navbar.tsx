import { FaBars } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Logo />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">
                            Home
                        </a>
                        <a className="nav-item nav-link" href="#">
                            Features
                        </a>
                        <a className="nav-item nav-link" href="#">
                            Pricing
                        </a>
                        <a className="nav-item nav-link" href="#">
                            Disabled
                        </a>
                    </div>
                </div>
            </div>
            <div className="d-flex" role="search">
                <button className="btn stn-sm btn-outline-light">Login</button>
                <button className="btn stn-sm btn-outline-light mx-1">
                    Logout
                </button>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <FaBars color="white" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
