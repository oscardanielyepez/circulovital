import React from 'react';
import { Button } from 'react-bootstrap';
import { useCheckout } from '../../context/CheckoutContext';

const PaymentStep = () => {
    const { prevStep, nextStep } = useCheckout();

    return (
        <div>
            <h3 className="mb-4">Paso 2: Datos del Pago</h3>
            <div className="alert alert-info">
                <p>En un sitio real, aquí se integraría una pasarela de pagos segura (como Stripe, PayU, etc.).</p>
                <p className="mb-0">Para esta demostración, simularemos que el pago se ha procesado correctamente.</p>
            </div>
            <div className="d-flex justify-content-between mt-4">
                <Button variant="secondary" onClick={prevStep}>Atrás</Button>
                <Button variant="primary" onClick={nextStep}>Simular Pago y Continuar</Button>
            </div>
        </div>
    );
};

export default PaymentStep;