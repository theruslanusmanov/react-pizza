import "./PizzaCreator.scss";

import PizzaSize from "../pizza-size/PizzaSize.tsx";
import PizzaToppings from "../pizza-toppings/PizzaToppings.tsx";

export default function PizzaCreator() {
    const i = 0;

    return (
        <div class="pizza-creator">
            <h2>
                Choose your pizzas
                <button class="button" type="button">
                    <i class="fa fa-plus"></i>
                    Add pizza
                </button>
            </h2>

            <div>
                <div class="pizza-creator__header">

                    <i class="fa fa-fw pizza-creator__icon"></i>
                    Pizza {i + 1}

                    <i class="fa fa-fw pizza-creator__status"></i>

                    <div
                        class="pizza-creator__delete">
                        <i class="fa fa-trash fa-fw"></i>
                    </div>

                </div>

                <div
                    class="pizza-creator__content"
                >

                    <h3>Select the size <span class="required">*</span></h3>
                    <PizzaSize></PizzaSize>

                    <h3>Pick your toppings</h3>
                    <PizzaToppings></PizzaToppings>

                </div>

            </div>
        </div>
    )
}
