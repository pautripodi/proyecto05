import { useState } from "react";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [contraseña, setContraseña] = useState(false);

  {
    /*para que funcione solo cuando voy escribiendo paso el if para const clave*/
  }
  const handleClick = () => {
    if (password === "holitas") {
      setContraseña(true);
    } else {
      setContraseña(false);
    }
  };
  const handleChange = (e) => {
    setUsuario(e.target.value);
  };
  const laClave = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  return (
    <>
      <h1>Hola {usuario} </h1>
      <input type="text" onChange={handleChange} placeholder="Usuario" />
      <br />
      <input type="password" onChange={laClave} placeholder="Contraseña" />
      <hr />
      <button onClick={handleClick}>Entrar</button>

      {/*si contraseña es verdadero se muestra entonces el p*/}
      {contraseña && <p>¡Bienvenide a mi sitio web!</p>}
    </>
  );
}

export default App;
