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
            <div className="form-container">
                <form target="_blank" action="https://formsubmit.co/islam.fawzy@outlook.dk" method="POST">
                    <div >
                        <div >
                            <div >
                                <input type="text" name="name"  placeholder="Your Name" required/>
                            </div>
                            <div class="col">
                                <input type="email" name="email"  placeholder="Your Email " required/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Your Message"  name="message" rows="10" required></textarea>
                    </div>
                    <button type="submit" >Send</button>
                </form>
            </div>
        </div>
    )
}

