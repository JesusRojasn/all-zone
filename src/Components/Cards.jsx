import { Container, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyContext from "../contexts/MyContext";
import { useContext } from "react";

function Cards() {
  const { productos, setConectado, conectado } = useContext(MyContext);
  const navigate = useNavigate();

  const irDetalle = (id) => {
    if (conectado) {
      setConectado({ estado: true });
      navigate(`/Detalle/${id}`);
    } else {
      alert("Debes iniciar sesion");
      navigate("/");
    }
  };

  const { valorBusqueda } = useContext(MyContext);

  return (
    <div className="homeContainerSuperior">
      <Container>
        <div className="homeContainer">
          {productos
            .filter((p) => {
              return p.TITULO.toLowerCase().includes(
                valorBusqueda.toLowerCase()
              );
            })
            .map((p) => {
              return (
                <div className="cards" key={p.ID}>
                  <Card className="">
                    <Card.Img key={p.ID} variant="top" src={p.IMG} />

                    <Card.Body>
                      <Card.Text>{p.MARCA}</Card.Text>
                      <Card.Title>{p.TITULO}</Card.Title>

                      <Card.Text>$ {p.PRECIO}</Card.Text>
                      <div>
                        <Button
                          variant="secondary"
                          className="btn-publicar"
                          onClick={() => irDetalle(p.ID)} // Aquí pasamos el ID del producto a irDetalle
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
