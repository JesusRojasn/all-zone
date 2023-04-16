import { Container, Button, Card, Modal} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyContext from "../contexts/MyContext";
import { useContext, useState, useEffect } from "react";

function Cards() {
  const { productos, conectado } = useContext(MyContext);
  const navigate = useNavigate();

  const [productosMostrados, setProductosMostrados] = useState(productos);
  const { valorBusqueda, valorFiltro, setValorFiltro, usuario} = useContext(MyContext);

  useEffect(() => {
    let nuevosProductos = productos;
    if (valorFiltro) {
      nuevosProductos = productos.filter(
        (producto) => producto.CATEGORIA === valorFiltro
      );
    }
    if (valorBusqueda) {
      nuevosProductos = nuevosProductos.filter((producto) =>
        producto.TITULO.toLowerCase().includes(valorBusqueda.toLowerCase())
      );
      setValorFiltro('');
   
    }
    setProductosMostrados(nuevosProductos);
  }, [valorFiltro, valorBusqueda, productos]);

  

  const irDetalle = (id) => {
    if (usuario) {
      navigate(`/Detalle/${id}`);
    } else {
      alert("Debes iniciar sesion");
      navigate("/");
    }
  };

  return (
    <div className="homeContainerSuperior">
      <Container>
        <div className="homeContainer">
          {productosMostrados.map((p) => {
            return (
              <div className="cards" key={p.ID}>
                <Card className="">
                  <Card.Img key={p.ID} variant="top" src={p.IMG} />

                  <Card.Body>
                    <Card.Text>{p.MARCA}</Card.Text>
                    <Card.Title>{p.TITULO}</Card.Title>

                    <Card.Text>{Number.parseFloat(p.PRECIO).toLocaleString("es-AR", {style: "currency", currency: "ARS", minimumFractionDigits: 0, maximumFractionDigits: 0, useGrouping: true})}</Card.Text>
                    <div>
                      <Button
                        variant="secondary"
                        className="btn-publicar"
                        onClick={() => irDetalle(p.ID)}
                      >
                        Ver Más
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Cards;



