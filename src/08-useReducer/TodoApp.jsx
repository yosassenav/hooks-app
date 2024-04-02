import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialtodo = [
// {
//     id: new Date().getTime() * 3,
//     description: 'Recolectar la gema del tiempo',
//     done: false,
// }
]

export const TodoApp = () =>{
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

    return (
    <>
        <h1>TodoApp: 10 <small>pendientes: 2</small></h1>
        <hr/>
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos}/>
            </div>
            <div className="col-5">
                <h4>Agrear To Do</h4>
                <TodoAdd onNewTodo={handleNewTodo}/> 
            </div>
        </div>
        
    </>
    )
}