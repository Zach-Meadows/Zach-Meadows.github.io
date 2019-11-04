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

function App(props) {
  return (
    <div className="App">
      <Me />
      <Nav />
      <Route path="/" exact render={props => <Home {...props}/>} />
      <Route path="/about" render={props => <About {...props}/>} />
      <Route path="/projects" render={props => <Projects {...props}/>} />
      <Route path="/contact" render={props => <Contact {...props}/>} />
      <Route path="/art" render={props => <Art {...props}/>} />
    </div>
  );
}

export default App;
