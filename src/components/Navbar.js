import React, { useState } from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { purple } from "@mui/material/colors";

export default function Navbar() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <NavbarStyle>
      <div className="navbar">
        <div className="logo">
          <h1>
            <Link to="#top">Gumsan Marip</Link>
          </h1>
        </div>
        <MenuStyle>
          <div className="menu">
            <li>
              <Link to="#about" role="button">
                About
              </Link>
            </li>
            <li>
              <Link to="#projects" role="button">
                Projects
              </Link>
            </li>
            <li>
              <Link to="#contact" role="button">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#feedback" role="button">
                Feedback
              </Link>
            </li>
            <div className="theme-mode">
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
              >
                <ToggleButton size="small" value="light">
                  <LightModeIcon />
                </ToggleButton>
                <ToggleButton size="small" value="dark">
                  <DarkModeIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </MenuStyle>
      </div>
    </NavbarStyle>
  );
}

const NavbarStyle = styled.div`
  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    opacity: 0.9;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #efdecd;
    align-items: center;
  }
  .logo {
    margin-left: 50px;
  }
  .logo a {
    color: black;
    text-decoration: none;
    font-size: 1.2em;
  }
  @media only screen and (max-width: 1080px) {
    width: inherit;
    .logo a {
      font-size: 0.5em;
    }
  }
`;

const MenuStyle = styled.ul`
  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
  }
  .night-mode {
    margin-right: 50px;
  }
  li {
    display: inline-block;
    padding: 0.3rem 1rem;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 1.5em;
  }

  @media only screen and (max-width: 1080px) {
  }
`;
