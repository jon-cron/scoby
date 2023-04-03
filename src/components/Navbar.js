import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthButtons from "./AuthButtons.js";
const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <Link className="link" to="/" title="Home">
          <h4>All things Scoby</h4>
        </Link>
        <div className="pages">
          <Link to="/products" className="link-btn">
            All Drinks
          </Link>
        </div>
        <AuthButtons />
      </div>
    </NavContainer>
  );
};
const NavContainer = styled.nav`
  color: grey;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: white;
  /* background: #315c64; */
  .link-btn {
    color: grey;
    /* transition: 0.2s ease all; */
  }
  .link-btn :hover {
    color: black;
  }
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 1000px) {
      width: 70vw;
    }
    width: 95vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .link {
    text-decoration: none;
    color: grey;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
`;

export default Navbar;
