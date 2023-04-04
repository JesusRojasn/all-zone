import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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

        <Button className='boton'>Iniciar Sesión</Button>{' '}

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
