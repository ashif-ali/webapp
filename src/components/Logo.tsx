import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Logo() {
    return (
        <Link className="navbar-brand" to="/">
            <img
                src={logo}
                alt="Logo"
                className="rounded-circle"
                width={48}
                height={48}
            />
        </Link>
    );
}

export default Logo;
