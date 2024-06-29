import React from "react";
import '../../src/assets/css/header.css';
import { FaFilter, FaSearch } from "react-icons/fa";


const Header = () => {


    return (
        <header>
            <div className="divHeader">
                <h1>TerraneanSound</h1>
                <div className="divBusqueda">
                    <FaSearch className="icono" />
                    <input></input>
                    <button>Buscar</button>
                </div>
                <button className="iconoFiltro"> <FaFilter /></button>
                <div className="divUsers">
                    <button className="btn">Registrarse</button>
                    <button className="btn">Iniciar sesión</button>
                </div>
            </div>
        </header>
    )
}

export default Header;