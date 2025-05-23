import { useState } from 'react'
import './App.css'
import About from './components/About'
import Art from './components/Art'
import Projects from './components/Projects'
import Games from './components/Games'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="logo">ZM</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#art">Art</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#games">Games</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <About />
        <Art />
        <Projects />
        <Games />
        <Skills />
        <Contact />
      </main>

      <footer className="footer">
      </footer>
    </div>
  )
}

export default App 