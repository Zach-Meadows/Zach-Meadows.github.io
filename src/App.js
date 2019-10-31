import React from "react";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Me from "./components/Me";
import Contact from "./components/Contact";
import "./styles/App.css";
import { Route } from "react-router-dom";
import Art from "./components/Art";
import About from "./components/About";
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Me />
      <Nav />
      <Route path="/" exact render={Home} />
      <Route path="/about" render={About} />
      <Route path="/projects" render={Projects} />
      <Route path="/contact" render={Contact} />
      <Route path="/art" render={Art} />
    </div>
  );
}

export default App;
