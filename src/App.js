import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registro from "./Views/Registro";
import MarketPublico from "./Views/MarketPublico";

import Footer from "./Components/Footer";
import InicioSesion from "./Views/InicioSesion";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>       
          <Route path="/" element={<MarketPublico></MarketPublico>}></Route>   
          <Route path="/Registro" element={<Registro></Registro>}></Route>
          <Route path="/InicioSesion" element={<InicioSesion></InicioSesion>}></Route>
        </Routes>
        
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
