import { renderHook } from "@testing-library/react"
// import {describe, test, expect} from "@jest"
import { useCounter } from '../../src/hooks/useCounter'
import { act } from "react-dom/test-utils";

describe('Pruebas en el useCounter',()=>{
    test('debe regresar los valores por defecto',()=>{
        const {result} = renderHook(()=>useCounter());
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('debe generar el counter con el valor de 100',()=>{

        // we always render first the component/hook  that is being tested
        const {result} = renderHook(()=>useCounter());
        expect(result.current.counter).toBe(10);

    })

    test('Probando la funcion increment',()=>{
        const {result} = renderHook(()=>useCounter());
        const { increment } = result.current;

        // act is a function  provided by @testing-library/react to update state in our components
        act(()=>{
            increment()
            increment(2)
        })

        expect(result.current.counter).toBe(13)

    });

    test('Probando la funcion de decrement',()=>{
        const {result} = renderHook(()=>useCounter());
        const { decrement } = result.current;

        // act is a function  provided by @testing-library/react to update state in our components
        act(()=>{
            decrement()
            decrement(2)
        })

        expect(result.current.counter).toBe(7)
    })

    test('Probando la funcion de reset',()=>{
        const {result} = renderHook(()=>useCounter());
        const { reset } = result.current;

        // act is a function  provided by @testing-library/react to update state in our components
        act(()=>{
            reset();
        })

        expect(result.current.counter).toBe(10)
    })

})