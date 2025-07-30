// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <h4 className="fw-bold mb-4">Círculo Vital</h4>
                        <p className="text-light small">
                            Brindamos servicios especializados de acompañamiento y cuidado
                            para adultos mayores en Medellín y su área metropolitana con amor,
                            profesionalismo y dedicación.
                        </p>
                        <div className="d-flex gap-3 mt-4">
                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                            <a href="#!" className="text-white"><i className="fab fa-instagram fa-lg"></i></a>
                            <a href="#!" className="text-white"><i className="fab fa-whatsapp fa-lg"></i></a>
                            <a href="#!" className="text-white"><i className="fab fa-linkedin fa-lg"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 mb-4 mb-lg-0">
                        <h6 className="fw-bold mb-3">Enlaces</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#inicio" className="text-light text-decoration-none small">Inicio</a></li>
                            <li className="mb-2"><a href="#nosotros" className="text-light text-decoration-none small">Nosotros</a></li>
                            <li className="mb-2"><a href="#servicios" className="text-light text-decoration-none small">Servicios</a></li>
                            <li className="mb-2"><a href="#testimonios" className="text-light text-decoration-none small">Testimonios</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                        <h6 className="fw-bold mb-3">Servicios</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#!" className="text-light text-decoration-none small">Acompañamiento en Casa</a></li>
                            <li className="mb-2"><a href="#!" className="text-light text-decoration-none small">Cuidado Médico</a></li>
                            <li className="mb-2"><a href="#!" className="text-light text-decoration-none small">Actividades Sociales</a></li>
                            <li className="mb-2"><a href="#!" className="text-light text-decoration-none small">Paquetes Integrales</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 mb-4 mb-lg-0">
                        <h6 className="fw-bold mb-3">Contacto</h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2 d-flex"><i className="fas fa-map-marker-alt me-2 pt-1"></i><span>Medellín, Antioquia</span></li>
                            <li className="mb-2 d-flex"><i className="fas fa-phone me-2 pt-1"></i><a href="tel:+5743001234567" className="text-light text-decoration-none">+57 (4) 300-123-4567</a></li>
                            <li className="mb-2 d-flex"><i className="fas fa-envelope me-2 pt-1"></i><a href="mailto:info@circulovital.com" className="text-light text-decoration-none">info@circulovital.com</a></li>
                            <li className="mb-2 d-flex"><i className="fas fa-clock me-2 pt-1"></i><span>Emergencias 24/7</span></li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="row">
                    <div className="col-md-8">
                        <p className="mb-0 small text-light">&copy; 2025 Círculo Vital. Todos los derechos reservados.</p>
                    </div>
                    <div className="col-md-4 text-md-end">
                        <a href="#!" className="text-light text-decoration-none me-3 small">Política de Privacidad</a>
                        <a href="#!" className="text-light text-decoration-none small">Términos de Servicio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;