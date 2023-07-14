import React from "react";
import Typed from "react-typed";
import { Link} from 'react-scroll'


const Header = () => {
    return(
        <div id = "home" className="header-wraper">
            <div className="main-info">
                <h1>Abby Smith</h1>
                <h2>full-stack web developer</h2>
                <Typed
                    className="typed-text"
                    strings={["JavaScript", "React", "Python", "Flask", "CSS"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <button className="btn-main-offer">
                <Link smooth = {true} to="contact" offset = {-70} className="nav-link" href="#">Contact Me</Link>
                </button>

            </div>
        </div>
    )
}

export default Header