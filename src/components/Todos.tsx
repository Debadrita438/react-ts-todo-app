import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';

import styles from './Todos.module.css';

const Todos: React.FC = () => {
    const todoCtx = useContext(TodosContext);

    return (
        <ul className={styles.todos}>
            {todoCtx.items.map((item) => (
                <TodoItem
                    key={item.id}
                    todo={item.text}
                    onDelete={todoCtx.removeTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
};

export default Todos;
