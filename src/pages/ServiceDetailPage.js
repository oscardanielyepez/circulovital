import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { servicesData } from '../data/servicesData';

const ServiceDetailPage = () => {
    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === serviceId);

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
                        <div className="card-header h5">Precios y planes</div>
                        <div className="card-body">
                            <ListGroup variant="flush">
                                {service.pricing.map((item, index) => (
                                    // 1. Añadimos la clase "plan-item" al contenedor principal
                                    <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center px-0 plan-item">
                                        <div className="me-3">
                                            <strong>{item.plan}</strong>
                                            <p className="mb-0 small text-muted">{item.description}</p>
                                        </div>

                                        {/* 2. Estructuramos el precio y el botón con las nuevas clases */}
                                        <div className="plan-action">
                                            <span className="plan-price badge bg-primary-custom rounded-pill fs-6">
                                                ${item.price} COP
                                            </span>
                                            <Link
                                                to={`/checkout/${service.id}/${index}`}
                                                className="plan-button btn btn-sm btn-primary-custom"
                                            >
                                                Seleccionar
                                            </Link>
                                        </div>

                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;