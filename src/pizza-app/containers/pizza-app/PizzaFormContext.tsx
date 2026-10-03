import {createContext, useContext, useState} from 'react';
import type {PizzaFormValues} from "../../components/pizza-form/PizzaForm.tsx";

const PizzaFormContext = createContext({});

export const usePizzaFormData = () => useContext(PizzaFormContext);

export const PizzaFormProvider = ({ children }: {children: never}) => {
    const [formData, setFormData] = useState({});

    const updateFormData = (data: PizzaFormValues) => {
        setFormData((prev) => ({ ...prev, ...data }));
    };

    return (
        <PizzaFormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </PizzaFormContext.Provider>
    );
};
