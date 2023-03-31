import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Buscador() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <NavLink to="/">
          <img
            className="logo"
            src="https://allzone.es/img/just-deal-logo-1604397301.jpg"
            alt="logo"
          />
        </NavLink>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Buscar"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Buscador;
