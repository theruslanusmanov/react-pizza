import "./PizzaSummary.scss";

export default function PizzaSummary() {
    return (
        <div class="pizza-summary">

            <h2>Order Summary</h2>
            <div
                class="pizza-summary__pizza">

                <div>
                    <h3>
                        {/*{{ pizza.size | titlecase }} Pizza*/}
                        <span class="pizza-summary__price">
              {/*{{ prices[pizza.size].base | currency:'USD':true }}*/}
            </span>
                    </h3>

                    <div class="pizza-summary__toppings">
                        <div class="pizza-summary__topping">
                            <i class="fa fa-plus"></i>
                            {/*{{ topping | titlecase }}*/}
                            <span class="pizza-summary__price">
                {/*{{ prices[pizza.size].toppings | currency:'USD':true }}*/}
              </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pizza-summary__total-price">
                Total: {/*{{ total | currency:'USD':true }}*/}
            </div>

            <button
                type="submit"
                class="pizza-summary__button">
                Place order
            </button>
        </div>
    )
}
