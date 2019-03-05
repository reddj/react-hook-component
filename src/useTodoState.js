import { useState } from 'react'

export default initalValue => {
    const [todos, setTodos] = useState(initalValue);

    return {
        todos,
        addTodo: todoText => {
            setTodos([...todos, todoText])
        },
        deleteTodo: todoIndex => {
            const newTodos = todos
              .filter((_, index) => index !== todoIndex)
            setTodos(newTodos);
        }
    };
};