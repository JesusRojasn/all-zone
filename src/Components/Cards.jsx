import { Container, Button, Card, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyContext from "../contexts/MyContext";
import { useContext, useState, useEffect } from "react";

function Cards() {
  const { valorBusqueda, valorFiltro, setValorFiltro, usuario, productos, setProductos, productosMostrados} =
    useContext(MyContext);
  const navigate = useNavigate();

  //const [productosMostrados, setProductosMostrados] = useState(productos);

  
  /*useEffect(() => {
    let nuevosProductos = productos;
    if (valorFiltro) {
      nuevosProductos = productos.filter(
        (producto) => producto.CATEGORIA === valorFiltro
      );
    }
    
      setValorFiltro("");
    }
    setProductos(nuevosProductos);
  }, [valorFiltro, valorBusqueda, productos]);*/

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const irDetalle = (id) => {
    if (usuario) {
      navigate(`/Detalle/${id}`);
    } else {
      handleShow();
    }
  };

  return (
    <div className="homeContainerSuperior">
      <Container>
        <div className="homeContainer">
          {productosMostrados.map((p) => {
            return (
              <Row>
              <div className="cards" key={p.ID}  >
                <Card >
                  <Card.Img key={p.ID} variant="top" src={p.IMG} />

                  <Card.Body>
                    <Card.Text>{p.MARCA}</Card.Text>
                    <Card.Title>{p.TITULO}</Card.Title>

                    <Card.Text>
                      {Number.parseFloat(p.PRECIO).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                        useGrouping: true,
                      })}
                    </Card.Text>
                    <div>
                      <Button
                        variant="outline-info"
                        className="btn-buscar"
                        onClick={() => irDetalle(p.ID)}
                      >
                        Ver Más
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              </Row>
            );
          })}
          
        </div>

        <Modal show={showModal} onHide={handleClose} className="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title>Iniciar sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Debes resgistrarte o iniciar sesión para ver más detalles.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn-cerrar-modal"
              onClick={() => navigate("/registro")}
            >
              Registrase
            </Button>
            <Button
              variant="outline-info"
              className="btn-publicar"
              onClick={() => navigate("/InicioSesion")}
            >
              Iniciar sesión
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Cards;
