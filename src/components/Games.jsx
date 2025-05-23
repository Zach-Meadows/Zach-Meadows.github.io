import React from 'react'
import './Games.css'
import ProjectCard from './ProjectCard'

function Games() {
  const games = [
    {
      title: "What the Truck",
      description: 
        "A delivery simulation game created for Godot Wild Jam #65. " +
        "Race against the clock to deliver packages in this fast-paced game " +
        "developed in just one week.",
      technologies: ["Godot", "Game Development", "Game Jam"],
      imageUrl: "/src/assets/what-the-truck.png",
      liveUrl: "https://zach-meadows.itch.io/what-the-truck",
      supported: true
    },
    {
      title: "Working Title",
      description: 
        "An in-development game that plays with the concept of being unfinished. " +
        "The unfinished state of the game is actually part of its core gameplay " +
        "mechanics and narrative.",
      technologies: ["React", "JavaScript", "Game Development"],
      imageUrl: "/src/assets/Working-Title.eb00140f.png",
      liveUrl: "#",
      githubUrl: "https://github.com/Zach-Meadows/glitchy-game",
      supported: false
    },
    {
      title: "Hangman Game",
      description: 
        "A classic hangman game built with React and modern web technologies.",
      technologies: ["React", "JavaScript", "CSS"],
      imageUrl: "/src/assets/hangmanExample.04ee6000.png",
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