import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioSesion from "./Views/InicioSesion";
import Registro from "./Views/Registro";

import Logo from "./Components/Logo";

import Footer from "./Components/Footer";
import AgregarPublicacion from "./Views/AgregarPublicacion";
import MarketPublico from "./Views/MarketPublico";
import MarketPrivado from "./Views/MarketPrivado";
import Usuario from "./Views/Usuario";
import MisPublicaciones from "./Views/MisPublicaciones";
import Detalle from "./Views/Detalle";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Logo></Logo>
      
        <Routes>       
          <Route path="/" element={<MarketPublico></MarketPublico>}></Route>   
          <Route path="/registro" element={<Registro></Registro>}></Route>
          <Route path="/InicioSesion" element={<InicioSesion></InicioSesion>}></Route>
          <Route path="/publicar" element={<AgregarPublicacion></AgregarPublicacion>}></Route>
          <Route path="/MarketPrivado" element={<MarketPrivado></MarketPrivado>}></Route>
          <Route path="/usuario" element={<Usuario></Usuario>}></Route>
          <Route path="/MisPublicaciones" element={<MisPublicaciones></MisPublicaciones>}></Route>
          <Route path="/Detalle" element={<Detalle></Detalle>}></Route>
        </Routes>
        
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
