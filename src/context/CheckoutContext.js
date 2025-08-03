import React, { createContext, useState, useContext } from 'react';

const CheckoutContext = createContext();

export const useCheckout = () => useContext(CheckoutContext);

export const CheckoutProvider = ({ children }) => {
    const [step, setStep] = useState(1); // 1: Datos, 2: Pago, 3: Confirmación
    const [formData, setFormData] = useState({
        beneficiaryName: '',
        beneficiaryAge: '',
        contactPhone: '',
        address: ''
    });

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const updateFormData = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
    };

    const value = {
        step,
        formData,
        nextStep,
        prevStep,
        updateFormData
    };

    return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
};