import '../stylesheets/Header.css';
import HeaderImage from "../assets/images/NAC Image 1.png"
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img  src={HeaderImage} alt="Logo" className="logo"/>
            </Link>
            <div className="tabs-container">
                <Link exact to="/about" className="tab">
                    <div >
                        About
                    </div>
                </Link>
                <Link exact to="/board" className="tab">
                    <div >
                        Board
                    </div>
                </Link>
                <Link exact to="/resources" className="tab">
                    <div>
                        Resources
                    </div>
                </Link>
                <a href="https://www.town.northborough.ma.us/cultural-council" className="tab">
                    <div className="tab">
                        NCC
                    </div>
                </a>

            </div>
        </div>
    );
}

export default Header;
