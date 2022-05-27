import React, { useState } from "react";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

function Home(props) {
  return (
    <div>
      <div>
        <h2>Home Information</h2>
      </div>
      <div className="about">
        <About />
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}
export default Home;
