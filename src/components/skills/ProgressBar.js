import React from "react";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import "./skills.css"


export default function ProgressBar() {
    const config = {
        percent: 55,
        colorSlice: "#E91E63",
        colorCircle: "#f1f1f1",
        fontWeight: 100,
        number: false // turn off the percentage animation first
        ,
    };

    return (
        <div className="progress">


            <CircularProgressBar key={1} {...config}>
                <div>

                <img
                    src="https://picsum.photos/100/100"
                    style={{
                        width: "60px",
                        borderRadius: "50%",
                        padding: "2px",
                        border: "3px solid salmon"
                    }}
                    alt="Randomimage"
                />
                <div style={{ textAlign: "center",textPosition:"0.35em", padding: "0" }}>
                    Lorem, ipsum dolor.
                </div>
                </div>

            </CircularProgressBar>
        </div>
    )
}