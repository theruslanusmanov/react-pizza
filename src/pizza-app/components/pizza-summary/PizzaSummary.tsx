import "./PizzaSummary.scss";

export default function PizzaSummary() {
    return (
        <div className="pizza-summary">

            <h2>Order Summary</h2>
            <div
                className="pizza-summary__pizza">

                <div>
                    <h3>
                        {/*{{ pizza.size | titlecase }} Pizza*/}
                        <span className="pizza-summary__price">
              {/*{{ prices[pizza.size].base | currency:'USD':true }}*/}
            </span>
                    </h3>

                    <div className="pizza-summary__toppings">
                        <div className="pizza-summary__topping">
                            <i className="fa fa-plus"></i>
                            {/*{{ topping | titlecase }}*/}
                            <span className="pizza-summary__price">
                {/*{{ prices[pizza.size].toppings | currency:'USD':true }}*/}
              </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pizza-summary__total-price">
                Total: {/*{{ total | currency:'USD':true }}*/}
            </div>

            <button
                type="submit"
                className="pizza-summary__button">
                Place order
            </button>
        </div>
    )
}
