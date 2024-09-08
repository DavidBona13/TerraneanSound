import React from "react";
import '../../src/assets/css/header.css';
import { FaFilter, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

    return (
        <header>
            <div className="divHeader">
                <h1>TerraneanSound</h1>
                <div className="divBusqueda">
                    <FaSearch className="icono" />
                    <input className="inBuscador" placeholder="Introduzca la información"></input>
                    <button className="btnBuscador" >Buscar</button>
                </div>
                <button className="iconoFiltro"> <FaFilter /></button>
                <div className="divUsers">
                    <button className="btn" onClick={() => navigate('/register')}>Registrarse</button>
                    <button className="btn" onClick={() => navigate('/login')}>Iniciar sesión</button>
                </div>
            </div>
        </header>
    )
}

export default Header;