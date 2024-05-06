import { useState } from "react";

export const useForm = (initialForm = {})=>{
    const [formState, setFormState] = useState(initialForm)


    const onInputChange =  ({target}) => {
        const {name, value} = target;
        // console.log({name, value});

        setFormState({
            ...formState,
            [name]: value
        });
    }

    const  resetForm=()=>{
       setFormState(initialForm);
     };

    return {
        ...formState, //allows to  access all the form data of the formState object
        formState,
        onInputChange,
        resetForm,
    }
}