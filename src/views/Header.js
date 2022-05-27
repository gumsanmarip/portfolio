import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavItems from "../navigation/NavItems";

function Header() {
  return (
    <div>
      <HeaderStyle>
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
            </MenuStyle>
          </div>
        </div>

        <div>
          <NavItems />
        </div>
      </HeaderStyle>
    </div>
  );
}

export default Header;

const HeaderStyle = styled.div`
  padding: 1em;
  background-color: #ffb0b0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
