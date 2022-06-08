import React, { useState } from "react";
import styled from "styled-components";

function About(props) {
  return (
    <section id="about">
      <AboutStyle>
        <div className="container">
          <div className="title">About</div>
          <a>About: Technologies and Tools, Skills, Story, Dreams</a>
        </div>
      </AboutStyle>
    </section>
  );
}
export default About;
const AboutStyle = styled.div`
  .container {
    margin: 10px 10px 100px 10px;
  }
  .title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }
`;
