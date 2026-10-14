import "./PizzaToppings.scss";
import {useState} from "react";

export default function PizzaToppings() {
    const toppings = [
        'anchovy', 'bacon', 'basil', 'chili', 'mozzarella', 'mushroom',
        'olive', 'onion', 'pepper', 'pepperoni', 'sweetcorn', 'tomato'
    ];

    const [focused, setFocused] = useState<string>('');
    const [value, setValue] = useState<string[]>([]);

    function updateTopping(topping: string) {
        if (value.includes(topping)) {
            setValue(value.filter((x: string) => topping !== x));
        } else {
            setValue(value.concat([topping]));
        }
    }

    return (
        <div className="pizza-toppings">
            {
                toppings.map((topping) => (
                    <label
                        key={topping}
                        className={`
                            pizza-topping
                            ${value.includes(topping) ? 'pizza-topping--active' : ''}
                            ${focused === topping ? 'pizza-topping--focused' : ''}
                        ` }
                    >
                        <input
                            type="checkbox"
                            name={topping}
                            value={topping}
                            onFocus={() => setFocused(topping)}
                            onBlur={() => setFocused('')}
                            onChange={() => updateTopping(topping)}
                            checked={value.includes(topping)}
                        />
                        <span className={`pizza-topping__icon pizza-topping__icon--${ topping }`}></span>
                        { topping }
                    </label>
                ))
            }
        </div>
    )
}
