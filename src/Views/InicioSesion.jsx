import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { useContext, useState } from 'react';
import MyContext from '../contexts/MyContext';
import { useNavigate, NavLink } from 'react-router-dom';

const InicioSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const { lstUsuario, setUsuario} = useContext(MyContext);
  const navigate = useNavigate();

  //validacion de los datos de usuarios

  const validarUsuario = () => {
    const usuarioValido = lstUsuario.find((usuario) => usuario.email === email && usuario.clave === password);

    if (usuarioValido) {
      setUsuario({ conectado: true, 
                   email: usuarioValido.email, 
                   nombre: usuarioValido.nombre, 
                   nombreUsuario: usuarioValido.alias});
      navigate('/marketPrivado');
      
    } else {
      setShowModal(true);
    }

    console.log(usuarioValido);
  };
  

  //renderizado
  return (
    <div className='fondoFormulario'>
      <Form className='formulario'>

        <Form.Group className="caja" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="example@mail.com" onChange={(e) => setEmail (e.target.value)} />
        </Form.Group>

        <Form.Group className="caja" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="contraseña" onChange={(e) => setPassword (e.target.value)} />
        </Form.Group>

<div className='{row}'>
        <NavLink to="/">
              <Button variant="outline-secondary" className="btn-publicar">
                Volver
              </Button>
            </NavLink>

        <Button variant="outline-info" className="btn-publicar" onClick={() => validarUsuario()}>Iniciar Sesión</Button>{' '}
        </div>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck" style={{marginTop:"20px"}}>
          <Col sm={{ span: 4, offset: 2 }}>
            <Form.Check label="Recordar" />
          </Col>
        </Form.Group>
        <div className="olvidarcontraseña">
          Olvidé mi contraseña
        </div>

      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Algun dato ingresado es incorrecto</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" className="btn-publicar" onClick={() => setShowModal(false)}>
           Volver a intentar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default InicioSesion;
