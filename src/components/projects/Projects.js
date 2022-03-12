import React from "react";
import "./projects.css"
import mealSharing from "../../images/meal-sharing.png"
import simply from "../../images/simply-name-it.png"
import weatherApp from "../../images/weatherApp.png"
import todo from "../../images/AngularTodoList.png"
import ProjectComponent from "./SingleProject";

export default function Projects() {
    return (
        <div id="projects">
            <div className="project-header">
                <h3 >Projects</h3>
            </div>
            <div className="projects-container">
                <ProjectComponent
                    projectName="Simply name it"
                    projectDescription="App helps you to make a ballot from your network to choose your next decision.  "
                    src={simply} alt="simply-pic"
                    codeHref="https://github.com/HackYourFuture-CPH/simply-name.it"
                    websiteHref="https://staging-simply-name-it.herokuapp.com/"
                    techStack={["HTML5", "CSS3", "JavaScript (ES6)", "NodeJs", "Express", "KnexJs", "MYSQL", "ReactJs", "Storybook", "Swagger"]}
                />
                <ProjectComponent
                    projectName="Meal sharing"
                    projectDescription="A platform for sharing meals. where you can add, reserve or review meals.  "
                    src={mealSharing} alt="meal-sharing-pic"
                    codeHref="https://github.com/islam-fawzy25/meal-sharing"
                    websiteHref="https://hyf-meal-sharing-app.herokuapp.com/"
                    techStack={["HTML5", "CSS3", "JavaScript (ES6)", "NodeJs", "Express", "KnexJs", "MYSQL", "ReactJs", "React Bootstrap"]}
                />
                <ProjectComponent
                    projectName="Todo list"
                    projectDescription="Todo list App is a platform where you can add or remove your tasks   "
                    src={todo} alt="Todo-pic"
                    codeHref="https://github.com/islam-fawzy25/TodoList"
                    techStack={["HTML5", "CSS3", "JavaScript (ES6)", "Angular", "Typescript"]}
                />
                <ProjectComponent
                    projectName="Weather APP"
                    projectDescription="Weather App is a platform where you can check any city's weather  "
                    src={weatherApp} alt="weather-app-pic"
                    codeHref="https://github.com/islam-fawzy25/Weather-App"
                    websiteHref="https://islam-fawzy25.github.io/Weather-App/"
                    techStack={["HTML5", "CSS3", "JavaScript (ES6)"]}
                />
            </div>
        </div>
    )
}