import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function Cards() {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.loginstore.com/imagenes/banner-superior-laptops-notebooks-ofertas-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tecstore.pe/media/TEC_Banner-Web_Categoria_CELULARES.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tecnoshop.com.bo/wp-content/uploads/2022/07/Banner-Televisores.png"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <div className='cards'>
    <Card style={{ width: '18rem', borderColor:'#7DCDEF', borderWidth:"2px" }}>
      <Card.Img variant="top" src="https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.png?context=bWFzdGVyfHJvb3R8MzM4MDg3fGltYWdlL3BuZ3xoMGYvaGY3LzE0MDcwNjc0NzE4NzUwLnBuZ3xiMDUwZmMyMGMxODkxY2JkNTdhMjZmMWM1YWY1NWZmYTllMTg4Y2E1NGFjMjMzMjRkZjQ1YjA1ZjA3YTFjMThi" />
      <Card.Body>
        <Card.Title>Notebook ThinkPad X1 Carbon 9na Gen (14", Intel)</Card.Title>
        <Card.Text>
          $1.890.000
        </Card.Text>
        <Button variant="primary">Ver Más</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default Cards;