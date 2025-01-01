import logo from "../assets/logo.png";
import "../styles/Header.css"

const Header = () => {

    return (
        <header>
            <div className="container">
                <img src={logo} alt="logo" height="50" />

                <nav>
                    <a href="#">home</a>
                    <a href="#">about</a>
                    <a href="#">services</a>
                    <a href="#">contact</a>
                </nav>

                {/* mobile */}
                <div className="mobile">
                    <button><i className="fa-solid fa-bars"></i></button>

                    <ul className="dropdown">
                        <li><a href="#">home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">services</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;