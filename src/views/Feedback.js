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
    font-weight: bold;
    font-size: 30px;
  }
`;
