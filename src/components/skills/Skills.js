import React from "react";
import "./skills.css"
import CircleProgress from "./progrssBar/ProgressCircle";
import html from "../../logos/html-5.png"
import css from "../../logos/css.png"
import csharp from "../../logos/hashtag.png"
import mysql from "../../logos/mysql.png"
import nodejs from "../../logos/nodejs.png"
import react from "../../logos/react.png"
import typescript from "../../logos/typescript.png"
import jquery from "../../logos/jquary.png"
import angular from "../../logos/angular.png"
import dotnet from "../../logos/dotnet1.png"
import umbraco from "../../logos/umbraco.png"
import blazor from "../../logos/blazor.png"
import bootstrap from "../../logos/bootstrap.png"
import sql from "../../logos/sql3.png"
import js from "../../logos/js-file.png"

export default function Skills() {
    return (
        <div id="skills">
            <div className="skills-header">
                <h3 className="skills-title">Skills</h3>
            </div>
            <div className="skills-container">
                <div className="skills-description">
                    <p>
                        I started my journey as a developer at HackYourFuture school where I was working on different projects
                        based on the Javascript stack, followed by courses and master classes.
                    </p>
                </div>

                <div className="skills-group">
                    <CircleProgress src={html} value={90 / 100} text={"HTML5"} />
                    <CircleProgress src={css} value={90 / 100} text={"CSS3"} />
                    <CircleProgress src={bootstrap} value={80 / 100} text={"Bootstrap"} />
                    <CircleProgress src={js} value={90 / 100} text={"Javascript"} />
                    <CircleProgress src={react} value={90 / 100} text={"React"} />
                    <CircleProgress src={mysql} value={80 / 100} text={"MYSQL"} />
                    <CircleProgress src={nodejs} value={70 / 100} text={"Nodejs"} />
                </div>
                <div className="skills-group">
                    <CircleProgress src={csharp} value={50 / 100} text={"C#"} />
                    <CircleProgress src={dotnet} value={50 / 100} text={".NET"} />
                    <CircleProgress src={sql} value={80 / 100} text={"SQL"} />
                    <CircleProgress src={angular} value={50 / 100} text={"Angular"} />
                    <CircleProgress src={jquery} value={50 / 100} text={"Jquery"} />
                    <CircleProgress src={typescript} value={70 / 100} text={"Typescript"} />
                    <CircleProgress src={blazor} value={30 / 100} text={"Blazor"} />
                </div>
                <div className="skills-group">
                    <CircleProgress src={umbraco} value={35 / 100} text={"Umbraco"} />
                </div>

            </div>

        </div>

    )
}