import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useContext, useState } from 'react';
import MyContext from '../contexts/MyContext';
import { useNavigate } from 'react-router-dom';

const InicioSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      alert("Algun dato ingresado es incorrecto");
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

        <Button variant="secondary" className='btn-publicar' onClick={() => validarUsuario()}>Iniciar Sesión</Button>{' '}

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Recordar" />
          </Col>
        </Form.Group>
        <div className="olvidarcontraseña">
          Olvidé mi contraseña
        </div>

      </Form>

    </div>
  );
}

export default InicioSesion;