import React from 'react'
import './Skills.css'

function Skills() {
  const technologies = [
    {
      name: "JavaScript",
      icon: "/src/assets/javascript.61ed8b05.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      name: "Python",
      icon: "/src/assets/python.svg",
      url: "https://www.python.org/"
    },
    {
      name: "AWS",
      icon: "/src/assets/aws-logo.svg",
      url: "https://aws.amazon.com/"
    },
    {
      name: "React",
      icon: "/src/assets/react.df70b005.png",
      url: "https://react.dev/"
    },
    {
      name: "Docker",
      icon: "/src/assets/docker.svg",
      url: "https://www.docker.com/"
    },
    {
      name: "Jenkins",
      icon: "/src/assets/jenkins.svg",
      url: "https://www.jenkins.io/"
    },
    {
      name: "Terraform",
      icon: "/src/assets/terraform.svg",
      url: "https://www.terraform.io/"
    },
    {
      name: "Unreal Engine",
      icon: "/src/assets/unreal.svg",
      url: "https://www.unrealengine.com/",
      gamedev: true
    },
    {
      name: "Godot",
      icon: "/src/assets/godot.png",
      url: "https://godotengine.org/",
      gamedev: true
    }
  ]

  const skills = [
    "Full Stack Development",
    "REST API Design",
    "Database Management",
    "Version Control",
    "Agile Development",
    "Problem Solving",
    "UI/UX Design",
    "Code Review",
    "Technical Documentation",
    "Performance Optimization",
    "Requirements Gathering",
    "Workflow Automation"
  ]

  return (
    <section id="skills" className="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-container">
        <div className="technologies-section">
          <h3>Technologies</h3>
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`tech-item ${tech.gamedev ? 'gamedev-tech' : ''}`}
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="tech-icon" 
                />
                <span className="tech-name">
                  {tech.name}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-item"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 