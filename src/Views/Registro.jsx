import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MyContext from "../contexts/MyContext";
import { useNavigate } from "react-router-dom";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { lstUsuario, setLstUsuario } = useContext(MyContext);
  const navigate = useNavigate();

  const registrarUsuario = () => {
    const nuevoUsuario = {
      email: email,
      clave: password,
      alias: alias,
      nombre: nombre,
    };
    setLstUsuario([...lstUsuario, nuevoUsuario]);
    alert("Te registraste con éxito");
    navigate("/InicioSesion");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre !== "" && alias !== "" && email !== "" && password !== "") {
      registrarUsuario();
    } else {
      alert("Por favor completa todos los campos");
    }
  };

  return (
    <div className="fondoFormulario">
      <Form className="formulario" onSubmit={handleSubmit}>
        <Form.Group className="caja" controlId="formGroupText">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="caja" controlId="formGroupAlias">
          <Form.Label>Alias</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={(e) => setAlias(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="caja" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="xxxx@mail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="caja" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="*******"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div>
          <Button type="submit" variant="secondary" className="btn-publicar">
            Crear cuenta
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Registro;
