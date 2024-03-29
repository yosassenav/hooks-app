import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialtodo = [{
    id: new Date().getTime(),
    description: 'Recolectar la gema del alma',
    done: false,
},
{
    id: new Date().getTime() * 3,
    description: 'Recolectar la gema del tiempo',
    done: false,
}
]

export const TodoApp = () =>{
    const [todos, dispatch] = useReducer(todoReducer, initialtodo);

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
               <TodoAdd/>
            </div>
        </div>
        
    </>
    )
}