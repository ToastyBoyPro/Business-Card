// includes photo, name, buttons, etc
import React from "react"
import profilePic from "../images/Robert-Park-Profile.jpg"

export default function Info() {
    return (
        <div className="container">
            <img src={profilePic} className="profile-pic" alt="Robert Park"/>
            <div className="text-container">
                <h1>Robert Park</h1>
                <h3>Frontend Developer</h3>
                <a className="website-link" href="https://www.toastyboyproductions.com" target="_blank">
                    <p className="website">Toasty Boy Productions</p>
                </a>
                <a href="https://www.sahngpyo@gmail.com" target="_blank">
                    <button className="email-button"><i className="fa fa-envelope"></i> Email</button>
                </a>
                <a href="https://www.linkedin.com/in/robert-park-807780a0/" target="_blank">
                    <button className="linkedin-button"><i className="fa fa-linkedin-square"></i> LinkedIn</button>
                </a>
            </div>
        </div>
    )
}