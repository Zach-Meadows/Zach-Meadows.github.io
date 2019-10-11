import React from 'react';
import Nav from './components/Nav'
import Projects from './components/Projects'
import Me from './components/Me'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Me />
      <Nav />
      <Projects />
    </div>
  );
}

export default App;
