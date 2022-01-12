import React from "react";
import "./skills.css"

export default function Skills() {

    return (
        <div id="skills">
            <div className="skills-header">
                <h3 className="skills-title">Skills</h3>

            </div>

            <div className="skills-container">
                <div className="logo-container">
                    <div >HTML5</div>
                    <div >CSS3</div>
                    <div >JavaScript(ES6)</div>
                    <div >React</div>
                    <div >NodeJS</div>
                    <div >MYSQL</div>

                    <div >Bootstrap</div>
                  
                    <div >Git</div>
                </div>
                <div className="logo-container">
                    <div >C#</div>
                    <div >.NET </div>
                    <div >SQL server</div>
                    <div >AngularJS</div>
                    <div >Blazor</div>
                    <div >TypeScript</div>
                    <div >JQuery</div>
                    <div >Umbraco</div>

                </div>
            </div>
        </div>

    )
}