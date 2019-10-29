import React from "react";

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
      <a
        href="https://www.facebook.com/BlackMeadowStudio/"
        target="_blank"
        style={{
          color: "rgb(3,102,214)",
          textDecoration: "underline"
        }}
      >
        More on Facebook
      </a>
      <img
        src={props.image}
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
