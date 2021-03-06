import React, { useState } from "react";
import styled from "styled-components";

function Feedback(props) {
  return (
    <section id="feedback">
      <FeedbackStyle>
        <div className="container">
          <div className="title">Feedback</div>
          Checklist comments
        </div>
      </FeedbackStyle>
    </section>
  );
}

export default Feedback;

const FeedbackStyle = styled.div`
  .container {
    display: flex;
    flex-direction: column;
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
