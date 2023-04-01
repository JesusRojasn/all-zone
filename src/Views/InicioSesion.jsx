import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function InicioSesion() {
  return (
    <div className='fondoFormulario'>
    <Form className='formulario'>

      <Form.Group className="caja" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="xxxx@mail.com" />
      </Form.Group>

      <Form.Group className="caja" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="*******" />
      </Form.Group>
      <div className='boton'>
        <Button >Iniciar Sesión</Button>{' '}
      </div>
      <div className="olvidarcontraseña">
      Olvidé mi contraseña
      </div>
      
    </Form>
    
    </div>
  );
}

export default InicioSesion;
