import React, { useState } from "react";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Feedback from "./Feedback";
import styled from "styled-components";

function Home(props) {
  return (
    <section id="home">
      <HomeStyle>
        <div className="body">
          <div className="intro">
            <a>picture, introduction</a>
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
          <div className="feedback">
            <Feedback />
          </div>
        </div>
      </HomeStyle>
    </section>
  );
}

export default Home;

const HomeStyle = styled.div`
  .body {
    margin: 100px 50px 100px 50px;
  }
  .intro {
    display: flex;
  }
  @media only screen and (max-width: 1080px) {
    .body {
      margin: 100px 0px 50px 0px;
    }
  }
`;
