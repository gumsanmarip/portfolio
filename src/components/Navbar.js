import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <NavbarStyle>
      <div className="header">
        <div className="logo">
          <h1>
            <Link to="/">Gumsan Marip</Link>
          </h1>
        </div>
        <div className="menu">
          <MenuStyle>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
          </MenuStyle>
        </div>
        <div className="nightmode">
          <button>nightmode</button>
        </div>
      </div>
    </NavbarStyle>
  );
}

export default Header;

const NavbarStyle = styled.div`
  padding: 1em;
  background-color: #fcfcfc;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0.9;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .menu {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-left: auto;
  }

  p {
    font-size: 1em;
  }
`;

const MenuStyle = styled.ul`
  li {
    display: inline-block;
    padding: 0.3rem 1rem;

    a {
      text-decoration: none;
      color: black;
      font-size: 1em;
    }
  }
`;
