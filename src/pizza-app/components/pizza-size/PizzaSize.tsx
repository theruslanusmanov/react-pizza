import "./PizzaSize.scss";

export default function PizzaSize() {
    return (
        <div class="pizza-size section">
            <label
                class="pizza-size__item"
            >
                <input
                    type="radio"
                    name="size"
                />

                <div class="pizza-size__plate">
                    <div class="pizza-size__pizza pizza-size__pizza--{{ size.type }}">
                        <div class="pizza-size__pizza__line"></div>
                        <div class="pizza-size__pizza__line"></div>
                        <div class="pizza-size__pizza__line"></div>
                        <div class="pizza-size__pizza__line"></div>
                    </div>
                </div>
                {/*{{ size.type | titlecase }} ({{ size.inches }}")*/}
            </label>
        </div>
    )
}
