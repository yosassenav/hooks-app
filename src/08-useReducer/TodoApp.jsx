import { useReducer } from "react"
import { todoReducer } from "./todoReducer";

const initialState = [{
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
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
    <>
        <h1>TodoApp: 10 <small>pendientes: 2</small></h1>
        <hr/>
        <div className="row">
            <div className="col-7">
                <ul className="list-group">
                    {
                        state.map((item) => {
                            <li key={item.id} className="list-group-item d-flex justify-content-between">
                                <span className="align-elf-center">Item 1</span>
                                <button className="btn btn-danger">Borrar</button>
                            </li>
                        })
                    }
                    
                    
                </ul>
            </div>
            <div className="col-5">
                <h4>Agrear To Do</h4>
                <form>
                    <input 
                    type='text'
                    placeholder="Que hay que hacer?"
                    className="form-control mb-2"
                    />
                    <button
                    type="submit"
                    className="btn btn-outline-primary mt-2"
                    >
                        Agregar
                    </button>
                </form>
            </div>
        </div>
        
    </>
    )
}