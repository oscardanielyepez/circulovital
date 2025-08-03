// src/components/HomePage.js
import React from 'react';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { blogData } from '../data/blogData';
import vfelices from '../assets/v_felices.jpg';
import teamImage from '../assets/equipo-circulo-vital.jpg';
import { testimonialsData } from '../data/testimonialsData'; 
import { HashLink } from 'react-router-hash-link';

const HomePage = () => {
    return (
        <main>
            {/* --- Hero Section --- */}
            <section id="inicio" className="hero-gradient text-white hero-content">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="fade-in">
                                <h1 className="display-4 fw-bold mb-4">
                                    Cuidado y Acompañamiento Integral para Adultos Mayores
                                </h1>
                                <p className="lead mb-4">
                                    En Medellín y su área metropolitana, brindamos servicios especializados
                                    con amor, profesionalismo y dedicación.
                                </p>
                                <div className="d-flex flex-wrap gap-3">
                                    <a href="#servicios" className="btn btn-light btn-lg px-4 py-3">Conocer Servicios</a>
                                    <a href="#contacto" className="btn btn-outline-light btn-lg px-4 py-3">Contactar Ahora</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center d-none d-lg-block">
                            <div className="floating-animation">
                                <img
                                    src={vfelices}
                                    alt="Adultos mayores felices siendo cuidados por personal de Círculo Vital"
                                    className="img-fluid rounded-3 shadow-lg vfelices"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Stats Section --- */}
            <section className="bg-pale-blue py-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-3 col-6 mb-4">
                            <div className="stats-counter">500+</div>
                            <p className="text-dark-custom">Familias Atendidas</p>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <div className="stats-counter">5</div>
                            <p className="text-dark-custom">Años de Experiencia</p>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <div className="stats-counter">24/7</div>
                            <p className="text-dark-custom">Disponibilidad</p>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <div className="stats-counter">100%</div>
                            <p className="text-dark-custom">Satisfacción</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Services Preview --- */}
            <section id="servicios" className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <h2 className="display-5 fw-bold text-dark-custom mb-3">
                                Nuestros Servicios
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        {/* ===== CAMBIO AQUÍ: Añadimos .slice(0, 6) ===== */}
                        {servicesData.slice(0, 6).map(service => (
                            <div key={service.id} className="col-lg-4 col-md-6 mb-4">
                                <div className="card h-100 border-0 card-hover">
                                    <div className="card-body text-center p-4">
                                        <div className="service-icon">
                                            <i className={service.icon}></i>
                                        </div>
                                        <h5 className="card-title text-dark-custom">{service.title}</h5>
                                        <p className="card-text text-muted">
                                            {service.shortDescription}
                                        </p>
                                        <Link to={`/servicios/${service.id}`} className="btn btn-outline-custom">Más Información</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Botón para ver todos los servicios si hay más de 6 */}
                    {servicesData.length > 6 && (
                        <div className="text-center mt-4">
                            <Link to="/servicios" className="btn btn-primary-custom btn-lg">
                                Ver Todos los Servicios
                            </Link>
                        </div>
                    )}

                </div>
            </section>

            {/* --- About Us Preview --- */}
            <section id="nosotros" className="bg-pale-blue section-spacing">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img
                                src={teamImage}
                                alt="Equipo de profesionales de Círculo Vital"
                                className="img-fluid rounded-3 shadow-lg"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-5 fw-bold text-dark-custom mb-4">
                                Sobre Círculo Vital
                            </h2>
                            <p className="lead text-muted mb-4">
                                Somos una empresa especializada en brindar servicios integrales de
                                acompañamiento y cuidado para adultos mayores en Medellín y su área metropolitana.
                            </p>
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <h5 className="text-primary-custom mb-3">Nuestra Misión</h5>
                                    <p className="text-muted">
                                        Mejorar la calidad de vida de los adultos mayores a través de servicios
                                        personalizados de cuidado y acompañamiento.
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="text-primary-custom mb-3">Nuestra Visión</h5>
                                    <p className="text-muted">
                                        Ser la empresa líder en cuidado integral para adultos mayores en
                                        el área metropolitana de Medellín.
                                    </p>
                                </div>
                            </div>
                            <Link to="/nosotros" className="btn btn-primary-custom btn-lg">Conocer Más</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Testimonials --- */}
            <section id="testimonios" className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <h2 className="display-5 fw-bold text-dark-custom mb-3">
                                Testimonios
                            </h2>
                            <p className="lead text-muted">
                                Lo que dicen nuestras familias sobre nuestros servicios
                            </p>
                        </div>
                    </div>

                    {/* Reemplazamos el contenido estático por un .map dinámico */}
                    <div className="row">
                        {testimonialsData.map(testimonial => (
                            <div key={testimonial.id} className="col-lg-4 mb-4">
                                <div className="testimonial-card">
                                    <div className="d-flex align-items-center mb-3">

                                        {/* Aquí mostramos la imagen real */}
                                        <img src={testimonial.image} alt={`Foto de ${testimonial.name}`} className="testimonial-image" />

                                        <div>
                                            <h6 className="mb-0 text-dark-custom">{testimonial.name}</h6>
                                            <small className="text-muted">{testimonial.relation}</small>
                                        </div>
                                    </div>
                                    <p className="text-muted">
                                        {testimonial.quote}
                                    </p>
                                    <div className="text-warning">
                                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Contact Section --- */}
            <section id="contacto" className="bg-pale-blue section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <h2 className="display-5 fw-bold text-dark-custom mb-3">Contáctanos</h2>
                            <p className="lead text-muted">Estamos aquí para ayudarte. Agenda tu consulta gratuita.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <ContactForm />
                        </div>
                        <div className="col-lg-5">
                            <div className="h-100">
                                <div className="mb-4">
                                    <h5 className="text-dark-custom mb-3"><i className="fas fa-map-marker-alt text-primary-custom me-2"></i>Ubicación</h5>
                                    <p className="text-muted">Medellín, Antioquia<br />Área Metropolitana, Colombia</p>
                                </div>
                                <div className="mb-4">
                                    <h5 className="text-dark-custom mb-3"><i className="fas fa-phone text-primary-custom me-2"></i>Teléfono</h5>
                                    <p className="text-muted"><a href="tel:+5743001234567" className="text-decoration-none text-muted">+57 (4) 300-123-4567</a></p>
                                </div>
                                <div className="mb-4">
                                    <h5 className="text-dark-custom mb-3"><i className="fas fa-envelope text-primary-custom me-2"></i>Email</h5>
                                    <p className="text-muted"><a href="mailto:info@circulovital.com" className="text-decoration-none text-muted">info@circulovital.com</a></p>
                                </div>
                                <div className="mb-4">
                                    <h5 className="text-dark-custom mb-3"><i className="fas fa-clock text-primary-custom me-2"></i>Horarios de Atención</h5>
                                    <p className="text-muted">
                                        Lunes a Viernes: 7:00 AM - 7:00 PM<br />
                                        Sábados: 8:00 AM - 5:00 PM<br />
                                        <small className="text-primary-custom fw-bold">*Emergencias 24/7</small>
                                    </p>
                                </div>
                                <div className="bg-white rounded-3 p-4 text-center" style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div>
                                        <i className="fas fa-map fa-3x text-primary-custom mb-3"></i>
                                        <h6>MAPA DE UBICACIÓN</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Blog Section --- */}
            <section id="blog" className="section-spacing">
                <div className="container">
                    {/* ... (título de la sección) ... */}
                    <div className="row">
                        {blogData.slice(0, 3).map(post => (
                            <div key={post.id} className="col-lg-4 mb-4">
                                <div className="card h-100 border-0 card-hover">

                                    {/* ESTE ES EL CAMBIO: Reemplazamos el div del ícono por la etiqueta <img> */}
                                    <Link to={`/blog/${post.id}`}>
                                        <img src={post.image} className="card-img-top blog-card-image" alt={post.title} />
                                    </Link>

                                    <div className="card-body">
                                        <h5 className="card-title text-dark-custom">{post.title}</h5>
                                        <p className="card-text text-muted">{post.excerpt}</p>
                                        <small className="text-muted">
                                            <i className="far fa-calendar me-1"></i>
                                            {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </small>
                                    </div>
                                    <div className="card-footer bg-transparent border-0">
                                        <Link to={`/blog/${post.id}`} className="btn btn-outline-custom">Leer Más</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* ... (botón "Ver todos los artículos") ... */}
                </div>
            </section>

            {/* --- Final CTA Section --- */}
            <section className="hero-gradient text-white py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-3">¿Listo para Brindar el Mejor Cuidado?</h2>
                    <p className="lead mb-4">Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos ayudarte.</p>
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        <a href="tel:+5743001234567" className="btn btn-light btn-lg px-5 py-3"><i className="fas fa-phone me-2"></i>Llamar Ahora</a>
                        {/* ===== CAMBIO AQUÍ: Usamos HashLink en lugar de <a> ===== */}
                        <HashLink to="/#contacto" className="btn btn-outline-light btn-lg px-5 py-3">
                            <i className="fas fa-calendar me-2"></i>Agendar Cita
                        </HashLink>
                    </div>
                </div>
            </section>

            {/* --- WhatsApp Float Button --- */}
            <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success rounded-circle p-3 shadow-lg whatsapp-float-button"
            >
                <i className="fab fa-whatsapp fa-2x"></i>
            </a>
        </main>
    );
};

export default HomePage;