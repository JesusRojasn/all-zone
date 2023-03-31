import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <div>
      <div className="cards">
        <Card
          style={{ width: "18rem", borderColor: "#7DCDEF", borderWidth: "2px" }}
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
            <Button variant="primary">Ver Más</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
