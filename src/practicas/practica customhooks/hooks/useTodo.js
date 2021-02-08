import {useState} from 'react'

const useTodo = (initialValue) => {
    const [todos,setTodo]=useState(initialValue)

    const addTodo=(newTodo)=>{
      newTodo.id=Date.now();

      setTodo([
          ...todos,
          newTodo
      ])
    }
    const deleteTodo=(id)=>{
         setTodo(todos.filter(todo=>todo.id!==id))
    }
    return[
        todos,
        addTodo,
        deleteTodo,
    ]
}

export default useTodo
