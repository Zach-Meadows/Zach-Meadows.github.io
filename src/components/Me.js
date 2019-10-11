import React from "react";
import headshot from '../images/headshot.jpg'

function Me() {
  return (
    <div>
      <h1>Zach Meadows</h1>
      <img src={headshot} className="me" />
      <h2>Programmer/Artist</h2>
    </div>
  );
}
export default Me
