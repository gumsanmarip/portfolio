import React, { useState } from "react";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Feedback from "./Feedback";
import styled from "styled-components";

function Home(props) {
  return (
    <HomeStyle>
      <div className="container">
        <div className="intro">Introduction</div>
        <div className="about">
          <About />
        </div>
        <div className="projects">
          <Projects />
        </div>
        <div className="contact">
          <Contact />
        </div>
        <div className="feedback">
          <Feedback />
        </div>
      </div>
    </HomeStyle>
  );
}

export default Home;

const HomeStyle = styled.div``;
