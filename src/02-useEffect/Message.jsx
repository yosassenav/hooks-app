import { useEffect, useState } from "react"

export const Message = ()=>{
    const [coords, setCoords]=useState({x:0,y:0})
    
    useEffect(()=>{
    /* in the argument of the function comes the destructuring
    of x and y properties that come with every event object
    */
    const onMouseMove = ({x,y}) => {
        // const coords = {x, y};
        setCoords({x, y});
    }
        window.addEventListener('mousemove',onMouseMove)

        return(()=>{
            window.removeEventListener('mousemove',onMouseMove)
        })
    },[])
    return (
        <>
            <h3>Usurio ya existe!</h3>
            {/**React is not capable of rendering objects that's why
             * is necessary the JSON.stringy, to render it as a string
             */}
            {JSON.stringify(coords)}
        </>
    )
}