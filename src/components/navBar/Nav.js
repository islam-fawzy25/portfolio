import React from "react";
import "./nav.css"

export default function NavBar() {

    return (
        <div className="nav-container">
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


    )
}