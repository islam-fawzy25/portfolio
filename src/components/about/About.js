import React from "react";
import myPic from "../../images/islam.png"
import "./about.css"
import github from "../../logos/github.png"
import linkedin from "../../logos/linkedin11.png"
import email from "../../logos/email11.png"

export default function About() {
    return (
        <div id="about">
            <div className="contact-container">
                <img className="my-photo" src={myPic} alt="islam-pic" />
                <h3 className="name-title">Islam Fawzy</h3>
                <p className="job-title">Full Stack Developer</p>
                <div className=" about-logo-container">
                    <a href="mailto:islam.fawzy@outlook.dk">
                        <img className="about-logo-email" src={email} alt="email-logo" />
                    </a>
                    <a href="https://github.com/islam-fawzy25" target="_blank" rel="noreferrer"
                    >
                        <img className="about-logo" src={github} alt="githuh-logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/islam-fawzy/" target="_blank" rel="noreferrer"
                    >
                        <img className="about-logo" src={linkedin} alt="linkedin-logo" />
                    </a>
                </div>
            </div>
            <div className="about-container">
                <p>
                I am an extrovert web developer who thrives in teamwork with a flair for Frontend.                </p>
                <p >
                I am curious about simplifying complex apps into simple structured solutions.
                </p>
             
            </div>
        </div>
    )
}
