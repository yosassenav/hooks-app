import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef();

    const onClick = ()=>{
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <>
            <h2>Focus Screen</h2>
            <hr/>
            <input
            type="text"
            placeholder="Ingrese su nombre"
            ref={inputRef}
            className="form-control mb-3"
            />
             <input
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control mb-3"
            />
            <button
            className="btn btn-primary mt-2"
            onClick={onClick}
            >
            Set Focus
            </button>
        </>
    )
}