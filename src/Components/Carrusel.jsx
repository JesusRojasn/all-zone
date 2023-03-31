import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Carrusel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.loginstore.com/imagenes/banner-superior-laptops-notebooks-ofertas-2.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tecstore.pe/media/TEC_Banner-Web_Categoria_CELULARES.jpg"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tecnoshop.com.bo/wp-content/uploads/2022/07/Banner-Televisores.png"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrusel;
