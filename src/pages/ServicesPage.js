// src/pages/ServicesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData'; // 1. Importamos los datos

const ServicesPage = () => {
    return (
        <div className="page-container mt-5 pt-5">
            <header className="hero-gradient text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold">Nuestros Servicios</h1>
                    <p className="lead">Soluciones integrales de cuidado y bienestar para adultos mayores, diseñadas con profesionalismo y amor.</p>
                </div>
            </header>

            <div className="container section-spacing">

                {/* 2. Usamos .map para crear una sección para CADA servicio en el archivo de datos */}
                {servicesData.map((service, index) => (
                    <section key={service.id} id={service.id} className="mb-5 pb-5">
                        {/* Hacemos que el layout alterne (imagen a la izquierda, luego a la derecha) */}
                        <div className={`row align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="bg-pale-blue rounded-3 p-5 text-center">
                                    <i className={`${service.icon} fa-4x text-primary-custom`}></i>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="fw-bold text-dark-custom mb-3">{service.title}</h2>
                                <p className="text-muted">{service.longDescription}</p>
                                <ul className="list-unstyled text-muted">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="mb-2">
                                            <i className="fas fa-check-circle text-primary-custom me-2"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-start mt-4">
                                    {/* El enlace ahora va a la página de detalle específica */}
                                    <Link to={`/servicios/${service.id}`} className="btn btn-primary-custom">
                                        Ver Precios y Detalles
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

            </div>
        </div>
    );
};

export default ServicesPage;