import "./PizzaSize.scss";
import {useState} from "react";

export default function PizzaSize() {
    const sizes: {type: string, inches: number}[] = [
        { type: 'large', inches: 13 },
        { type: 'medium', inches: 11 },
        { type: 'small', inches: 9 }
    ];

    const [focused, setFocused] = useState<string>('');
    const [value, setValue] = useState<string>('');

    return (
        <div className="pizza-size section">
            {sizes.map((size) => (
                <label
                    key={size.type}
                    className={`
                        pizza-size__item
                        ${value === size.type ? 'pizza-size__item--active' : ''}
                        ${focused === size.type ? 'pizza-size__item--focused' : ''}
                    `}
                >
                    <input
                        type="radio"
                        name="size"
                        value={size.type}
                        onBlur={() => setFocused(size.type)}
                        onChange={() => setValue(size.type)}
                        onFocus={() => setFocused(size.type)}
                        checked={value === size.type}
                    />

                    <div className="pizza-size__plate">
                        <div className={`pizza-size__pizza pizza-size__pizza--${ size.type }`}>
                            <div className="pizza-size__pizza__line"></div>
                            <div className="pizza-size__pizza__line"></div>
                            <div className="pizza-size__pizza__line"></div>
                            <div className="pizza-size__pizza__line"></div>
                        </div>
                    </div>
                    {size.type} ({size.inches })
                </label>
            ))}
        </div>
    )
}
