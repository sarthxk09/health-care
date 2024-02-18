import React from "react";
import "./Home.css";
import Home1 from "./images/Home1.jpg";
class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <content>
                <h1>PulseSync</h1>
                <p>PulseSync, a Hospital Management System (HMS) is a comprehensive software solution designed to streamline and automate the administrative, operational, and clinical processes within a healthcare facility. It provides a centralized platform for managing various aspects of hospital operations, enhancing efficiency, accuracy, and overall patient care.
                </p>
                </content>
           <img src={Home1} alt="logo" ></img>
            </div>
        )
    }
}
export default Home;