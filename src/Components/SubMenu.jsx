import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function SubMenu() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Menu" id="navbarScrollingDropdown" >
            
              <NavDropdown.Item href="#action3">Notebooks</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Celulares</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Televisores</NavDropdown.Item>
            </NavDropdown>
            </Nav>

            <Nav className='menu-opciones'>
              <Nav.Link href="#action2">Marketplace</Nav.Link>

              <Nav.Link href="#action6">Mis Publicaciones</Nav.Link>

              <Nav.Link href="#action7">Usuario</Nav.Link>
            </Nav>

          
        </Navbar.Collapse>



      </Container>
    </Navbar>
  );
}

export default SubMenu;