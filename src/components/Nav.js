import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/art">Art</Link>
      <Link to="/contact">Contact Me</Link>
      <a href="https://medium.com/@zmeadows1">Blog</a>
    </div>
  );
}
export default Nav;
