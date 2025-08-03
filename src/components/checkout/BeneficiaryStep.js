import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCheckout } from '../../context/CheckoutContext';

const BeneficiaryStep = () => {
    const { formData, updateFormData, nextStep } = useCheckout();

    const handleChange = e => {
        updateFormData({ [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h3 className="mb-4">Paso 1: Datos del Beneficiario</h3>
            <Form.Group className="mb-3">
                <Form.Label>Nombre Completo del Beneficiario</Form.Label>
                <Form.Control type="text" name="beneficiaryName" value={formData.beneficiaryName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Edad</Form.Label>
                <Form.Control type="number" name="beneficiaryAge" value={formData.beneficiaryAge} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Teléfono de Contacto</Form.Label>
                <Form.Control type="tel" name="contactPhone" value={formData.contactPhone} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Dirección del Servicio</Form.Label>
                <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
            </Form.Group>
            <div className="text-end">
                <Button variant="primary" type="submit">Siguiente</Button>
            </div>
        </Form>
    );
};

export default BeneficiaryStep;