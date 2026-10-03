import "./PizzaSize.scss";

export default function PizzaSize() {
    const sizes: {type: string, inches: number}[] = [
        { type: 'large', inches: 13 },
        { type: 'medium', inches: 11 },
        { type: 'small', inches: 9 }
    ];

    return (
        <div className="pizza-size section">
            {sizes.map((size) => (
                <label
                    key={size.type}
                    className="pizza-size__item"
                >
                    <input
                        type="radio"
                        name="size"
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
