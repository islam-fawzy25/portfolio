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
                    I'm an enthusiastic Web Developer who builds Web Apps from scratch with MERN stack,
                    I got experience with C # and .NET from a crash course and Umbraco certificate.
                </p>
                <p >
                    My previous experience in sales and marketing made me a good team player in solving problems with good communication and
                    creative sustainable solution for fulfilling goals.
                    My journey for coding started in 2020 when I started with self-learning from online courses before
                    I began at Hack Your Future school and since that, I can not stop learning more about cutting edge technologies.
                </p>
                <p >
                    Excellence comes from passion and hard work.
                </p>
            </div>
        </div>
    )
}
