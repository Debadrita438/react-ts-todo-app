import { useRef } from 'react';

import styles from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // const enteredText = todoInputRef.current?.value // value property will only exists if current property is there, otherwise it's undefined
        const enteredText = todoInputRef.current!.value; // value is definitely there and type of it is string

        if (enteredText.trim().length === 0) {
            return;
        }

        props.onAddTodo(enteredText);
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
