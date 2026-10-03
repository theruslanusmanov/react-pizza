import "./PizzaApp.scss";
import PizzaViewer from "../../components/pizza-viewer/PizzaViewer.tsx";
import PizzaForm from "../../components/pizza-form/PizzaForm.tsx";

// eslint-disable-next-line react-refresh/only-export-components
export const prices: {
    [key: string]: { base: number, toppings: number };
} = {
    small: {base: 9.99, toppings: 0.69},
    medium: {base: 12.99, toppings: 0.99},
    large: {base: 16.99, toppings: 1.29}
};

export default function PizzaApp() {
    // const [activePizza, setActivePizza] = useState(0)
    // const [total, setTotal] = useState('0')
    //
    //
    // function createPizza() {
    //     // TODO
    // }
    //
    // function addPizza() {
    //     // TODO
    // }
    //
    // function removePizza(index: number) {
    //     // TODO
    // }
    //
    // function togglePizza(index: number) {
    //     setActivePizza(index);
    // }
    //
    // function calculateTotal(value: number) {
    //     const price = value.reduce((prev: number, next: any) => {
    //         const price = prices[next.size];
    //         return prev + price.base + (price.toppings * next.toppings.length);
    //     }, 0);
    //     setTotal(price.toFixed(2));
    // }
    //
    // function createOrder(order: FormGroup) {
    //     console.log(order.value);
    // }

    return (
        <>
            <PizzaViewer></PizzaViewer>
            <PizzaForm></PizzaForm>
        </>
    )
}
