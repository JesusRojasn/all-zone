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


  const { valorCaja, setValorBusqueda, valorBusqueda,setValorCaja, lstCategoria, setValorFiltro, valorFiltro, productos, setProductos,productosMostrados,setProductosMostrados, usuario, setUsuario } = useContext(MyContext);

 const handleSelect = (value) => {
  let nuevosProductos = []
   if(value !== ""){
      nuevosProductos = productos.filter((producto) => producto.CATEGORIA === value);
      setProductosMostrados(nuevosProductos);
      console.log(productos)
   } else {
    setProductosMostrados(productos);
    console.log(productos)
   }
   
    
  };

    const buscar = (valorBusqueda) => {
      const nuevosProductos = productos.filter((producto) =>
      producto.TITULO.toLowerCase().includes(valorBusqueda.toLowerCase())
    );
    setProductosMostrados(nuevosProductos);
    }

   return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top" fixed="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto Menu">
            <NavDropdown id="nav-dropdown-dark-example" title="Categorías" onSelect={handleSelect}>
              <NavDropdown.Item eventKey="">seleccione categoria</NavDropdown.Item>
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
    onChange={(e) => buscar(e.target.value)}
    
  />
  {/* <Button
    variant="outline-info"
    className="btn-buscar"
    onClick={() => setValorBusqueda(valorCaja)}
  > Buscar  </Button> */}
</Form>

          

          <Nav className=" ms-auto menu-opciones">
            { !usuario.conectado ?
              <>
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


            </>
            :
            <>

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

            <NavLink
              className={({ isActive }) => (isActive ? "viewActiva" : "Menu")}
              to="/"
              onClick={() => setUsuario(false)}
            >
              {" "}
              Cerrar Sesion
            </NavLink>
            </>}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default SubMenu;
