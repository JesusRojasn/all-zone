import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import MyContext from "../contexts/MyContext";
import { useContext } from "react";

function Cards() {
  const {productos} = useContext(MyContext);
  const navigate = useNavigate();

  const irDetalle = (id) => {
    navigate(`/Detalle/${id}`);
  }


 
  return (
    <div className="homeContainerSuperior">
      <Container>
      <div className="homeContainer">
       
    {
      productos.map((p) => {
        return(
          <div  className="cards"   key={p.ID} >
            
          
             
              <Card className=""
              style={{
                height: "55vh"
                }}
              >
                
                <Card.Img key={p.ID}
                  variant="top"
                  src={p.IMG}
                  
                />
                
                <Card.Body>
                  <Card.Text >{p.MARCA}</Card.Text>
                  <Card.Title >
                    {p.TITULO}
                  </Card.Title>
                  
                  <Card.Text>$ {p.PRECIO}</Card.Text>
                  <div className="buttons">
                    
                    <button className="botonvermas" 
                    onClick={() => irDetalle(p.ID)} // Aquí pasamos el ID del producto a irDetalle
                    >
                      Ver Más</button>
                    
                  </div>
                </Card.Body>
              </Card>
            

        </div>
        )
        
        
      
      })
    }
    </div>
    </Container>

    </div>
  );
};

export default Cards;