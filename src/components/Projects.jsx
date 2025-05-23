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
      title: "zachmeadows.com",
      description: "My personal portfolio website built with React, featuring a modern UI design with interactive elements and responsive layouts. Showcases my projects, skills, and development journey.",
      technologies: ["React", "JavaScript", "CSS", "Responsive Design"],
      imageUrl: portfolioImage,
      supported: true,
      isWebsite: true,
      liveUrl: null,
      githubUrl: null
    },
    {
      title: "Mrsrvr",
      description: "A full-stack web application for managing and tracking server resources and performance.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      imageUrl: mrsrvrImage,
      liveUrl: "#",
      githubUrl: "#",
      supported: false
    },
    {
      title: "API Integration",
      description: "A demonstration of API integration and data handling in modern web applications.",
      technologies: ["React", "JavaScript", "REST API"],
      imageUrl: apiExampleImage,
      liveUrl: "#",
      githubUrl: "#",
      supported: false
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