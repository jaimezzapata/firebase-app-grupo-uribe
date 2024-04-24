import { useState } from "react";
import { initDatabase } from "../../config/firebaseConfig";
import { collection, getDocs, deleteDoc } from "firebase/firestore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  async function consultarUsuarios() {
    let colectionUsuarios = collection(initDatabase, "usuarios");
    let resultado = await getDocs(colectionUsuarios);
    let infoUsuarios = resultado.docs
    console.log(colectionUsuarios);
    console.log(infoUsuarios);
    console.log(infoUsuarios.map((doc)=> ({...doc.data()})));
  }
  consultarUsuarios();

  function buscarUsuario() {}
  function iniciarSesion() {
    console.log(email, password);
  }
  return (
    <form>
      <input
        onChange={(e) => setUser(e.target.value)}
        placeholder="Usuario"
        type="text"
        name=""
        id=""
      />
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
      <input
        onClick={iniciarSesion}
        type="button"
        value="Iniciar Sesión"
        name=""
        id=""
      />
    </form>
  );
};

export default Login;
