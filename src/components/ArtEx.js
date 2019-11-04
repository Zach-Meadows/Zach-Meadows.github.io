import React from "react";
import styled from "styled-components"

const HoverLink = styled.a`
  color: rgb(3, 102, 214);
  :visited {
    color: rgb(3, 102, 214);
  }
  :hover {
    text-decoration: underline;
  }
`;

function ArtEx(props) {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        width: "90vw",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        fontFamily: "'Comfortaa', cursive"
      }}
    >
      <h2>{props.name}</h2>
      <p>{props.info}</p>
      <HoverLink
        href="https://www.facebook.com/BlackMeadowStudio/"
        target="_blank"
        rel="noopener noreferrer"

      >
        More on Facebook
      </HoverLink>
      <img
        src={props.image}
        alt={props.name}
        style={{
          borderRadius: "0 0 20px 20px",
          width: "90vw",
          marginTop: "5px"
        }}
      />
    </div>
  );
}

export default ArtEx;
