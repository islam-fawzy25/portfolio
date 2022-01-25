import React from "react";
import "./progrssCircle.scss"

export default function CircleProgress({ value, src, text }) {
  const pct = (1 - value) * Math.PI * 100;
  return (

 
  <div className="progress">
    <div className="circle-progress">
      <div className="circle-progress__wrap" >
        <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle className="circle-progress__background" r="50" cx="50" cy="50" fill="transparent" />
          <circle className="circle-progress__bar" r="50" cx="50" cy="50" fill="transparent" strokeDasharray={Math.PI * 100} strokeDashoffset={pct} />
        </svg>
        <div className="children">
          <img alt="logo" src={src} />
        </div>
        <div className="children-text">{text}</div>
      </div>
    </div>
  </div>
   )
}





