import React from "react";
import "./navbar.css";
import Logo from "./images/logo.png";
class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    <img src={Logo} alt="logo" ></img>
                </div>
                <ul>

                    <li href="#">Home</li>
                    <li href="#">Features</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                    <div><button className="homebutton">Login</button></div>
                    

                </ul>

            </nav>



        )

    }
}

export default Navbar; 