//{Named} import
import React, { useState, useRef,useEffect } from 'react';
import TodoList from "./TodoList";

//We defined the v4 method as uuidv4 (this creates random id)
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'


function App() {
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef()




    useEffect(() =>{
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])



    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])


//  THIS FUNCTION IS FOR MARKING THE CHECKBOX

    function toggleTodo(id){
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }


    function handleAddTodo(e) {
      const name = todoNameRef.current.value
      if (name === '') return
      setTodos(prevTodos => {
          return [...prevTodos, {id:uuidv4(), name: name, complete: false}]
      })
      todoNameRef.current.value = null
    }


    function handleClearTodos(){
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }


    return (
     <>
       <TodoList todos={todos} toggleTodo={toggleTodo}/>
       <input ref={todoNameRef} placeholder="Enter A ToDo..." type="text" />
       <button onClick={handleAddTodo}>Add Todo</button>
       <button onClick={handleClearTodos}>Clear Completed Todos</button>
       <div>{todos.filter(todo => !todo.complete).length} Left To Do.</div>
     </>

    )}


export default App;
