import React from "react";
import "./App.css"
import NavBar from './components/navBar/Nav';
import Skills from './components/skills/Skills';
import Contact from './components/contact/contact';
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import ExperienceContainer from "./components/experince/experince.jsx"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ExperienceContainer />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
