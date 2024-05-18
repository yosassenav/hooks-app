import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/TodoItem";

describe('Puebas en >TodoItem/>',()=>{

    const todo = {
        id: 1,
        description: 'Aprender JEST',
        done: false
    }
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    test('Debe mostrar el Todo pendiente por completar',()=>{
        render(
        <TodoItem todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}/>
    );

    const liElement = screen.getByRole('listitem');
    // console.log(liElement.innerHTML);
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');

    })

    test('Debe mostrar el Todo completado',()=>{

        todo.done = true;

        render(
        <TodoItem todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}/>
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).toContain('text-decoration-line-through');
    })

    test('span debe llamar el ToggleTodo',()=>{
        render(
            <TodoItem todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}/>
        );
    
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)

    })

    test('span debe llamar el deleteTodo',()=>{
        render(
            <TodoItem todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}/>
        );
    
        const buttonElement = screen.getByRole('button', {name: 'Borrar'});
        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    })

})