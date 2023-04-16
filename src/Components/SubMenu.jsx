import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import MyContext from "../contexts/MyContext";

function SubMenu() {


  const { valorCaja, setValorBusqueda, setValorCaja, lstCategoria, setValorFiltro, valorFiltro } = useContext(MyContext);

 const handleSelect = (eventKey) => {
  setValorFiltro(eventKey);
 
   };

   useEffect(() => {
   setValorFiltro(`${valorFiltro}`)
   }, [valorFiltro]);
   console.log(valorFiltro)



   return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top" fixed="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto Menu">
            <NavDropdown id="nav-dropdown-dark-example" title="Categorías" onSelect={handleSelect}>
              <NavDropdown.Item eventKey={lstCategoria[0]}>{lstCategoria[0]}</NavDropdown.Item>
              <NavDropdown.Item eventKey={lstCategoria[1]}>{lstCategoria[1]}</NavDropdown.Item>
              <NavDropdown.Item eventKey={lstCategoria[2]}>{lstCategoria[2]}</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
  <Form.Control
    type="search"
    placeholder="Buscar"
    className="me-2"
    aria-label="Buscar"
    value={valorCaja}
    onChange={(e) => setValorCaja(e.target.value)}
    onInput={(e) => {
      if (e.target.value === "") {
        setValorBusqueda("");
      }
    }}
  />
  <Button
    variant="outline-info"
    className="btn-buscar"
    onClick={() => setValorBusqueda(valorCaja)}
  >
    Buscar
  </Button>
</Form>
         

          <Nav className=" ms-auto menu-opciones">
            <NavLink
              className={({ isActive }) => (isActive ? "viewActiva" : "Menu")}
              to="/inicioSesion"
            >
              Iniciar Sesion
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "viewActiva" : "Menu")}
              to="/registro"
            >
              Registro
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default SubMenu;
