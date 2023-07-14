import React from 'react';
import logo from '../images/logo.png'
import { Link} from 'react-scroll'
// REACT FONTAWESOME IMPORT
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faBars} from '@fortawesome/react-fontawesome'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#"><img className = "logo" src={logo} alt = "logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                ☰
            </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link smooth = {true} to="home" offset = {0} className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth = {true} to="about" offset = {-110} className="nav-link" href="#">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth = {true} to="skills" offset = {-110} className="nav-link" href="#">Languages</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth = {true} to="experience" offset = {-110} className="nav-link" href="#">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth = {true} to="portfolio" offset = {-110} className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth = {true} to="references" offset = {-110} className="nav-link" href="#">References</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth = {true} to="contact" offset = {-70} className="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar