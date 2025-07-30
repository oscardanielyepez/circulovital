// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí la lógica para enviar el formulario a un backend o servicio
        console.log('Formulario enviado:', formData);
        alert('¡Gracias por contactarnos! Te responderemos pronto.');
        // Limpiar formulario
        setFormData({
            nombre: '',
            email: '',
            telefono: '',
            servicio: '',
            mensaje: ''
        });
    };

    return (
        <div className="contact-form p-4 p-md-5">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="nombre" className="form-label text-dark-custom fw-medium">
                            Nombre Completo *
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label text-dark-custom fw-medium">
                            Email *
                        </label>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="telefono" className="form-label text-dark-custom fw-medium">
                            Teléfono *
                        </label>
                        <input
                            type="tel"
                            className="form-control form-control-lg"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="servicio" className="form-label text-dark-custom fw-medium">
                            Servicio de Interés
                        </label>
                        <select
                            className="form-select form-select-lg"
                            id="servicio"
                            name="servicio"
                            value={formData.servicio}
                            onChange={handleInputChange}
                        >
                            <option value="">Seleccionar servicio</option>
                            <option value="acompañamiento">Acompañamiento en Casa</option>
                            <option value="medico">Cuidado Médico</option>
                            <option value="social">Actividades Sociales</option>
                            <option value="integral">Paquete Integral</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="mensaje" className="form-label text-dark-custom fw-medium">
                        Mensaje
                    </label>
                    <textarea
                        className="form-control form-control-lg"
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        placeholder="Cuéntanos más sobre tus necesidades..."
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary-custom btn-lg w-100">
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
};

export default ContactForm;