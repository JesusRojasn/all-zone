import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Carrusel from "./Carrusel";
import Form from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";


function Cards() {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Notebooks</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Celulares</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Televisores</NavDropdown.Item>
              </NavDropdown>
            </Nav>

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


            <Nav className="menu-opciones">
              <NavLink to="/">Marketplace</NavLink>

              <NavLink to="/inicioSesion">Iniciar Sesion</NavLink>

              <NavLink to="/registro">Registro</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Carrusel></Carrusel>

      <div className="cards">

        <Card
          style={{ width: "18rem", borderColor: "#7DCDEF", borderWidth: "2px" }}
        >
          <Card.Img
            variant="top"
            src="https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.png?context=bWFzdGVyfHJvb3R8MzM4MDg3fGltYWdlL3BuZ3xoMGYvaGY3LzE0MDcwNjc0NzE4NzUwLnBuZ3xiMDUwZmMyMGMxODkxY2JkNTdhMjZmMWM1YWY1NWZmYTllMTg4Y2E1NGFjMjMzMjRkZjQ1YjA1ZjA3YTFjMThi"
          />
          <Card.Body>
            <Card.Title>
              Notebook ThinkPad X1 Carbon 9na Gen (14", Intel)
            </Card.Title>
            <Card.Text>$1.890.000</Card.Text>
            <Button variant="primary">Ver Más</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
