import React from "react";
import headshot from "../images/headshot.jpg";
import "../styles/Me.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

library.add(fab, faEnvelope);

const AstyledLink = styled.a``;
const StyledIcon = styled(FontAwesomeIcon)`
${AstyledLink}:hover & {
  color: blue;
}
`;

function Me(props) {
  return (
    <div className="meContainer">
      <div className="text">
        <h1>Zach Meadows</h1>
      </div>
      <img src={headshot} alt="Professional Headshot" className="me" />
      <div className="text">
        <h2>Software Engineer</h2>
      </div>
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "2px 5px",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "-webkit-fill-available"
        }}
      >
        <AstyledLink
          href="https://www.linkedin.com/in/Zach-Meadows/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon icon={["fab", "linkedin"]} size="lg" />
        </AstyledLink>
        <AstyledLink
          href="https://github.com/Zach-Meadows"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon icon={["fab", "github"]} size="lg" />
        </AstyledLink>

        <AstyledLink
          href="https://medium.com/@zmeadows1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon icon={["fab", "medium"]} size="lg" />
      </div>
    </div>
  );
}
export default Me;
