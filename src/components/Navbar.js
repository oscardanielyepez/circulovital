// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link en lugar de <a> para la navegación interna
import logo from '../assets/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-custom">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-3 text-primary-custom d-flex align-items-center" to="/">
                    <img
                        src={logo}
                        alt="Logo de Círculo Vital"
                        className="navbar-logo"
                    />
                    Círculo Vital
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-dark-custom fw-medium" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark-custom fw-medium" href="/#nosotros">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            {/* ESTE ES EL CAMBIO PRINCIPAL */}
                            <Link className="nav-link text-dark-custom fw-medium" to="/servicios">Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark-custom fw-medium" href="/#testimonios">Testimonios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark-custom fw-medium" href="/#contacto">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark-custom fw-medium" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                            <a className="btn btn-primary-custom text-white px-4" href="/#contacto">
                                Agendar Cita
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;