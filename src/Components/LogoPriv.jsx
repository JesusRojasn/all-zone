import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function LogoPriv() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <NavLink to="/MarketPrivado">
          <img
            className="logo img-fluid"
            src={window.location.origin + "/logo-allzone.jpg"}
            alt="logo"
          />
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default LogoPriv;
