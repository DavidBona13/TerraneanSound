import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../../src/assets/css/login.css';

const Login = () => {
    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const btn_pwd = () => {
        setShowPassword(!showPassword);
    }

    return(
        <div className="pantalla">
            <section className="section">
                <h1>Iniciar sesión</h1>
                <form className="formulario">
                    <div className="divCorreo">
                        <label htmlFor='mail'>Correo electrónico</label>
                        <input type="text" name="mail" placeholder="correo electrónico"></input>
                    </div>
                    <div className="divPwd">
                        <label htmlFor='pwd'>Contraseña</label>
                        <input type={showPassword? "text" : "password"} name="pwd" placeholder="contraseña"></input>
                        <button onClick={btn_pwd} type="button" className="btnPwd">{!showPassword ? <FaEyeSlash  className="icono"/> : <FaEye className="icono"/>}</button>
                    </div>
                    <button type="submit" className="btnIniciar">Iniciar</button>
                    <div className="divFinal">
                        <p>¿No tienes una cuenta registrada? </p>
                        <button className="btnRegistrarse">Registrarse</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Login;