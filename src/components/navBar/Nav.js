import React from "react";
import "./nav.css"
import logo from "./logo.jpg"

export default function NavBar() {
    return (
        <div className="nav-container">
            <div>
                <img src={logo} alt="my-name-logo" />
            </div>
            <div className="nav-btn-container">
                <div>
                    <a href="#experince">Ex</a>
                </div>
                <div>
                    <a href="#about">About</a>
                </div>
                <div>
                    <a href="#skills">Skills</a>
                </div>
                <div>
                    <a href="#projects">Projects</a>
                </div>
                <div>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    )
}