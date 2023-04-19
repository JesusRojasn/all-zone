import React from "react";

import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <Navbar expand="lg" >
      <Container fluid>
        <NavLink to="/">
          <img
            className="logo"
            src="http://localhost:3000/logo-allzone.jpg"
            alt="logo"
          />
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default Logo;
