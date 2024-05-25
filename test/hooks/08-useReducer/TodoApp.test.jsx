import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../../src/08-useReducer/TodoApp"
import { useTodo } from "../../../src/hooks/useTodo";


jest.mock('../../../src/hooks/useTodo');

describe('Pruebas en <TodoAp/>',()=>{

    useTodo.mockReturnValue({
        todos: [
            {id:1, description: 'Piedra', done: false},
            {id:2, description: 'Papel', done: true},
            {id:3, description: 'Tijera', done: false},
        ],
        todosCount: 3,
        pendingTodosCount: 2,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn()

    })

    test('debe mostrar el componente correctamente',()=>{
        render( <TodoApp/> );
        // screen.debug();
        expect( screen.getByText('Piedra') ).toBeTruthy();
        expect( screen.getByText('Papel') ).toBeTruthy();
        expect( screen.getByText('Tijera') ).toBeTruthy();

        expect(screen.getAllByRole('textbox')).toBeTruthy();



    })
})