import React from 'react';
import Todo from "./Todo";


const TodoList = ({todos, toggleTodo}) => {
    return (
        todos.map(todo => {
            return(
                <tbody>
                    <Todo key= {todo.id} toggleTodo={toggleTodo} todo={todo} />
                </tbody>





            )
        })
    )
}

export default TodoList;