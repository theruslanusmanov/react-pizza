import "./PizzaApp.scss";
import PizzaViewer from "../../components/pizza-viewer/PizzaViewer.tsx";
import PizzaForm, {type PizzaFormValues} from "../../components/pizza-form/PizzaForm.tsx";
import {FormProvider, useForm} from "react-hook-form";
import {useState} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const prices: {
    [key: string]: { base: number, toppings: number };
} = {
    small: {base: 9.99, toppings: 0.69},
    medium: {base: 12.99, toppings: 0.99},
    large: {base: 16.99, toppings: 1.29}
};

export default function PizzaApp() {
    const formMethods = useForm<PizzaFormValues>({
        defaultValues: {
            details: {
                name: '',
                email: '',
                confirm: '',
                phone: '',
                address: '',
                postcode: '',
            },
            pizzas: [{
                size: 'small',
                toppings: ['bacon']
            }]
        }
    });

    const [activePizza, setActivePizza] = useState(0)
    const [total, setTotal] = useState('0')

    function createPizza() {
        formMethods.setValue('pizzas', [
            {
                size: 'small',
                toppings: ['bacon'],
            },
            {
                size: 'medium',
                toppings: ['bacon'],
            }
        ], {
            shouldValidate: true, // Optional: Triggers validation rules immediately
            shouldDirty: true,    // Optional: Marks the field as dirty
            shouldTouch: true,    // Optional: Marks the field as touched
        })
    }

    function addPizza() {
        console.log("adding Pizza");
        createPizza();
    }

    function removePizza(index: number) {
        console.log("remove Pizza", index);
    }

    function togglePizza(index: number) {
        console.log("toggle Pizza");
        setActivePizza(index);
    }

    //
    // function calculateTotal(value: number) {
    //     const price = value.reduce((prev: number, next: any) => {
    //         const price = prices[next.size];
    //         return prev + price.base + (price.toppings * next.toppings.length);
    //     }, 0);
    //     setTotal(price.toFixed(2));
    // }
    //
    // function createOrder(order: FormGroup) {
    //     console.log(order.value);
    // }

    return (
        <>
            <FormProvider {...formMethods}>
                <PizzaViewer></PizzaViewer>
                <PizzaForm
                    addPizza={addPizza}
                    removePizza={removePizza}
                    togglePizza={togglePizza}
                ></PizzaForm>
            </FormProvider>
        </>
    )
}
