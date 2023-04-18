import React, { useContext} from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MyContext from "../contexts/MyContext";

const MisPublicaciones = () => {
  const { lstProducto } = useContext(MyContext);

  console.log(lstProducto);
  return (
    <div>
      
      <div className="contenedorPublicaciones">
        {lstProducto.length > 0 ? (
          lstProducto.map((p) => {
            return (
              <div className="recuadro">
                <div className="ïmagen">
                  <img src={p.IMG} alt={p.TITULO} />
                </div>
                <div className="tabla">
                  <table>
                    <tr>
                      <td className="titulos"> Nombre </td>
                      <td className="titulos"> Marca </td>
                      <td className="titulos"> Descripcion</td>
                      <td className="titulos"> Precio </td>
                    </tr>
                    <tr>
                      <td> {p.TITULO} </td>
                      <td> {p.MARCA} </td>
                      <td>{p.DESCRIPCION}</td>
                      <td> $ {p.PRECIO} </td>
                    </tr>
                  </table>
                </div>
                <div className="botones">
                  <div className="editar">
                    <Button variant="secondary" className="btn-publicar">
                      <strong> EDITAR </strong>
                    </Button>
                  </div>
                  <div className="eliminar">
                    <Button
                      variant="outline-secondary"
                      className="btn-cancelar"
                    >
                      <strong> ELIMINAR </strong>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No tiene productos publicados</p>
        )}

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