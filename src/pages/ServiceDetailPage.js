import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ServiceDetailPage = () => {
    const { serviceId } = useParams(); // Obtiene el 'id' de la URL (ej: 'cuidado-medico')
    const service = servicesData.find(s => s.id === serviceId);

    // Si no se encuentra el servicio, muestra un mensaje
    if (!service) {
        return (
            <div className="container section-spacing text-center">
                <h2 className="fw-bold">Servicio no encontrado</h2>
                <p>El servicio que buscas no existe.</p>
                <Link to="/servicios" className="btn btn-primary-custom">Ver todos los servicios</Link>
            </div>
        );
    }

    return (
        <div className="container section-spacing">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div className="text-center mb-5">
                        <i className={`${service.icon} fa-3x text-primary-custom mb-3`}></i>
                        <h1 className="display-5 fw-bold text-dark-custom">{service.title}</h1>
                        <p className="lead text-muted">{service.longDescription}</p>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header h5">Características del Servicio</div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="list-group-item">
                                        <i className="fas fa-check-circle text-primary-custom me-2"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header h5">Precios y Paquetes</div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {service.pricing.map((item, index) => (
                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>{item.plan}</span>
                                        <span className="badge bg-primary-custom rounded-pill fs-6">${item.price} COP</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="text-center mt-4">
                                <Link to="/#contacto" className="btn btn-primary-custom btn-lg">Solicitar este Servicio</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;