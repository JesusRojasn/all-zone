import { useContext, useState } from "react";
import { Button, Form, Figure, InputGroup } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import MyContext from "../contexts/MyContext";


function AgregarPublicacion() {
  const [imagen, setImagen] = useState("")
  const [nombreProducto, setNombreProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [marca, setMarca] = useState("");


  const { lstProducto, setLstProducto, setProductos, productos, usuario,setProductosMostrados  } = useContext(MyContext);
  const navigate = useNavigate();

  const metodoimg = e => {
    const file = e.target.files[0];
    const read = new FileReader();
    read.onload = function () {
      const img = read.result
      setImagen(img)
      
    }
    read.readAsDataURL(file);
   
  }
  

  const registrarProducto = () => {

    
   const nuevoProducto = {
    MARCA: marca,  
    ID:Date.now(),
    TITULO: nombreProducto,
    DESCRIPCION: descripcion ,
    CATEGORIA: categoria,
    PRECIO: precio,
    VENDEDOR: usuario.nombre ,
    IMG: imagen
    };


    setProductos([nuevoProducto, ...productos])
    setLstProducto([nuevoProducto, ...lstProducto])
    setProductosMostrados([nuevoProducto, ...productos])
    navigate("/MisPublicaciones");
  };



  return (
    <div className="fondoFormulario">
      <Form className="formulario">
        <Figure
          style={{
            display: " flex",
            alignItems: "center",
            flexDirection: "column",
            width: "300px"
          }}
        >
         
          <Figure.Image src={imagen}/>

          <Form.Group>
            <Form.Control type="file"  name="file" onChange={(e) => metodoimg(e)} required/>
            <Form.Control.Feedback
              type="invalid"
              tooltip
            ></Form.Control.Feedback>
          </Form.Group>
        </Figure>

        <Form.Group className="caja">
          <Form.Label>Nombre de producto</Form.Label>
          <Form.Control type="text" placeholder="" onChange={(e) => setNombreProducto(e.target.value)} required isInvalid={!nombreProducto} />
          <Form.Control.Feedback type="invalid">Este campo es requerido</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="caja">
          <Form.Label>Marca</Form.Label>
          <InputGroup>
            <Form.Control aria-label="With number" onChange={(e) => setMarca(e.target.value)} required isInvalid={!marca}/>
            <Form.Control.Feedback type="invalid">Este campo es requerido</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="caja">
          <Form.Label>Descripción</Form.Label>
          <InputGroup>
            <Form.Control as="textarea" aria-label="With textarea" onChange={(e) => setDescripcion(e.target.value)}required isInvalid={!descripcion}/>
            <Form.Control.Feedback type="invalid">Este campo es requerido</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="caja">
          <Form.Label>Categoría</Form.Label>
          <Form.Select aria-label="Default select example" onChange={(e)=> setCategoria(e.target.value)} required isInvalid={!categoria}>
            <option value="">Selecciona categoría</option>
            <option value="NOTEBOOK">Notebooks</option>
            <option value="TELEFONO">Celulares</option>
            <option value="TELEVISOR">Televisores</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">Este campo es requerido</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="caja">
          <Form.Label>Precio</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control type="number" aria-label="Amount (to the nearest dollar)" onChange={(e) => setPrecio(e.target.value)}required isInvalid={!precio}/>
            <Form.Control.Feedback type="invalid">Este campo es requerido</Form.Control.Feedback>
            <InputGroup.Text></InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <div>
          <Button variant="secondary" className="btn-publicar" onClick={() => registrarProducto()}>
            Publicar
          </Button>

          <NavLink to="/MisPublicaciones">
            <Button variant="outline-secondary" className="btn-cancelar">
              Cancelar
            </Button>
          </NavLink>
        </div>
      </Form>
    </div>
  );
}

export default AgregarPublicacion;
