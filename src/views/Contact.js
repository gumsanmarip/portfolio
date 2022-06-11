import React, { useState } from "react";
import styled1 from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("name:", name, "email: ", email, "message: ", message);
  }

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  return (
    <section id="contact">
      <ContactStyle>
        <div className="title">Contact</div>
        <div className="container">
          <div className="email">
            <div className="contact-box">
              <form>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "40ch" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    value={name}
                    onInput={(e) => setMessage(e.target.value)}
                    id="contact-name"
                    label="Name"
                    variant="outlined"
                  />
                  <TextField
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                    id="contact-email"
                    label="Email"
                    variant="outlined"
                  />
                  <TextField
                    value={message}
                    onInput={(e) => setMessage(e.target.value)}
                    id="contact-message"
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Leave me some feeback here!"
                    variant="outlined"
                  />
                  <div className="send">
                    <ColorButton variant="contained">Send</ColorButton>
                  </div>
                </Box>
              </form>
            </div>
          </div>
          <div className="links">
            <MailIcon />
            gumsanmarip@gmail.com
            <LinkedInIcon />
            https://www.linkedin.com/in/gumsan-marip/
            <GitHubIcon />
            https://github.com/gumsanmarip
          </div>
        </div>
      </ContactStyle>
    </section>
  );
}
export default Contact;
const ContactStyle = styled1.div`
  .title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 10px 10px 100px 10px;
  }
  }
  .contact-box {
    display: flex;
    justify-content: space-between;
    margin: 10px 50px 10px 50px;
  }
  .send {
    display: flex;
    justify-content: center;
  }
  .links {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px 50px 10px 50px;
  }
  @media only screen and (max-width: 1080px) {
    .container {
      margin: 10px 10px 10px 10px;
      flex-direction: column;
      justify-content: center;
    }
    .contact-box {
      justify-content: center;
    }
    .links {
      justify-content: center;
    }
    
`;
