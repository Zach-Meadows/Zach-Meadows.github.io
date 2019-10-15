import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css"

function Nav() {
  return (
    <div className="nav">
      <Link to="/">Webpage Home</Link>
      <a href="https://github.com/Zach-Meadows">My Github</a>
      <a href="https://medium.com/@zmeadows1">Blog</a>
      <a href="https://www.linkedin.com/in/zachary-meadows-63273410b/">LinkedIn</a>
      <a href="https://www.facebook.com/BlackMeadowStudio/">Hobby/Art</a>
    </div>
  );
}
export default Nav;
