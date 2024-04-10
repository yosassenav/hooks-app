import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList  = ({todos = [], onDeleteTodo, onToggleTodo}) => {
    return (
        <ul className="list-group">
            {todos.map( todo=>(
                <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
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
    onDeleteTodo: PropTypes.func,
    onToggleTodo: PropTypes.func
};

