import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/art">Art</Link>
      <Link to="/contact">Contact Me</Link>
    </div>
  );
}
export default Nav;
