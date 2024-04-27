// import {describe, test} from "@jest"
import { renderHook, act } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('prueas en el useForm',()=>{

    const initialForm = {
        name: "Vanessa",
        email: "vanessa@example.com"
    }

    test('debe regresar los valores por defecto',()=>{
        const { result } = renderHook(()=>useForm(initialForm))
        // console.log(result.current)
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            resetForm: expect.any(Function)
          })

    })

    test('debe cambiar el nombre del formulario', ()=>{
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        
        const newName = 'Juan';

        act(()=>{ 
            onInputChange({target: {name: 'name', value: newName}});
        });
        
        expect(result.current.name).toBe(newName);
        expect(result.current.formState.name).toBe(newName)
    })

    test('debe hacer reset del formulario', ()=>{
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, resetForm } = result.current;
        
        const newName = 'Juan';

        act(()=>{ 
            onInputChange({target: {name: 'name', value: newName}});
            resetForm();
        });
        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name);
    })
})