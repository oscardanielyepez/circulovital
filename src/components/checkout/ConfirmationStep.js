import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationStep = () => {
    return (
        <div className="text-center">
            <i className="fas fa-check-circle fa-4x text-success mb-3"></i>
            <h3 className="mb-3">¡Solicitud Procesada con Éxito!</h3>
            <p className="lead">Gracias por confiar en Círculo Vital.</p>
            <p>Nos pondremos en contacto contigo en las próximas 24 horas para coordinar los detalles del servicio.</p>
            <Link to="/" className="btn btn-primary mt-3">Volver al Inicio</Link>
        </div>
    );
};

export default ConfirmationStep;