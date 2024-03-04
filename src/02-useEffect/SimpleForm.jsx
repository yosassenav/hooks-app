import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'yosassenav',
        email: 'yosassenav@example.com',
    })

    const {username, email} = formState;

    const onInputChange =  ({target}) => {
        const {name, value} = target;
        console.log({name, value});

        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(()=> {
        // console.log("useEffect has been called!")
    },[]);

    useEffect(()=>{
        // console.log("form has been changed!")
    },[formState]);

    useEffect(()=>{
        // console.log("email changed!")
    },[email]) // this will run only when the email

    return (
    <>
        <h1>Simple Form</h1>
        <hr/>

        <input
        type="text" 
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
        />

        <input
        type="email" 
        className="form-control mt-2"
        placeholder="Email Address"
        name="email"
        value={email}
        onChange={onInputChange}
        />
        {
            (username === 'yosassenav2') && <Message/>
        }
    </>
    )
}