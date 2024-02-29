import { useState } from "react"

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        console.log(value); 
        /**el parametro "value" es un evento y los eventos en JS son objetos,
         * por lo que por eso marca error al sumar un valor (counter) con un objeto.
         */
        setCounter(counter + value);
    }

    const decrement = (value = 1) => {
        if (counter === 0) return;
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}