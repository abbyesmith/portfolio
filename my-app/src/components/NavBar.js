import React, {useState} from 'react';
import logo from '../images/logo.png'
import { Link} from 'react-scroll'


const NavBar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    const handleLinkClick = () => {
        setIsNavOpen(false);
    }

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="https://abbyesmith.github.io/portfolio/">
                    <img className = "logo" src={logo} alt = "logo"/>
                </a>
            <button 
                className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`}
                type="button"  
                onClick={toggleNav}
                aria-controls="navbarSupportedContent"
                aria-expanded={isNavOpen}
                aria-label="Toggle navigation" 
            >
                ☰
            </button>

                <div 
                    className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} 
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link smooth = {true} to="home" offset = {0} className="nav-link" href="#" onClick={handleLinkClick}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth = {true} to="about" offset = {-110} className="nav-link" href="#" onClick={handleLinkClick}>About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth = {true} to="skills" offset = {-110} className="nav-link" href="#" onClick={handleLinkClick}>Languages</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth = {true} to="experience" offset = {-110} className="nav-link" href="#" onClick={handleLinkClick}>Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth = {true} to="portfolio" offset = {-110} className="nav-link" href="#" onClick={handleLinkClick}>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth = {true} to="references" offset = {-110} className="nav-link" href="#" onClick={handleLinkClick}>References</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth = {true} to="contact" offset = {-70} className="nav-link" href="#" onClick={handleLinkClick}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar