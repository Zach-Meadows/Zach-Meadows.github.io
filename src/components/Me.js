import React from "react";
import headshot from '../images/headshot.jpg'
import "../styles/Me.css"

function Me() {
  return (
    <div className="meContainer">
      <div className="text"><h1>Zach Meadows</h1></div>
      <img src={headshot} alt="Professional Headshot" className="me" />
      <div className="text"><h2>Software Engineer</h2></div>
    </div>
  );
}
export default Me
