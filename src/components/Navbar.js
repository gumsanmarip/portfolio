import React, { useState } from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
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
            <div className="night-mode">
              <button>night mode</button>
            </div>
          </div>
        </MenuStyle>
      </div>
    </NavbarStyle>
  );
}

export default Navbar;

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
  .logo a {
    color: black;
    margin-left: 50px;
  }
  a {
    text-decoration: none;
    font-size: 1em;
  }
  @media only screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
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
`;
