import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthButtons from "./AuthButtons.js";
const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <Link className="link" to="/" title="Home">
          <h2>All things Scoby</h2>
        </Link>
        <AuthButtons />
      </div>
    </NavContainer>
  );
};
const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: #dbdd79;
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .link {
    text-decoration: none;
    color: black;
  }
`;

export default Navbar;
