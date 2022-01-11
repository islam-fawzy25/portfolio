import React from "react";
import myPic from "../../images/islam.png"
import "./about.css"
import github from "../../logos/github.png"
import linkedin from "../../logos/linkedin11.png"
import email from "../../logos/email11.png"



export default function About() {

    return (
        <div id="about">
            <div>
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

                <p className="about-text">
                    &M has opened its first store in metaverse.

                    The brands opening online store in no big deal now.

                    Same way brands & websites in metaverse won't be a big deal in next 5 - 10 years.

                    It will change how marketing & digital marketing is done.

                    The tracking, attribution, cost, budgeting all will be impacted once metaverse becomes mainstream.

                </p>

                <p className="about-text">
                    &M has opened its first store in metaverse.

                    The brands opening online store in no big deal now.

                    Same way brands & websites in metaverse won't be a big deal in next 5 - 10 years.

                    It will change how marketing & digital marketing is done.

                    The tracking, attribution, cost, budgeting all will be impacted once metaverse becomes mainstream.

                </p>


            </div>
        </div>
    )
}