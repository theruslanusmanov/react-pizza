import "./PizzaToppings.scss";

export default function PizzaToppings() {
    return (
        <div class="pizza-toppings">
            <label
            >
                <input
                    type="checkbox"
                />
                <span class="pizza-topping__icon pizza-topping__icon--{{ topping }}"></span>
                {/*{{ topping | titlecase }}*/}
            </label>
        </div>
    )
}
