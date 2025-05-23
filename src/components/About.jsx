import React from 'react'
import './About.css'
import headshotImage from '../assets/headshot.447ea93a.jpg'
import snorlaxImage from '../assets/snorlaxMe.f40361c4.jpg'

function About() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/qwar_zach/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/BlackMeadowStudio/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/blackmeadowstudio",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/qwarzach",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Zach Meadows</h1>
        <p className="subtitle">Software Engineer</p>
        <div className="about-content">
          <div className="about-section">
            <div className="about-image-container">
              <img 
                src={headshotImage} 
                alt="Zach Meadows" 
                className="about-image" 
              />
              <h3 className="image-title">Me - Zach Meadows</h3>
            </div>
            <p className="description">
              I'm a creative mind born and raised in northern Virginia. 
              I've always been torn between creative outlets and computer-related studies, 
              until I realized that I could have the best of both worlds with programming.
            </p>
            <p className="description">
              For all of my life I have interacted with computers. Starting with a laptop 
              with hardware and software problems, I quickly tasked myself with finding 
              the solutions to its dysfunctions and from there my problem solving and 
              curiosity began. Using the tools I had and the early stages of Google, I 
              diagnosed and fixed all problems to allow me to have a simple laptop to play 
              games on in my early teens. Now I use these skills and practices I developed 
              to solve engineering problems, and in my free time build things for my own 
              curiosity.
            </p>
          </div>
          <div className="about-section">
            <div className="about-image-container">
              <img 
                src={snorlaxImage} 
                alt="Cosplay Work" 
                className="about-image" 
              />
              <h3 className="image-title">Snorlax Cosplay</h3>
            </div>
            <p className="description">
              After work hours I spend most of my time creating things across multiple 
              mediums. Additionally, I make cosplay costumes, sculpt, personal programming 
              projects, and even game development. There are some times when I don't make stuff 
              and I instead hang out with friends and go out on hikes. When I don't have the 
              energy for those things, I like to do more simple things like play video games, 
              board games, and card games. Adventure games like Skyrim, puzzle games like Portal, 
              card games like Magic: the Gathering, and the occasional game of Mysterium are my 
              favorite ways to unwind.
            </p>
            <div className="art-social-links">
              <h4>Follow My Art Journey:</h4>
              <div className="social-icons">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <p className="alias-note">
                Find me as <span className="alias">QwarZach</span> or <span className="alias">BlackMeadowStudio</span> across most platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 