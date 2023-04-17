import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MyContext from "../contexts/MyContext";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [nombreVacio, setNombreVacio] = useState(false);
  const [aliasVacio, setAliasVacio] = useState(false);
  const [emailVacio, setEmailVacio] = useState(false);
  const [passwordVacio, setPasswordVacio] = useState(false);

  const { lstUsuario, setLstUsuario } = useContext(MyContext);
  const navigate = useNavigate();

  const handleCloseModal = () => setShowModal(false);

  const registrarUsuario = () => {
    const nuevoUsuario = {
      email: email,
      clave: password,
      alias: alias,
      nombre: nombre,
    };
    setLstUsuario([...lstUsuario, nuevoUsuario]);
    setShowModal(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre !== "" && alias !== "" && email !== "" && password !== "") {
      registrarUsuario();
    } else {
      setNombreVacio(nombre === "");
      setAliasVacio(alias === "");
      setEmailVacio(email === "");
      setPasswordVacio(password === "");
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
            isInvalid={nombreVacio}
          />
          {nombreVacio && (
            <Form.Control.Feedback type="invalid">
              Faltan datos
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="caja" controlId="formGroupAlias">
          <Form.Label>Alias</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={(e) => setAlias(e.target.value)}
            isInvalid={aliasVacio}
          />
          {aliasVacio && (
            <Form.Control.Feedback type="invalid">
              Faltan datos
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="caja" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="xxxx@mail.com"
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={emailVacio}
          />
          {emailVacio && (
            <Form.Control.Feedback type="invalid">
              Faltan datos
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="caja" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="*******"
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={passwordVacio}
            />
            {passwordVacio && (
              <Form.Control.Feedback type="invalid">
                Faltan datos
              </Form.Control.Feedback>
            )}
        </Form.Group>
        <div>
          <Button type="submit" variant="secondary" className="btn-publicar">
            Crear cuenta
          </Button>
        </div>
      </Form>
      <Modal show={showModal} onHide={handleCloseModal} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Registro Exitoso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tu cuenta ha sido creada con éxito. Ahora puedes iniciar sesión.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal} className="btn-cerrar">
            Cerrar
          </Button>
          <Button variant="secondary" onClick={() => navigate("/InicioSesion")}className="btn-publicar">
            Iniciar Sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Registro;
