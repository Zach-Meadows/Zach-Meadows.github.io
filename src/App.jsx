import { useState } from 'react'
import './App.css'
import ProjectCard from './components/ProjectCard'

function App() {
  const projects = [
    {
      title: "Profile Page",
      description: "A modern React-based portfolio website showcasing my projects and skills.",
      technologies: ["React", "Vite", "CSS"],
      imageUrl: "https://via.placeholder.com/400x200",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Project 2",
      description: "Description of your second project goes here.",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "https://via.placeholder.com/400x200",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Project 3",
      description: "Description of your third project goes here.",
      technologies: ["Python", "Django", "PostgreSQL"],
      imageUrl: "https://via.placeholder.com/400x200",
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const skills = [
    "JavaScript", "React", "Node.js", "Python", "TypeScript", "AWS",
    "Docker", "Kubernetes", "CI/CD", "System Design", "Microservices"
  ]

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="logo">ZM</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="hero">
          <div className="hero-content">
            <h1>Hi, I'm Zach Meadows</h1>
            <p className="subtitle">Software Engineer</p>
            <p className="description">
              I build scalable, high-performance applications with a focus on clean architecture and robust engineering practices.
            </p>
          </div>
        </section>

        <section id="projects" className="projects">
          <h2>My Projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <section id="skills" className="skills">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <p>Interested in working together?</p>
            <a href="mailto:your.email@example.com" className="contact-link">
              your.email@example.com
            </a>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Zach Meadows. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App 