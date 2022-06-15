import React, { useState } from "react";
import styled from "styled-components";

function About(props) {
  return (
    <section id="about">
      <AboutStyle>
        <div className="container">
          <div className="title">About</div>
          <h1>About: Technologies and Tools, Skills, Story, Dreams</h1>
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
    font-size: 40px;
    font-weight: bold;
  }
  @media only screen and (max-width: 1080px) {
    .container {
      margin: 10px 10px 10px 10px;
    }
`;
