import React, { useContext} from "react";
import SubMenuPriv from "../Components/SubMenupriv";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MyContext from "../contexts/MyContext";

const MisPublicaciones = () => {
  const { lstProducto } = useContext(MyContext);

  return (
    <div>
      <SubMenuPriv />
      <div className="contenedorPublicaciones">
        {lstProducto.length > 0 ? (
          lstProducto.map((p) => {
            return (
              <div className="recuadro">
                <div className="ïmagen">
                  <img src={p.imagen} alt={p.nombre} />
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
                      <td> {p.nombre} </td>
                      <td> {p.marca} </td>
                      <td>{p.descripcion}</td>
                      <td> $ {p.precio} </td>
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