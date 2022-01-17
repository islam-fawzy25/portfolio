import React from "react";
import "./skills.css"
import CircleProgress from "./progrssBar/ProgressCircle";
import git from "../../logos/git.png"
import html from "../../logos/html-5.png"
import css from "../../logos/css.png"
import js from "../../logos/js-file.png"
import csharp from "../../logos/hashtag.png"
import mysql from "../../logos/mysql.png"
import nodejs from "../../logos/.png"
import react from "../../logos/react.png"
import typescript from "../../logos/typescript.png"
import jquary from "../../logos/jquary.png"
import angular from "../../logos/angular.png"
import dotnet from "../../logos/dotnet1.png"
import sql from "../../logos/sql3.png"




export default function Skills() {

    return (
        <div id="skills">
            <div className="skills-header">
                <h3 className="skills-title">Skills</h3>
            </div>
            <div className="skills-container">
                <div className="logo-container">
                    <CircleProgress src={html} value={50 / 100} text={"HTML5"} />
                    <CircleProgress src={css} value={50 / 100} text={"HTML5"} />
                    <CircleProgress src={git} value={50 / 100} text={"HTML5"} />
                    <CircleProgress src={react} value={50 / 100} text={"HTML5"} />
                    <CircleProgress src={js} value={50 / 100} text={"HTML5"} />
                    <CircleProgress src={nodejs} value={50 / 100} text={"HTML5"} />
                    <CircleProgress src={jquary} value={50 / 100} text={"HTML5"} />
                    <CircleProgress src={typescript} value={50 / 100} text={"HTML5"} />
                    <CircleProgress src={dotnet} value={50 / 100} text={"HTML5"} />
                    <CircleProgress src={sql} value={50 / 100} text={"HTML5"} />
                    <CircleProgress src={mysql} value={50 / 100} text={"HTML5"} />
                    <CircleProgress src={csharp} value={50 / 100} text={"HTML5"} />
                    <CircleProgress src={csharp} value={50 / 100} text={"HTML5"} />
                    <CircleProgress src={csharp} value={50 / 100} text={"HTML5"} />
                    <CircleProgress src={angular} value={50 / 100} text={"HTML5"} />

                </div>
                <div>
                </div>
            </div>
        </div>

    )
}