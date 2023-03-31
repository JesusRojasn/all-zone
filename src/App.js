import React from "react";
import Menu from "./Components/Menu";
import SubMenu from "./Components/SubMenu";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from "./Views/Registro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioSesion from "./Views/InicioSesion";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        <SubMenu></SubMenu>
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
