import "./PizzaViewer.scss";
import {useState} from "react";

export default function PizzaViewer() {
    const [activePizza, setActivePizza] = useState(0)

    return (
        <>
            <div className="pizza-viewer">
                <div className="pizza-viewer__table-side"></div>
                <div className="pizza-viewer__table"></div>
                {activePizza}
                <div className="pizza">
                    <div className="pizza__board"></div>
                    <div className="pizza__base"></div>
                    <div className="pizza__toppings">
                        <div>
                            <div className="pizza__topping pizza__topping--{{ topping }}"></div>
                            <div className="pizza__topping pizza__topping--{{ topping }}"></div>
                            <div className="pizza__topping pizza__topping--{{ topping }}"></div>
                            <div className="pizza__topping pizza__topping--{{ topping }}"></div>
                            <div className="pizza__topping pizza__topping--{{ topping }}"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
