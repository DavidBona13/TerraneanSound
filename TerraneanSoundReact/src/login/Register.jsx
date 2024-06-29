import React , { useState } from 'react';
import '../../src/assets/css/register.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Register = () => {    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className='containerRegistro'>
            <section className='section'>
                <form className='formulario'>
                    <h1 className='registro'>Regístrate</h1>
                    <div className='divNombre'>
                        <label className='cNombre' htmlFor='nombre'>Nombre de usuario:</label>
                        <div className='divInNom'>
                            <input className='inNom' name='nombre' type='text'  placeholder='Introduzca su nombre'></input>
                        </div>
                    </div>
                    <div className='divMail'>
                        <label className='cMail' htmlFor='mail'>Correo electrónico:</label>
                        <div className='divInMail'>
                            <input className='inMail' name='mail' type='text' placeholder='Introduzca su correo'></input>
                        </div>
                    </div>
                    <div className='divContrasenya'>
                        <label className='cContrasenya' htmlFor='pwd'>Contraseña:</label>
                        <div className='divInPwd'>
                            <input className='inPwd' name='pwd'  type={showPassword ? 'text' : 'password'}></input>
                            <button className="iconoOjosPassword" type="button" onClick={togglePasswordVisibility}>
                                {!showPassword ? <FaEyeSlash className="icono"/> : <FaEye className="icono" />}
                            </button>
                        </div>
                    </div>
                    <div className='DivRepeatPwd'>
                        <label className='cRepeatPwd' htmlFor='pwd2'>Repita la contraseña:</label>
                        <div className='divInRepeat'>
                            <input className='inPwd2' name='pwd2'  type={showConfirmPassword ? 'text' : 'password'}></input>
                            <button className="iconoOjosPassword" type="button" onClick={toggleConfirmPasswordVisibility}>
                                {!showConfirmPassword ? <FaEyeSlash className="icono" /> : <FaEye className="icono" />}
                            </button>
                        </div>
                    </div>
                    <button className='btnCrear'>Crear</button>
                    <div className='divFinal'>
                        <p className='txt'>¿Tiene una cuenta registrada?</p>
                        <button className='btnIniciar2' type='submit' onClick={() => navigate('/login')}>Iniciar sesión</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Register;