import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        // Main navigation bar
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                {/* Logo component */}
                <Logo />

                {/* Collapsible navigation links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        {/* Link to the Dashboard page */}
                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            to="/"
                        >
                            Dashboard
                        </NavLink>

                        {/* Link to the New Expense page */}
                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            to="/new"
                        >
                            New Expense
                        </NavLink>

                        {/* Link to the Reports page */}
                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            to="/reports"
                        >
                            Reports
                        </NavLink>
                    </div>
                </div>

                {/* Right-side buttons: Login and Register */}
                <div className="d-flex" role="search">
                    {/* Link to the Login page */}
                    <NavLink
                        className="btn btn-sm btn-outline-light"
                        to="/login"
                    >
                        Login
                    </NavLink>

                    {/* Link to the Register page */}
                    <NavLink
                        className="btn btn-sm btn-outline-light mx-1"
                        to="/register"
                    >
                        Register
                    </NavLink>
                    {/* Toggler button for collapsing the navbar on smaller screens */}
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
            </div>
        </nav>
    );
};

export default Navbar;
