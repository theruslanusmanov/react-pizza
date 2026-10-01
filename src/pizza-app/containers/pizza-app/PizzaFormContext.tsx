import React, { createContext, useContext, useState } from 'react';

const PizzaFormContext = createContext();

export const usePizzaFormData = () => useContext(PizzaFormContext);

export const PizzaFormProvider = ({ children }) => {
    const [formData, setFormData] = useState({});

    const updateFormData = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
    };

    return (
        <PizzaFormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </PizzaFormContext.Provider>
    );
};
