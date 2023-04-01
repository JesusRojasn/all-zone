import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function SubMenuPriv() {
  return (
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
 
          <Nav className="menu-opciones">
            <NavLink to="/MarketPrivado">Marketplace</NavLink>

            <NavLink to="/mispublicaciones">Mis Publicaciones</NavLink>

            <NavLink to="/usuario">Usuario</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SubMenuPriv;
