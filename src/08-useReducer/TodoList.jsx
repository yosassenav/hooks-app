import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList  = ({todos = [], onDeleteTodo}) => {
    return (
        <ul className="list-group">
            {todos.map( todo=>(
                <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        done: PropTypes.bool,
    })),
    onDeleteTodo: PropTypes.func
};

