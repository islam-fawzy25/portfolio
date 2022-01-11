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
                    I'm a recent graduate from Hack Your Future, Copenhagen (HYF),
                     a non profit coding school which helps students in acquiring the necessary skills to become web developers.
                   
                </p>

                <p className="about-text">
                I have extensive experience in customer service, which has taught me to be a people person.
                    My passion for coding started when I was looking for a career change and started looking for some IT
                     courses until I came across HYF and since then there has been no looking back .
                      I have worked on different projects and I have experience working with Html, CSS, Javascript, NodeJs, ExpressJs, ReactJs and MySQL

                    <br />
                    <br />

                    My interests lie in solving problems related to large-scale distributed software systems.


                </p>


            </div>
        </div>
    )
}