import { todoReducer } from "../../../src/08-useReducer/todoReducer"

describe('Puebas en el todoReducer',()=>{

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        donde: false
    }]

    test('debe regresar el estado inicial',()=>{

        // const action = {type: 'TEST_ACTION'}
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    })

    test('debe agregar un todo',()=>{

        const action = {
            type:'[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'add todo #2',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);    
    })

    test('debe eliminar un todo',()=>{
        const action = {
            type:'[TODO] Remove Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    })

    test('debe hacer el toggle del todo',()=>{
        const action = {
            type:'[TODO] Toggle Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
    })
})