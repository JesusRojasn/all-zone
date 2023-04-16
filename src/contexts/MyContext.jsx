import { createContext, useEffect, useState } from "react";

const MyContext = createContext({});

export const ConstextoProvider = (props) => {
  // llamado Json, simulando una API con un endpoint
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const res = await fetch("http://localhost:3000/productos.json");
    const data = await res.json();
    setProductos(data);
  };

  useEffect(() => {
    getProductos();
  }, []);

  const [valorBusqueda, setValorBusqueda] = useState("");

  const [valorCaja, setValorCaja] = useState("");

  const [valorFiltro, setValorFiltro] = useState("");

  

  const lstCategoria = ["TELEVISOR", "NOTEBOOK", "TELEFONO"]
    

  //validacion de usuario
  const [usuario, setUsuario] = useState({});

  const lstUsuario = [
    {
      nombre: "Consuelo Araya",
      alias: "carayao",
      email: "Carayao@gmail.com",
      clave: "carayao",
    },
    {
      nombre: "Jesus Rojas",
      alias: "JesusR",
      email: "JesusRojasn@gmail.com",
      clave: "1234",
    },
    {
      nombre: "Nelson González",
      alias: "filipgonzo",
      email: "f",
      clave: "f",
    },
  ];

  return (
    <MyContext.Provider
      value={{
        lstUsuario,
        productos,
        setUsuario,
        usuario,
        valorBusqueda,
        setValorBusqueda,
        setValorCaja,
        valorCaja,
        valorFiltro,
        setValorFiltro,
        lstCategoria,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContext;