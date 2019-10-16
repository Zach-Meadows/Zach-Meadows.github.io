import React from 'react';
import Nav from './components/Nav'
import Projects from './components/Projects'
import Me from './components/Me'
import Contact from "./components/Contact"
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="overlay"></div>
      <Me />
      <Nav />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
