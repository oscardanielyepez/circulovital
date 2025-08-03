// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // 1. Importamos HashLink
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
                            {/* El enlace a Inicio sigue siendo un Link normal */}
                            <Link className="nav-link text-dark-custom fw-medium" to="/">Inicio</Link>
                        </li>

                        {/* 2. Reemplazamos <a> por <HashLink> para las secciones */}
                        <li className="nav-item">
                            <Link className="nav-link text-dark-custom fw-medium" to="/nosotros">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark-custom fw-medium" to="/servicios">Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link text-dark-custom fw-medium" to="/#testimonios">Testimonios</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link text-dark-custom fw-medium" to="/#contacto">Contacto</HashLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark-custom fw-medium" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                            <Link className="btn btn-primary-custom px-4" to="/login">
                                Iniciar Sesión
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;