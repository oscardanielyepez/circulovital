import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const LoginPage = () => {
    // --- CAMBIO 1: Renombramos el estado de 'email' a 'cc' ---
    const [cc, setCc] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // --- CAMBIO 2: Actualizamos los datos que se envían (por ahora a la consola) ---
        console.log('Intento de login con:', { cc, password });
        alert('Funcionalidad de backend no implementada todavía.');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="text-center mb-4">
                    <Link to="/">
                        <img src={logo} alt="Logo Círculo Vital" className="login-logo" />
                    </Link>
                    <h2 className="mt-3">Iniciar Sesión</h2>
                    <p className="text-muted">Bienvenido de nuevo a Círculo Vital</p>
                </div>
                <form onSubmit={handleSubmit}>
                    {/* --- CAMBIO 3: Se modifica el campo de Email para que sea de Cédula --- */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingCc"
                            placeholder="Número de Cédula"
                            value={cc}
                            onChange={(e) => setCc(e.target.value)}
                            required
                        />
                        <label htmlFor="floatingCc">Cédula de Ciudadanía (CC)</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Recordarme
                            </label>
                        </div>
                        {/* Puedes crear una página para esto en el futuro si quieres */}
                        {/* <Link to="/recuperar-contrasena" className="small">¿Olvidaste tu contraseña?</Link> */}
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary-custom btn-lg" type="submit">
                            Ingresar
                        </button>
                    </div>

                    {/* --- CAMBIO 4: Se elimina el div que contenía el enlace de registro --- */}

                </form>
            </div>
        </div>
    );
};

export default LoginPage;