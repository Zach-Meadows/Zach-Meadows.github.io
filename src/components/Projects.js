import React from "react";
import Example from "./Example";
import "../styles/Projects.css"
import api from "../images/ApiExample.png"
import magic from "../images/hangmanExample.png"
import mrsrvr from "../images/mrsrvr.png"
import working from "../images/Working-Title.png"

const projectInfo = [
  {
    name: "Hangman/Magic Game",
    url: "/Hangman/",
    info: "This is a simple game of hangman that can be played either single or multiplayer. This game later expanded to include my Magic card guessing game, using an API I developed myself, from Scryfall's API, to generate the images. These games were built using Javascript, HTML, and CSS",
    image: magic,
    used: ["Javascript", "HTML", "CSS"]
  },
  {
    name: "Magic API",
    url: "https://github.com/Zach-Meadows/simpleMagicAPI",
    info: "An API developed for use in the Magic card guessing game I made. This API provides card images as well as other info about all cards legal in the Modern format of Magic: the Gathering. This API was made with MongoDB, Mongoose, and deployed on Heroku.",
    image: api,
    used: ["MongoDB", "Mongoose", "Heroku"]
  },
  {
    name: "MrsRvr",
    url: "http://dashing-hour.surge.sh/",
    info: "A webapp developed to view mars rover images, with mission data. This webpage was built with React, CSS, MongoDB, and Mongoose.",
    image: mrsrvr,
    used: ["React", "CSS", "MongoDB", "Mongoose", "Heroku", "Surge"]
  },
  {
    name: "Working Title",
    url: "https://zach-meadows.github.io/glitchy-game/",
    info: "Explore the world of an unfinished game and help the developer by finding the glitches to progress. A game built in React using Redux.",
    image:  working,
    used: ["React", "Redux","CSS"]
  }
];

function Projects() {
  return (
    <div className="projContain">
      <div className="text"><h2>Projects</h2></div>
      <div className="projects">
        {projectInfo.map((item, i) => {
          return <Example {...item} key={i} />;
        })}
      </div>
    </div>
  );
}
export default Projects;
