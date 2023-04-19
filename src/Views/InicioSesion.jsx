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
  const [validated, setValidated] = useState(false); // Agregar estado para la validación
  const { lstUsuario, setUsuario } = useContext(MyContext);
  const navigate = useNavigate();

  //validacion de los datos de usuarios
  const validarUsuario = () => {
    const form = document.querySelector('.formulario'); // Obtener el formulario
    const isValid = form.checkValidity(); // Validar el formulario
    setValidated(true); // Establecer validated a true para mostrar los asteriscos

    if (isValid) { // Si el formulario es válido, continuar
      const usuarioValido = lstUsuario.find(
        (usuario) => usuario.email === email && usuario.clave === password
      );

      if (usuarioValido) {
        setUsuario({
          conectado: true,
          email: usuarioValido.email,
          nombre: usuarioValido.nombre,
          nombreUsuario: usuarioValido.alias,
        });
        navigate('/marketPrivado');
      } else {
        setShowModal(true);
      }
    } else { // Si el formulario no es válido, no hacer nada
      return;
    }
  };

  //renderizado
  return (
    <div className='fondoFormulario'>
      <Form className='formulario' noValidate validated={validated}> {/* Agregar las propiedades noValidate y validated al formulario */}
        <Form.Group className='caja' controlId='formGroupEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='example@mail.com'
            onChange={(e) => setEmail(e.target.value)}
            required
            isInvalid={!email && validated} // Agregar la propiedad isInvalid
          />
          <Form.Control.Feedback type='invalid'>
            Este campo es requerido
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='caja' controlId='formGroupPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='contraseña'
            onChange={(e) => setPassword(e.target.value)}
            required
            isInvalid={!password && validated} // Agregar la propiedad isInvalid
          />
          <Form.Control.Feedback type='invalid'>
            Este campo es requerido
          </Form.Control.Feedback>
        </Form.Group>

        <div className='{row}'>
          <NavLink to='/'>
            <Button variant='outline-secondary' className='btn-publicar'>
              Volver
            </Button>
          </NavLink>

          <Button
            variant='outline-info'
            className='btn-publicar'
            onClick={() => validarUsuario()}
          >
            Iniciar Sesión
          </Button>{' '}
        </div>
        <Form.Group
          as={Row}
          className='mb-3'
          controlId='formHorizontalCheck'
          style={{ marginTop: '20px' }}
        >
          <Col sm={{ span: 4, offset: 2 }}>
            <Form.Check label='Recordar' />
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
