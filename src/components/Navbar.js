import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <Link className="link" to="/">
          <h2>All things Scoby</h2>
        </Link>
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
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .link {
    text-decoration: none;
    color: black;
  }
`;

export default Navbar;
