import React from "react";
import "./navbar.css";
import Logo from "./images/logo.png";

import { useState } from "react";

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#home" id="navbar-logo-text" className="home-navbar leftmost" >Landify</a>
            </div>
            <div className={!open ? "hamburger-menu" : "hamburger-menu is-active"} onClick={() => {
                setOpen((prev) => !prev)
            }}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={!open ? "navbar-menu" : "navbar-menu active"}>
                <li className="menu-items" id="about-page">
                    <a href="#home" className="menu-link" id="about-page">About</a>
                </li>
                <li className="menu-items" id="about-page">
                    <a href="#services" className="menu-link" id="services-page">Services</a>
                </li>
                <li className="menu-items" id="about-page">
                    <a href="#blog" className="menu-link" id="blog-page">Blog</a>
                </li>
                <li className="menu-items" id="about-page">
                    <a href="#jobs" className="menu-link" id="job-page">Jobs</a>
                </li>
                <li className="menu-items" id="about-page">
                    <a href="#contacts" className="menu-link rightmost" id="contact-page">Contact</a>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar; 