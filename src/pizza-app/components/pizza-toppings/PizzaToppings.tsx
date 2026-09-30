import "./PizzaToppings.scss";

export default function PizzaToppings() {
    const toppings = [
        'anchovy', 'bacon', 'basil', 'chili', 'mozzarella', 'mushroom',
        'olive', 'onion', 'pepper', 'pepperoni', 'sweetcorn', 'tomato'
    ];

    return (
        <div className="pizza-toppings">
            {
                toppings.map((topping) => (
                    <label
                        key={topping}
                        className="pizza-topping"
                    >
                        <input
                            type="checkbox"
                        />
                        <span className="pizza-topping__icon pizza-topping__icon--{{ topping }}"></span>
                        { topping }
                    </label>
                ))
            }
        </div>
    )
}
