import "./PizzaApp.scss";
import PizzaViewer from "../../components/pizza-viewer/PizzaViewer.tsx";
import PizzaForm from "../../components/pizza-form/PizzaForm.tsx";

export default function PizzaApp() {
    return (
        <>
            <PizzaViewer></PizzaViewer>
            <PizzaForm></PizzaForm>
        </>
    )
}
