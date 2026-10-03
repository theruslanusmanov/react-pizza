import "./PizzaSummary.scss";
import {useEffect, useState} from "react";
import {useFormContext} from "react-hook-form";
import type {PizzaPizzasFormValues} from "../pizza-form/PizzaForm.tsx";
import {prices} from "../../containers/pizza-app/PizzaApp.tsx";

export default function PizzaSummary() {
    const {watch} = useFormContext();
    const pizzas = watch("pizzas");

    function calculateTotal(value: PizzaPizzasFormValues[]) {
        const price = value.reduce((prev: number, next: PizzaPizzasFormValues) => {
            const price = prices[next.size];
            return prev + price.base + (price.toppings * next.toppings.length);
        }, 0);
        return price.toFixed(2);
    }

    const [total] = useState<string>(() => {
        return pizzas.length ? calculateTotal(pizzas) : '0';
    });

    useEffect(() => {
        console.log(pizzas);
    })

    return (
        <div className="pizza-summary">

            <h2>Order Summary</h2>

            {pizzas.map((pizza: PizzaPizzasFormValues) => (
                <div
                    className="pizza-summary__pizza">

                    <div>
                        <h3>
                            {pizza.size} Pizza
                            <span className="pizza-summary__price">{prices[pizza.size].base}</span>
                        </h3>

                        <div className="pizza-summary__toppings">
                            {pizza.toppings.map((topping: string) => (
                                <div className="pizza-summary__topping">
                                    <i className="fa fa-plus"></i>
                                    {topping}
                                    <span className="pizza-summary__price">{prices[pizza.size].toppings}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}


            <div className="pizza-summary__total-price">
                Total: {total}
            </div>

            <button
                type="submit"
                className="pizza-summary__button">
                Place order
            </button>
        </div>
    )
}
