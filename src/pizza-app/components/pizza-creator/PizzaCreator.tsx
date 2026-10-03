import "./PizzaCreator.scss";

import PizzaSize from "../pizza-size/PizzaSize.tsx";
import PizzaToppings from "../pizza-toppings/PizzaToppings.tsx";

export default function PizzaCreator({addPizza, removePizza, togglePizza}: {
    addPizza: () => object,
    removePizza: () => object,
    togglePizza: () => object
}) {
    const visiblePizzas = 1;
    const i = 0;

    return (
        <div className="pizza-creator">
            <h2>
                Choose your pizzas
                <button className="button" type="button" onClick={addPizza}>
                    <i className="fa fa-plus"></i>
                    Add pizza
                </button>
            </h2>

            <div>
                <div className="pizza-creator__header" onClick={togglePizza}>

                    <i className="fa fa-fw pizza-creator__icon"></i>
                    Pizza {i + 1}

                    <i className="fa fa-fw pizza-creator__status"></i>

                    <div
                        className="pizza-creator__delete" onClick={removePizza}>
                        <i className="fa fa-trash fa-fw"></i>
                    </div>

                </div>

                <div
                    className="pizza-creator__content--open"
                >

                    <h3>Select the size <span className="required">*</span></h3>
                    <PizzaSize></PizzaSize>

                    <h3>Pick your toppings</h3>
                    <PizzaToppings></PizzaToppings>

                </div>

            </div>
        </div>
    )
}
