import React from "react";
import "./projects.scss"
import mealSharing from "../../images/meal-sharing.png"
import simply from "../../images/simply-name-it.png"
import weatherApp from "../../images/weatherApp.png"
import todo from "../../images/AngularTodoList.png"
import ProjectComponent from "./SingleProject";
import pokemon from "../../images/pokemon.png"
import shareExpenses from "../../images/share-expenses.png"
import newsStories from "../../images/news-stories.png"

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
                    techStack={["HTML5", "CSS3", "JavaScript (ES6)", "NodeJs", "Express", "KnexJs", "MYSQL", "ReactJs", "Storybook", "Swagger"]}
                />
                <ProjectComponent
                    projectName="Meal sharing"
                    projectDescription="A platform for sharing meals. where you can add, reserve or review meals.  "
                    src={mealSharing} alt="meal-sharing-pic"
                    codeHref="https://github.com/islam-fawzy25/meal-sharing"
                    techStack={["HTML5", "CSS3", "JavaScript (ES6)", "NodeJs", "Express", "KnexJs", "MYSQL", "ReactJs", "React Bootstrap"]}
                />
                <ProjectComponent
                    projectName="Pokemon"
                    projectDescription="A platform helping users to find their favourites pokemon
                    - Pagination.
                    -Sort & Filter data.  "
                    src={pokemon} alt="pokemon-pic"
                    codeHref="https://github.com/islam-fawzy25/pokemon"
                    websiteHref="https://islam-fawzy25.github.io/pokemon/"
                    techStack={["HTML5", "CSS3", "JavaScript (ES6)", "Typescript", "ReactJs", "React Bootstrap"]}
                />
                <ProjectComponent
                    projectName="Share expenses"
                    projectDescription="Is an app for helping people share their expenses when they enjoy time together. "
                    src={shareExpenses} alt="shareExpenses-app-pic"
                    codeHref="https://github.com/islam-fawzy25/share-expenses"
                    websiteHref="https://islam-fawzy25.github.io/share-expenses/"
                    techStack={["HTML5", "CSS3", "JavaScript (ES6)", "React", "Typescript"]}
                />
                     <ProjectComponent
                    projectName="News stories"
                    projectDescription="Single web page for reviewing random 10 top stories in responsive design.  "
                    src={newsStories} alt="news stories-app-pic"
                    codeHref="https://github.com/islam-fawzy25/news-stories"
                    websiteHref="https://islam-fawzy25.github.io/news-stories/"
                    techStack={["HTML5", "CSS/SASS", "JavaScript (ES6)", "React", "Typescript"]}
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