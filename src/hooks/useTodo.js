import { useReducer, useEffect } from "react";
import {todoReducer} from "./../08-useReducer/todoReducer";

const initialtodo = [
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la gema del tiempo',
    //     done: false,
    // }
]

export const useTodo = () => {

/**This function is to avoid losing the todo data when the browser 
     * reloads
    */
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
const [todos, dispatch] = useReducer(todoReducer, initialtodo, init);
    
    /**the useEffect is for storing all the data
     *  or todos in the localStorage and in order to store the
     * data  we need to stringify it because localStorage only accepts strings */

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])


    const handleNewTodo = (todo) => {
        const action = {
            type:'[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        const action={
            type:'[TODO] Remove Todo',
            payload: id
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type :'[TODO] Toggle Todo',
            payload: id
        }

        dispatch(action);
    }

    return{
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleToggleTodo,
        handleDeleteTodo
    }
}