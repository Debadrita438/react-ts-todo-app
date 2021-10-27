const TodoItem: React.FC<{ todo: string }> = (props) => {
    return <li>{props.todo}</li>;
};

export default TodoItem;

// If you want to enter the full object
// import Todo from '../models/todo';

// const TodoItem: React.FC<{ todo: Todo }> = (props) => {
//     return <li>{props.todo.text}</li>;
// };

// export default TodoItem;
