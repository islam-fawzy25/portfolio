import React from "react";
import "./projects.css"
import mealSharing from "../../images/meal-sharing.png"
import simply from "../../images/simply-name-it.png"
import github from "../../logos/github5.png"
import web from "../../logos/click.png"

export default function Projects() {



    return (
        <div id="projects">
            <div className="project-header">
                <h3 >Projects</h3>
            </div>

            <div className="projects-container">

                <div className="single-project-container">
                    <img className="meal-pic" src={mealSharing} alt="meal.-sharing-pic" />
                    <div className="project-description-container">
                        <h2 > Meal sharing</h2>
                        <div> a platform for sharing meals, where you can add, reserve, or review meals.
                        </div>
                        <div>
                            <span > MERN Stack </span>
                            <span> MERN Stack </span>
                            <span> MERN Stack </span>
                            <span> MERN Stack </span>
                            <span> MERN Stack </span>
                            <span> MERN Stack </span>
                            <span> MERN Stack </span>
                        </div>

                        <div className="project-logo-container">
                            <a href="https://github.com/islam-fawzy25/meal-sharing" target="_blank" rel=" noreferrer">
                                <img className="project-logo" src={github} alt="github-logo" />
                            </a>
                            <a href="https://hyf-meal-sharing-app.herokuapp.com/" target="_blank" rel=" noreferrer">
                                <img className="project-logo" src={web} alt="click-logo" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="single-project-container">
                    <img className="simply-pic" src={simply} alt="meal.-sharing-pic" />
                    <div className="project-description-container">
                        <h2>Simply name it  </h2>
                        <div> App helping you to make a ballot from your network to choose
                            something. </div>
                        <div>
                            <span> MERN Stack </span>
                            <span> MERN Stack </span>
                            <span> MERN Stack </span>
                            <span> MERN Stack </span>
                            <span> MERN Stack </span>
                            <span> MERN Stack </span>
                            <span> MERN Stack </span>
                            <span> MERN Stack </span>
                        </div>

                        <div className="project-logo-container">
                            <a href="https://github.com/HackYourFuture-CPH/simply-name.it" target="_blank" rel=" noreferrer">
                                <img className="project-logo" src={github} alt="github-logo" />
                            </a>
                            <a href="https://staging-simply-name-it.herokuapp.com/" target="_blank" rel=" noreferrer">
                                <img className="project-logo" src={web} alt="click-logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}