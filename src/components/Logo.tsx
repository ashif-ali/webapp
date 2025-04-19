import logo from "../assets/logo.png";

function Logo() {
    return (
        <a className="navbar-brand" href="#">
            <img
                src={logo}
                alt="Logo"
                className="rounded-circle"
                width={48}
                height={48}
            />
        </a>
    );
}

export default Logo;
