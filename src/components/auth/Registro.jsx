import { useEffect, useState } from "react";
import { initDatabase } from "../../config/firebaseConfig";
import { collection, getDocs, deleteDoc, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Registro = () => {
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    let redireccion = useNavigate()

    async function consultarUsuarios() {
        let colectionUsuarios = collection(initDatabase, "usuarios");
        let resultado = await getDocs(colectionUsuarios);
        let infoUsuarios = resultado.docs
        setUsers(infoUsuarios.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(infoUsuarios.map((doc) => ({ ...doc.data() })));
    }
    useEffect(() => {
        consultarUsuarios()
    }, [])
    function buscarUsuario() {
        let userExist = users.some((item) => item.user === user)
        return userExist
    }
    async function crearUsuario() {
        let nuevoUsuario = collection(initDatabase, 'usuarios')
        let usuario = {
            user, password, email
        }
        await addDoc(nuevoUsuario, usuario)
    }
    function registrarUsuario() {
        if (buscarUsuario()) {
            Swal.fire({
                title: "Error!",
                text: "Usuario ya existe en la base de datos!",
                icon: "error"
            });
        } else {
            crearUsuario()
            Swal.fire({
                title: "Correcto",
                text: "Usuarios registrado correctamente",
                icon: "success"
            });
            redireccion('/')
        }
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
            <input onChange={(e) => { console.log(e.target.files[0]) }} type="file" />
            <input
                onClick={registrarUsuario}
                type="button"
                value="Registrar Usuario"
                name=""
                id=""
            />
        </form>
    );
};

export default Registro;
