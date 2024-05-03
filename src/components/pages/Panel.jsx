import React, { useState } from 'react';
import { useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { initDatabase } from '../../config/firebaseConfig';
import Swal from 'sweetalert2';

const Panel = ({ title }) => {
  const [users, setUsers] = useState([])
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

  const eliminarUsuario = async (id) => {
    let userDelete = doc(initDatabase, "usuarios", id)
    console.log(userDelete)
    await deleteDoc(userDelete)
    consultarUsuarios()
  }
  const confirmarAccion = (id) => {
    Swal.fire({
      title: "¿Está seguro de eliminar este usuario: " + id,
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado",
          text: "El usuario se ha eliminado.",
          icon: "success"
        });
        eliminarUsuario(id)
      }
    });
  }
  return (
    <main className="section">
      <h2>{title}</h2>
      {
        users.map((user) => (
          <section key={user.id}>
            <h3>User: {user.user}</h3>
            <h3>Password: {user.password} </h3>
            <h3>Email: {user.email} </h3>
            <div>
              <button>Editar</button>
              <button type='button' onClick={() => confirmarAccion(user.id)}>Eliminar</button>
            </div>
          </section>
        ))
      }
    </main>
  );
};

export default Panel;
