import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

function Cards() {
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
              <div className="buttons">
                <NavLink to="/Detalle">
                  <button className="botonvermas">Ver Más</button>
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
