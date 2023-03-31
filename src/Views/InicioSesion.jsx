import React from "react";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

const InicioSesion = () => {
  return (
    <div className="fondoFormulario">
      <Navbar expand="lg">
        <Container expand="lg">
          <NavLink to="/">
            <img
              className="logo"
              src="https://allzone.es/img/just-deal-logo-1604397301.jpg"
              alt="logo"
            />
          </NavLink>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav className="menu-opciones">
              <NavLink to="/">Marketplace</NavLink>
              <NavLink to="/inicioSesion">Iniciar Sesion</NavLink>
              <NavLink to="/registro">Registro</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="formulario1">
        <div className="formulario">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Correo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
          <h6 className="OlvideContraseña">Olvide mi Contraseña</h6>
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;
