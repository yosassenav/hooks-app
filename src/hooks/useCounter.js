import { useState } from "react"

export const usecounterer = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    return {
        counter,
    }
}