import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () =>{
    const [counter, setCounter] = useState(10);
    const incrementFunc = useCallback(
        (value)=>{
            setCounter((c) => c + value)
        },[])
    
        useEffect(()=>{
            // incrementFunc();
        },[incrementFunc])
   
    return (
        <>
            <h1>Callback Hook: {counter}</h1>
            <hr/>
            <ShowIncrement increment={incrementFunc}/>

        </>
    )
}