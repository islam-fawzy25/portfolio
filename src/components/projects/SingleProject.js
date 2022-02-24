import React from "react"
import "./projects.css"
import github from "../../logos/github5.png"
import web from "../../logos/click.png"

export default function ProjectComponent({ src, alt, codeHref, websiteHref, techStack = [], projectName, projectDescription }) {
    return (
        <div className="single-project-container" >
            <div className="project-pic">
            <img  src={src} alt={alt} />
            </div>
            <div className="project-description-container">
                <h2> {projectName}  </h2>
                <div> {projectDescription}  </div>
                <div className="tech-container">
                    {
                        techStack.map((item) => (
                            <span key={item}>{item}</span>
                        ))
                    }
                </div>
                <div className="project-sources-container">
                    <a href={codeHref} target="_blank" rel=" noreferrer">
                        <img className="project-source" src={github} alt="github-logo" />
                        <div>Code</div>
                    </a>
                    <a href={websiteHref} target="_blank" rel=" noreferrer">
                        <img className="project-source" src={web} alt="click-logo" />
                        <div>Website</div>
                    </a>
                </div>
            </div>
        </div>
    )
}