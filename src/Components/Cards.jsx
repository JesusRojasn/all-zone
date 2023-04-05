import { Container, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function Cards( ) {

  

  return (
    <div>
      <div className="cards">
        <Container>
          <Card
            style={{
              width: "18rem",
              borderColor: "#7DCDEF",
              borderWidth: "2px",
            }}
          >
            <Card.Img
              variant="top"
              src="https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.png?context=bWFzdGVyfHJvb3R8MzM4MDg3fGltYWdlL3BuZ3xoMGYvaGY3LzE0MDcwNjc0NzE4NzUwLnBuZ3xiMDUwZmMyMGMxODkxY2JkNTdhMjZmMWM1YWY1NWZmYTllMTg4Y2E1NGFjMjMzMjRkZjQ1YjA1ZjA3YTFjMThi"
            />
            <Card.Body>
              <Card.Title>
                Notebook ThinkPad X1 Carbon 9na Gen (14", Intel)
              </Card.Title>
              <Card.Text>$1.890.000</Card.Text>
              <div>
                <NavLink to="/Detalle">
                <Button variant="secondary" className='btn-publicar'>Ver más</Button>
                </NavLink>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default Cards;
