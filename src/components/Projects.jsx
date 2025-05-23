import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

// Import project images
import portfolioImage from '../assets/portfolio.png'
import mrsrvrImage from '../assets/mrsrvr.a502a17f.png'
import apiExampleImage from '../assets/ApiExample.66fd8c5f.png'

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern React and CSS. Features an interactive design with dynamic animations and optimized for both desktop and mobile viewing. Showcases my work with clean, professional presentation.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      imageUrl: portfolioImage,
      githubUrl: "https://github.com/Zach-Meadows",
      liveUrl: "https://zachmeadows.com"
    },
    {
      title: "MrSrvr Discord Bot",
      description: "A Discord bot built with Python that provides server management and utility features. Includes commands for moderation, user engagement, and server statistics. Deployed on cloud infrastructure for 24/7 availability.",
      technologies: ["Python", "Discord.py", "SQLite", "API Integration"],
      imageUrl: mrsrvrImage,
      githubUrl: "https://github.com/Zach-Meadows",
      liveUrl: null
    },
    {
      title: "REST API Development",
      description: "A comprehensive REST API built with modern backend technologies. Features authentication, data validation, and comprehensive documentation. Designed for scalability and performance with proper error handling.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      imageUrl: apiExampleImage,
      githubUrl: "https://github.com/Zach-Meadows",
      liveUrl: null
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects 