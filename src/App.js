import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioSesion from "./Views/InicioSesion";
import Registro from "./Views/Registro";


import Footer from "./Components/Footer";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>       
          <Route path="/" element={<Cards></Cards>}></Route>   
          <Route path="/registro" element={<Registro></Registro>}></Route>
          <Route path="/acceso" element={<InicioSesion></InicioSesion>}></Route>
        </Routes>
        
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
