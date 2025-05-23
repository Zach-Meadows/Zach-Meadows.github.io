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
      description: "A delivery simulation game created for Godot Wild Jam #65. Race against the clock to deliver packages in this fast-paced game developed in just one week.",
      technologies: ["Godot", "Game Development", "Game Jam"],
      imageUrl: whatTheTruckImage,
      liveUrl: "https://zach-meadows.itch.io/what-the-truck",
      githubUrl: null,
      supported: true
    },
    {
      title: "Working Title",
      description: "An in-development game that plays with the concept of being unfinished. The unfinished state of the game is actually part of its core gameplay mechanics and narrative.",
      technologies: ["React", "JavaScript", "Game Development"],
      imageUrl: workingTitleImage,
      liveUrl: "#",
      githubUrl: "https://github.com/Zach-Meadows/glitchy-game",
      supported: false
    },
    {
      title: "Hangman Game",
      description: "A classic hangman game built with React and modern web technologies.",
      technologies: ["React", "JavaScript", "CSS"],
      imageUrl: hangmanImage,
      liveUrl: "#",
      githubUrl: "https://github.com/Zach-Meadows/Hangman",
      supported: false
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