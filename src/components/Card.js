import React, { useState } from "react";
import styled from "styled-components";

function Card(props) {
  return (
    <CardStyle>
      <section>
        <div className="title">Project Name and Number</div>
        <div className="info">Github Link, Images, Project summary</div>
        <div className="picture">Pictures</div>
      </section>
      <section>
        <div className="title">Project Name and Number</div>
        <div className="info">Github Link, Images, Project summary</div>
        <div className="picture">Pictures</div>
      </section>
      <section>
        <div className="title">Project Name and Number</div>
        <div className="info">Github Link, Images, Project summary</div>
        <div className="picture">Pictures</div>
      </section>
      <section>
        <div className="title">Project Name and Number</div>
        <div className="info">Github Link, Images, Project summary</div>
        <div className="picture">Pictures</div>
      </section>
    </CardStyle>
  );
}
export default Card;
const CardStyle = styled.div`
  .title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }
`;
