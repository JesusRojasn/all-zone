import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';
import Stack from 'react-bootstrap/Stack';
import InputGroup from 'react-bootstrap/InputGroup';

function AgregarPublicacion() {
  return (

    <div className='fondoFormulario'>

      <Form className='formulario'>

        <Figure style={{display: " flex", alignItems:"center", flexDirection: "column" }} >
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.png?context=bWFzdGVyfHJvb3R8MzM4MDg3fGltYWdlL3BuZ3xoMGYvaGY3LzE0MDcwNjc0NzE4NzUwLnBuZ3xiMDUwZmMyMGMxODkxY2JkNTdhMjZmMWM1YWY1NWZmYTllMTg4Y2E1NGFjMjMzMjRkZjQ1YjA1ZjA3YTFjMThi"
          />
          <Form.Group className="position-relative mb-3">
            
            <Form.Control
              type="file"
              required
              name="file"
            //onChange={handleChange}
            //isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid" tooltip>

            </Form.Control.Feedback>
          </Form.Group>



        </Figure>


        <Form.Group className="caja">
          <Form.Label>Nombre de producto</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>


        <Form.Group className="caja">
          <Form.Label>Descripción</Form.Label>
          <InputGroup>

            <Form.Control as="textarea" aria-label="With textarea" />
          </InputGroup>
        </Form.Group>

        <Form.Group className="caja">
          <Form.Label>Categoría</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Selecciona categoría</option>
            <option value="1">Notebooks</option>
            <option value="2">Celulares</option>
            <option value="3">Televisores</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="caja">
          <Form.Label>Precio</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text></InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <div>
          <Stack className='btn-publicar' direction="horizontal">
            <Button variant="secondary">Save changes</Button>
            <Button variant="outline-secondary">Cancel</Button>
          </Stack>
        </div>

      </Form>


    </div>
  );
}

export default AgregarPublicacion;