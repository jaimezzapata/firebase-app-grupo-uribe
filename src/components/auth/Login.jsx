import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function iniciarSesion() {
    console.log(email, password);
  }
  return (
    <form>
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo"
        type="text"
        name=""
        id=""
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        type="text"
        name=""
        id=""
      />
      <input onClick={iniciarSesion} type="button" value="Iniciar Sesión" name="" id="" />
    </form>
  );
};

export default Login;
