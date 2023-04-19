import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import MyContext from "../contexts/MyContext";

function Detalle() {
  const { ID } = useParams();
  const { productos } = useContext(MyContext);
  const productoDetalle = productos.find((p) => p.ID == ID); // Buscamos el producto con el id correspondiente
  
  if (!productoDetalle) { // Si no existe el producto, mostramos un mensaje de error
    return (
      <div>
        <h1>Producto no encontrado!</h1>
      </div>
    );
  } 

  
// Si existe el producto, mostramos su información en return
  return (
    <div>
      <div className="detail-container">
        <img src={productoDetalle.IMG} alt="Imagen" ></img>
        <div className="detail">
          <h1 className="Nombreproducto">{productoDetalle.TITULO}</h1>
          <h6>{productoDetalle.MARCA}</h6>
          <h4> {productoDetalle.DESCRIPCION}</h4>
          <p>Vendedor: {productoDetalle.VENDEDOR}</p>
          <p>
            Precio:<strong>{Number.parseFloat(productoDetalle.PRECIO).toLocaleString("es-AR", {style: "currency", currency: "ARS", minimumFractionDigits: 0, maximumFractionDigits: 0, useGrouping: true})}</strong>
          </p>
          <div>
            <NavLink to="/MarketPrivado">
              <Button variant="outline-secondary" className="btn-cancelar">Volver</Button>              
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detalle;
