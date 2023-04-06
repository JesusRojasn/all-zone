import React from "react";
import SubMenuPriv from "../Components/SubMenupriv";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MisPublicaciones = () => {
  return (
    <div>
      <SubMenuPriv />
      <div className="contenedorPublicaciones">
        <div className="recuadro">
          <div className="ïmagen">
            <img
              src="https://cdnx.jumpseller.com/bhagatty/image/28431938/resize/610/610?1665774046"
              alt="notebook"
            />
          </div>
          <div className="tabla">
            <table>
              <tr>
                <td className="titulos"> Nombre </td>
                <td className="titulos"> Descripcion</td>
                <td className="titulos"> Precio </td>
              </tr>
              <tr>
                <td> NOTEBOOK THINKPAD X1 CARBON 9NA GEN (14", INTEL) </td>
                <td>NOTEBOOK THINKPAD X1 CARBON 9NA GEN (14", INTEL)</td>
                <td> $ 5.000.000 </td>
              </tr>
            </table>
          </div>
          <div className="botones">
            <div className="editar">
              <Button variant="secondary" className="btn-publicar"
                
                /*style={{
                  height: "5vh",
                  width: "8vw",
                  borderRadius: "30% 30% 30% 30%",
                  backgroundColor: "rgb(86,209, 200)",
                  color: "black",
                  border: "1px rgb(86,209, 200) ",
                }}*/
              >
                <strong> EDITAR </strong>
              </Button>
            </div>
            <div className="eliminar">
              <Button variant="outline-secondary" className="btn-cancelar"
                
                /* style={{
                  height: "5vh",
                  width: "8vw",
                  borderRadius: "30% 30% 30% 30%",
                  backgroundColor: "rgb(255,87, 87)",
                  color: "black",
                  border: "1px rgb(255,87, 87) ",
                }} */
              >
                <strong> ELIMINAR </strong>
              </Button>
            </div>
            
          </div>
        </div>

        <NavLink to="/publicar" className="agregarPublicacion">
          <Button variant="secondary" className="btn-publicar">

            Nueva Publicacion

          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default MisPublicaciones;
