import React from "react";
import "./Features.css";
import Doctor from "./images/doctor.png";
import Patient from "./images/patient.png";
import Pharmacy from "./images/pharmacy.png";
import Appointment from "./images/appointment.png";

class Features extends React.Component {
    render() {
        return (
            <div className="Features">
                <h1>Features</h1>
                <div className="box-container">

                    <div className="box">
                        <img src={Appointment} alt="doc"></img>
                        <h3>Appointment</h3>
                        <button>Read More</button>
                    </div>
                    <div className="box">
                        <img src={Doctor} alt="doc"></img>
                        <h3>Doctor Appointment</h3>
                        <button>Read More</button>
                    </div>

                    <div className="box">
                        <img src={Patient} alt="doc"></img>
                        <h3>Patient</h3>
                        <button>Read More</button>
                    </div>

                    <div className="box">
                        <img src={Pharmacy} alt="doc"></img>
                        <h3>Doctor Pharmacy</h3>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Features;
