import "./PizzaCreator.scss";

import PizzaSize from "../pizza-size/PizzaSize.tsx";
import PizzaToppings from "../pizza-toppings/PizzaToppings.tsx";
import {useFormContext} from "react-hook-form";
import type {PizzaPizzasFormValues} from "../pizza-form/PizzaForm.tsx";
import {useEffect} from "react";

export default function PizzaCreator({addPizza, removePizza, togglePizza}: {
    addPizza: () => void,
    removePizza: (index: number) => void,
    togglePizza: (index: number) => void
}) {
    const openPizza = 0;

    const {watch, setValue} = useFormContext();
    const pizzas: PizzaPizzasFormValues[] = watch("pizzas");

    useEffect(() => {
        console.log(pizzas);
    }, [pizzas]);

    function onChange(value: string[]) {
        console.log(value);
        setValue('pizzas.0.toppings', value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        })
        console.log(pizzas);
        // TODO: FIX
        setValue('pizzas', pizzas);
    }

    return (
        <div className="pizza-creator">
            <h2>
                Choose your pizzas
                <button className="button" type="button" onClick={addPizza}>
                    <i className="fa fa-plus"></i>
                    Add pizza
                </button>
            </h2>

            {pizzas.map((pizza: PizzaPizzasFormValues, i: number) => (
                <div key={pizza.size}>
                    <div className="pizza-creator__header" onClick={() => togglePizza(i)}>

                        <i className={openPizza === i ? 'fa fa-fw pizza-creator__icon fa-chevron-up' : 'fa fa-fw pizza-creator__icon fa-chevron-down'}></i>

                        Pizza {i + 1}

                        <i className="fa fa-fw pizza-creator__status"></i>

                        <div
                            className="pizza-creator__delete" onClick={() => removePizza(i)}>
                            <i className="fa fa-trash fa-fw"></i>
                        </div>

                    </div>

                    <div
                        className="pizza-creator__content--open"
                    >

                        <h3>Select the size <span className="required">*</span></h3>
                        <PizzaSize></PizzaSize>

                        <h3>Pick your toppings</h3>
                        <PizzaToppings values={pizza.toppings} onChange={(value: string[]) => onChange(value)}></PizzaToppings>

                    </div>

                </div>
            ))}

        </div>
    )
}
