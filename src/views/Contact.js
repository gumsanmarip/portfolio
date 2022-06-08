import React, { useState } from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact(props) {
  return (
    <section id="contact">
      <ContactStyle>
        <div className="title">Contact</div>
        <div className="container">
          <div className="links">
            <MailIcon fontSize="medium">gumsanmarip@gmail.com</MailIcon>
            <LinkedInIcon />
            <GitHubIcon />
          </div>
          <div className="send">send email</div>
        </div>
      </ContactStyle>
    </section>
  );
}
export default Contact;
const ContactStyle = styled.div`
  .title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 10px 100px 10px;
  }
  }
  .links {
    display: flex;
    flex-direction: column;
  }
  .send {
  }
`;
