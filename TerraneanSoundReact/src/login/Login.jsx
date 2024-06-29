import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../../src/assets/css/login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem('registerCount');
        if(storedCount !== null){
            setCount(parseInt(storedCount, 10));
        }
    })

    const suma = () => {
        const nCount = count + 1;
        setCount(nCount);
        localStorage.setItem('registerCount', nCount);
    }

    const btn_pwd = () => {
        setShowPassword(!showPassword);
    }

    return(
        <div className="pantalla">
            <section className="section">
                <form className="formulario">
                <h1>Iniciar sesión</h1>
                    <div className="divCorreo">
                        <label className='label' htmlFor='mail'>Correo electrónico</label>
                        <div className="divInput">
                            <input type="text" name="mail" placeholder="correo electrónico" className="inMail"></input>
                        </div>
                    </div>
                    <div className="divPwd">
                        <label className="label" htmlFor='pwd'>Contraseña</label>
                        <div className="divInput">
                            <input type={showPassword? "text" : "password"} name="pwd" placeholder="contraseña" className="inPwd"></input>
                            <button onClick={btn_pwd} type="button" className="btnPwd">
                                {!showPassword ? <FaEyeSlash  className="icono"/> : <FaEye className="icono"/>}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="btnIniciar" >Iniciar</button>
                    <div className="divFinal">
                        <p>¿No tienes una cuenta registrada? </p>
                        <button className="btnRegistrarse" onClick={() => navigate('/')}>Registrarse</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Login;