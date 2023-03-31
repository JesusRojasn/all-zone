import React from "react";
import Buscador from "../Components/Buscador";
import SubMenu from "../Components/SubMenu";
import Carrusel from "../Components/Carrusel";
import Cards from "../Components/Cards";

const MarketPublico = () => {
  return (
    <div>
      <Buscador></Buscador>
      <SubMenu></SubMenu>
      <Carrusel></Carrusel>
      <Cards></Cards>
    </div>
  );
};

export default MarketPublico;
