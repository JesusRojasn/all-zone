import { createContext, useEffect, useState } from "react";

const MyContext = createContext({});

export const ConstextoProvider = (props) => {

    // llamado Json, simulando una API con un endpoint
    const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const res = await fetch(window.location.origin+'/productos.json');
    const data = await res.json();
    setProductos(data);
  }; 

  useEffect(() => {
    getProductos();
  }, []);

    //validacion de usuario

  const [conectado, setConectado] = useState({});

    const lstUsuario=[
        {
            nombre: 'Consuelo Araya',
            alias: 'carayao',
            email:'Carayao@gmail.com',
            clave: 'carayao'
        },
        {
            nombre: 'Jesus Rojas',
            alias: 'JesusR',
            email:'JesusRojasn@gmail.com',
            clave: 'jesusrojasn'
        },
        {   
            nombre: 'Nelson González',
            alias: 'filipgonzo',
            email:'f',
            clave: 'f'
        },
    ];

    return(
        <MyContext.Provider value={{lstUsuario, productos, setConectado, conectado}}>
            {props.children}
        </MyContext.Provider>
    )

}

export default MyContext;
