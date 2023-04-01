import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Figure from 'react-bootstrap/Figure';

function AgregarPublicacion() {
  return (
    
    <div className='fondoFormulario'>

      <Form className='formulario'>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.png?context=bWFzdGVyfHJvb3R8MzM4MDg3fGltYWdlL3BuZ3xoMGYvaGY3LzE0MDcwNjc0NzE4NzUwLnBuZ3xiMDUwZmMyMGMxODkxY2JkNTdhMjZmMWM1YWY1NWZmYTllMTg4Y2E1NGFjMjMzMjRkZjQ1YjA1ZjA3YTFjMThi"
          />
          <Figure.Caption>
            Cargar Imagen
          </Figure.Caption>
        </Figure>

<div className='nombresPublicar'>
        <Form.Group className="caja" controlId="formGroupEmail">
          <Form.Label>Nombre de producto</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        </div>

        <Form.Group className="caja" controlId="formGroupEmail">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        <Form.Group className="caja" controlId="formGroupPassword">
          
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Categoría
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Notebook</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Celulares</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Televisores</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Form.Group className="caja" controlId="formGroupEmail">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" placeholder="XXXXX" />
        </Form.Group>
        <div>
          <Button className='boton'>Publicar</Button>{' '}
        </div>

      </Form>


    </div>
  );
}

export default AgregarPublicacion;