import React from "react";
import "./contact.css"
import linkedIn from "../../logos/linkedin.png"
import github from "../../logos/git.png"
import email from "../../logos/email.png"

export default function Contact() {
    return (
        <div id="contact">
            <div className="contact-header">
                <h3>Contact</h3>
            </div>
            <div className="contact-container">
                <div>
                    <a href="https://www.linkedin.com/in/islam-fawzy/"
                        target="_blank" rel="noreferrer"
                    >
                        <img className="contact-logo"
                            src={linkedIn}
                            alt="linkedin logo" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/islam-fawzy25"
                        target="_blank" rel="noreferrer"
                    >
                        <img className="contact-logo"
                            src={github}
                            alt="github logo" />
                    </a>
                </div>
                <div>
                    <a href="mailto:islam.fawzy@outlook.dk"
                    >
                        <img className="contact-logo"
                            src={email}
                            alt="email logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}
