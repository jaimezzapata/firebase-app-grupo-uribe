import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router

const SideBar = () => {
    return (
        <header className="sidebar">
            <h2>Panel de Control</h2>
            <ul>
                <li><Link to="/home">Dashboard</Link></li>
                <li><Link to="/usuarios">Usuarios</Link></li>
                <li><Link to="/">Cerrar Sesión</Link></li>
            </ul>
        </header>
    );
};

export default SideBar;
