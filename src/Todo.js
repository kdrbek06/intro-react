import React from 'react';


const Todo = ({todo,toggleTodo}) => {
    function handleTodoClick(){
         toggleTodo(todo.id)
    }

    return (
        <tr class="row">

            <td class="col-2">
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            </td>
            <td class="col-10">
                {todo.name}
            </td>

        </tr>


    );
};

export default Todo;