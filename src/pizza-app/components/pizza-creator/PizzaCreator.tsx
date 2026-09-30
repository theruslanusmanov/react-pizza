import "./PizzaCreator.scss";

import PizzaSize from "../pizza-size/PizzaSize.tsx";
import PizzaToppings from "../pizza-toppings/PizzaToppings.tsx";

export default function PizzaCreator() {
    const i = 0;

    return (
        <div className="pizza-creator">
            <h2>
                Choose your pizzas
                <button className="button" type="button">
                    <i className="fa fa-plus"></i>
                    Add pizza
                </button>
            </h2>

            <div>
                <div className="pizza-creator__header">

                    <i className="fa fa-fw pizza-creator__icon"></i>
                    Pizza {i + 1}

                    <i className="fa fa-fw pizza-creator__status"></i>

                    <div
                        className="pizza-creator__delete">
                        <i className="fa fa-trash fa-fw"></i>
                    </div>

                </div>

                <div
                    className="pizza-creator__content"
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
