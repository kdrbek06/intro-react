import React from 'react';
import Todo from "./Todo";


const TodoList = ({todos}) => {
    return (
        todos.map(todo => {
            return <Todo key= {todo.name} todo={todo} />
        })
    )
}

export default TodoList;