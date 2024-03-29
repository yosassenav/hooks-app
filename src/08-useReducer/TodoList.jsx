import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList  = ({todos = []}) => {
    return (
        <ul className="list-group">
             {Array.isArray(todos) && todos.map(todo => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        done: PropTypes.bool,
    }))
};

