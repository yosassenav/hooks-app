const initialState = [{
    id: 1,
    toDo: 'Recolectar la gema del Alma',
    done: false,
}];

const todoReducer = (state = initialState, action = {}) =>{
    if(action.type === "ADD_TODO"){
        return [...state, action.payload]
    }
    return state;
}

// todos stores the current or initial state
let todos = todoReducer();

// console.log(todos);

const newTodo = {
    id: 2,
    toDo: 'Recolectar la gema del Tiempo',
    done: false,
}

const addToDoAction = {
    type: "ADD_TODO",
    payload: newTodo,
}

// the reducer receives  the current state and an action as parameters
// it returns a new state based on the action that was dispatched
todos = todoReducer(todos, addToDoAction);

console.log({state: todos})

