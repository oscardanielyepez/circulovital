import React from 'react';
// Eliminamos useSearchParams, ya no lo necesitamos
import { useParams } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import { CheckoutProvider, useCheckout } from '../context/CheckoutContext';
import { servicesData } from '../data/servicesData';

import BeneficiaryStep from '../components/checkout/BeneficiaryStep';
import PaymentStep from '../components/checkout/PaymentStep';
import ConfirmationStep from '../components/checkout/ConfirmationStep';

const CheckoutContent = () => {
    const { step } = useCheckout();

    // Leemos serviceId Y planIndex directamente de useParams
    const { serviceId, planIndex } = useParams();

    // El resto de la lógica para encontrar los datos es la misma
    const service = servicesData.find(s => s.id === serviceId);
    const selectedPlan = service?.pricing[planIndex];

    const progress = (step - 1) * 50;

    if (!service || !selectedPlan) {
        return <p className="text-center section-spacing">Servicio o plan no especificado.</p>;
    }

    return (
        <div className="container section-spacing">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div className="text-center mb-4">
                        <h2>Proceso de Compra</h2>
                        <p className="text-muted">Servicio: <strong>{service.title}</strong> - Plan: <strong>{selectedPlan.plan}</strong></p>
                    </div>

                    <ProgressBar now={progress} label={`${progress}%`} className="mb-5" />

                    {step === 1 && <BeneficiaryStep />}
                    {step === 2 && <PaymentStep />}
                    {step === 3 && <ConfirmationStep />}
                </div>
            </div>
        </div>
    );
};

const CheckoutPage = () => {
    return (
        <CheckoutProvider>
            <CheckoutContent />
        </CheckoutProvider>
    );
};

export default CheckoutPage;