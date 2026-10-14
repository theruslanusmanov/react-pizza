import "./PizzaViewer.scss";
import {useEffect, useState} from "react";
import {useFormContext} from "react-hook-form";
import type {PizzaPizzasFormValues} from "../pizza-form/PizzaForm.tsx";

export default function PizzaViewer() {
    const [activePizza] = useState(0)

    const {watch} = useFormContext();
    const pizzas: PizzaPizzasFormValues[] = watch("pizzas");

    useEffect(() => {
        console.log(pizzas);
    }, [pizzas]);

    return (
        <>
            <div className="pizza-viewer">
                <div className="pizza-viewer__table-side"></div>
                <div className="pizza-viewer__table"></div>
                {activePizza}
                {pizzas.map((pizza: PizzaPizzasFormValues, i: number) => (
                    <div key={i} className={`pizza ${activePizza === 0 ? 'pizza--active' : ''}`}>
                        <div className="pizza__board"></div>
                        <div className="pizza__base"></div>
                        <div className="pizza__toppings">
                            {pizza.toppings.map((topping: string) => (
                                <div>
                                    <div className={`pizza__topping pizza__topping--${topping}`}></div>
                                    <div className={`pizza__topping pizza__topping--${topping}`}></div>
                                    <div className={`pizza__topping pizza__topping--${topping}`}></div>
                                    <div className={`pizza__topping pizza__topping--${topping}`}></div>
                                    <div className={`pizza__topping pizza__topping--${topping}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
