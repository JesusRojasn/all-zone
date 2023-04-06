import React, { useContext } from "react";
import SubMenuPriv from "../Components/SubMenupriv";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import MyContext from "../contexts/MyContext";

function  Detalle () {

  const { ID } = useParams();
  const { productos } = useContext(MyContext);

   // Buscamos el producto con el id correspondiente
  const productoDetalle = productos.find(p => p.ID === ID);
  
  console.log(ID)
  
  // Si no existe el producto, mostramos un mensaje de error
  if (!productoDetalle) {
    return (   <div>
    <h1>Producto no encontrado!</h1>
    
  </div>
  )
  }

  // Si existe el producto, mostramos su información


  return (

  
    
    <div>
      <SubMenuPriv></SubMenuPriv>
      <div className="detail-container">
        <img
          src={productoDetalle.IMG}
          alt="Imagen"
        ></img>
        <div className="detail">
          <h1 className="Nombreproducto">
          {productoDetalle.TITULO}
          </h1>
          <h6>{productoDetalle.MARCA}</h6>
          <h4>
            {" "}
            {productoDetalle.DESCRIPCION}
          </h4>
          <p>Vendedor: {productoDetalle.VENDEDOR}</p>
          <p>
            Precio:<strong> ${productoDetalle.PRECIO}</strong>
          </p>
          <div>
            <NavLink to="/">
            <Button variant="outline-secondary" className='btn-cancelar'>Volver</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;