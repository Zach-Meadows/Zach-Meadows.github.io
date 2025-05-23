import React from 'react'
import './Games.css'
import ProjectCard from './ProjectCard'

// Import game images
import whatTheTruckImage from '../assets/what-the-truck.png'
import workingTitleImage from '../assets/Working-Title.eb00140f.png'
import hangmanImage from '../assets/hangmanExample.04ee6000.png'

function Games() {
  const games = [
    {
      title: "What the Truck",
      description: "A physics-based puzzle game built in Unreal Engine where players control a truck navigating through challenging obstacle courses. Features dynamic physics, level progression, and engaging gameplay mechanics.",
      technologies: ["Unreal Engine", "Blueprint", "Physics Simulation"],
      imageUrl: whatTheTruckImage,
      liveUrl: "https://itch.io/profile/zach-meadows",
      githubUrl: null
    },
    {
      title: "Working Title",
      description: "An adventure game project featuring exploration and puzzle-solving elements. Built with a focus on environmental storytelling and immersive gameplay experiences.",
      technologies: ["Unreal Engine", "Blueprint", "3D Modeling"],
      imageUrl: workingTitleImage,
      liveUrl: null,
      githubUrl: null
    },
    {
      title: "Hangman Game",
      description: "A classic word guessing game with a modern interface. Features dynamic word selection, score tracking, and clean UI design. Built as a web application with interactive elements.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Web APIs"],
      imageUrl: hangmanImage,
      liveUrl: null,
      githubUrl: "https://github.com/Zach-Meadows"
    }
  ]

  return (
    <section id="games" className="games">
      <h2>My Games</h2>
      <div className="games-grid">
        {games.map((game, index) => (
          <ProjectCard key={index} {...game} />
        ))}
      </div>
    </section>
  )
}

export default Games 