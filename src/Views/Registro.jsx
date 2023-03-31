import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Registro() {
  return (
    <div className='fondoFormulario'>
    <Form className='formulario'>
    <Form.Group className="caja" controlId="formGroupEmail">
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="caja" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="xxxx@mail.com" />
      </Form.Group>

      <Form.Group className="caja" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="*******" />
      </Form.Group>
      <div>
        <Button className='boton'>Crear Cuenta</Button>{' '}
      </div>
      
    </Form>
    
    </div>
  );
}

export default Registro;