import './App.css'
import PizzaForm from "./pizza-app/components/pizza-form/PizzaForm"
import PizzaViewer from "./pizza-app/components/pizza-viewer/PizzaViewer.tsx";

function App() {
  return (
    <>
     <PizzaViewer></PizzaViewer>
     <PizzaForm></PizzaForm>
    </>
  )
}

export default App
