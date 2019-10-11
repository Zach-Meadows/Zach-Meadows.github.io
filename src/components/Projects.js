import React from "react";
import Example from "./Example";
import "../styles/Projects.css"
import Me from "../images/headshot.jpg"
import api from "../images/ApiExample.png"
import magic from "../images/hangmanExample.png"
import mrsrvr from "../images/mrsrvr.png"


const projectInfo = [
  {
    name: "Hangman/Magic Game",
    url: "/Hangman/",
    info: "My first foray into game development, this is a simple game of hangman that allows you to either put in words for other people in the same room to guess. Additionally the game has the option to play a solo mode, which uses an API from Merriam-Webster to generate a random word for the player to guess, as well as providing the definition as an optional clue. This game later expanded to include my Magic card guessing game, using an API I developed myself, from Scryfall's API, to generate the images. These games were built using Javascript, HTML, and CSS",
    image: magic
  },
  {
    name: "Magic API",
    url: "https://github.com/Zach-Meadows/simpleMagicAPI",
    info: "An API developed for use in the Magic card guessing game I made. This api provides card images as well as other info about all cards legal in the Modern format of Magic: the Gathering. This API was made with MongoDB, Mongoose, and deployed on Heroku.",
    image: api
  },
  {
    name: "MrsRvr",
    url: "http://dashing-hour.surge.sh/",
    info: "A webapp developed to view mars rover images, with mission data. This webpage was built with React, CSS, MongoDB, and Mongoose.",
    image: mrsrvr
  },
];

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="projects">
        {projectInfo.map((item, i) => {
          return <Example {...item} key={i} />;
        })}
      </div>
    </div>
  );
}
export default Projects;
