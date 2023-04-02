import React from "react";
import SubMenuPriv from "../Components/SubMenupriv";
import { NavLink } from "react-router-dom";

const Detalle = () => {
  return (
    <div>
      <SubMenuPriv></SubMenuPriv>
      <div className="detail-container">
        <img
          src="https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.png?context=bWFzdGVyfHJvb3R8MzM4MDg3fGltYWdlL3BuZ3xoMGYvaGY3LzE0MDcwNjc0NzE4NzUwLnBuZ3xiMDUwZmMyMGMxODkxY2JkNTdhMjZmMWM1YWY1NWZmYTllMTg4Y2E1NGFjMjMzMjRkZjQ1YjA1ZjA3YTFjMThi"
          alt="Imagen"
        ></img>
        <div className="detail">
          <h1 className="Nombreproducto">
            Notebook ThinkPad X1 Carbon 9na Gen (14", Intel)
          </h1>
          <h6>ThinKPad</h6>
          <h4>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ab
            quibusdam aperiam aliquam dolorum qui, non eveniet distinctio! Unde
            facere sunt ducimus omnis ab consectetur illo. Molestias libero
            labore quaerat.
          </h4>
          <p>Vendedor: Jesus Rojas</p>
          <p>
            Precio:<strong> $199.000</strong>
          </p>
          <div className="buttons">
            <NavLink to="/">
              <button className="volver">Volver</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
