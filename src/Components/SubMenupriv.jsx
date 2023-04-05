import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SubMenuPriv() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto Menu">
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
            <NavLink
              className={({ isActive }) => (isActive ? "viewActiva" : "Menu")}
              to="/MarketPrivado"
            >
              Marketplace
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "viewActiva" : "Menu")}
              to="/mispublicaciones"
            >
              Mis Publicaciones
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "viewActiva" : "Menu")}
              to="/usuario"
            >
              Usuario
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SubMenuPriv;
