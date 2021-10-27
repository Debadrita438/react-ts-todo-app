import { useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';

import styles from './NewTodo.module.css';

const NewTodo: React.FC = () => {
    const todoInputRef = useRef<HTMLInputElement>(null);
    const todoCtx = useContext(TodosContext);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // const enteredText = todoInputRef.current?.value // value property will only exists if current property is there, otherwise it's undefined
        const enteredText = todoInputRef.current!.value; // value is definitely there and type of it is string

        if (enteredText.trim().length === 0) {
            return;
        }

        todoCtx.addTodo(enteredText);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <label htmlFor='todo'>Todo Text</label>
            <input type='text' id='todo' ref={todoInputRef} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
