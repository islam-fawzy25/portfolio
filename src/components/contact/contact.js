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

/*
contact by email 
<form action="https://formsubmit.co/your@email.com" method="POST">
     <input type="text" name="name" required>
     <input type="email" name="email" required>
     <button type="submit">Send</button>
</form> 

 _autoresponse

You can send an instant response to your users with a copy of the submission. Add a custom message to the email body.

<input type="hidden" name="_autoresponse" value="your custom message">

To activate this feature your form should request the user's email address.

<input type="email" name="email" placeholder="Email Address">

* autoresponse won't work with forms that are disabled reCAPTCHA and forms that are submitting through AJAX.

*/