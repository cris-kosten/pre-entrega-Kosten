// Counter container  Aqui va la Logica del componente
// crear un estado que sea variable con hobsk

//importo el hooks
import { useState } from "react"
import Counter from "./Counter"

export const CounterContainer = ({ stock, initial = 1, onAdd }) => {

    // lo uso y lo ejecuto al hooks
    const [contador, setContador] = useState(initial);


    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        } else {
            alert("maximo en stock")
        }
    }

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        } else {
            alert("no podes menos de 1")
        }
    };

    let objetProps = {
        restar,
        sumar,
        contador,
        onAdd
    }

    return (
        <Counter {...objetProps} />
    );
};

