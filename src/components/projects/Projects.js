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
                    <img className="project-pic" src={mealSharing} alt="meal.-sharing-pic" />
                    <div className="project-description-container">
                        <h2 > Meal sharing</h2>
                        <div> A platform for sharing meals.<br /> where you can add, reserve or review meals.
                        </div>
                        <div className="tech-container">
                            <span> Javascript </span>
                            <span> React </span>
                            <span> NodeJS </span>
                            <span> MYSQL </span>
                            <span> Express</span>
                            <span> Knex </span>
                            <span> Bootstrap </span>
                        </div>
                        <div className="project-logo-container">
                            <a href="https://github.com/islam-fawzy25/meal-sharing" target="_blank" rel=" noreferrer">
                                <img className="project-logo" src={github} alt="github-logo" />
                                <div>Code</div>
                            </a>
                            <a href="https://hyf-meal-sharing-app.herokuapp.com/" target="_blank" rel=" noreferrer">
                                <img className="project-logo" src={web} alt="click-logo" />
                                <div>Website</div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="single-project-container">
                    <img className="project-pic" src={simply} alt="meal.-sharing-pic" />
                    <div className="project-description-container">
                        <h2>Simply name it  </h2>
                        <div> App helps you to make a ballot from your network to choose your next decision.  </div>
                        <div className="tech-container">
                            <span> Javascript </span>
                            <span> React </span>
                            <span> NodeJS </span>
                            <span> MYSQL </span>
                            <span> Express</span>
                            <span> Knex </span>
                            <span> Swagger</span>
                            <span> Storybook </span>
                        </div>
                        <div className="project-logo-container">
                            <a href="https://github.com/HackYourFuture-CPH/simply-name.it" target="_blank" rel=" noreferrer">
                                <img className="project-logo" src={github} alt="github-logo" />
                                <div>Code</div>
                            </a>
                            <a href="https://staging-simply-name-it.herokuapp.com/" target="_blank" rel=" noreferrer">
                                <img className="project-logo" src={web} alt="click-logo" />
                                <div>Website</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}