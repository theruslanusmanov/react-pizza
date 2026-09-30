import "./PizzaSize.scss";

export default function PizzaSize() {
    return (
        <div className="pizza-size section">
            <label
                className="pizza-size__item"
            >
                <input
                    type="radio"
                    name="size"
                />

                <div className="pizza-size__plate">
                    <div className="pizza-size__pizza pizza-size__pizza--{{ size.type }}">
                        <div className="pizza-size__pizza__line"></div>
                        <div className="pizza-size__pizza__line"></div>
                        <div className="pizza-size__pizza__line"></div>
                        <div className="pizza-size__pizza__line"></div>
                    </div>
                </div>
                {/*{{ size.type | titlecase }} ({{ size.inches }}")*/}
            </label>
        </div>
    )
}
