import React, { useState } from "react";
import styled from "styled-components";

function Footer(props) {
  return (
    <FooterStyle>
      <div className="footer">
        <p>Social</p>
        <p>Copyright 2022 Marip Inc All Rights Reserved</p>
      </div>
    </FooterStyle>
  );
}
export default Footer;

const FooterStyle = styled.div`
  .footer {
    margin-top: 50px;
    padding: 1em;
    background-color: #ffb0b0;
    color: white;

    left: 0;
    bottom: 0;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  p {
    font-size: 0.75em;
  }
`;
