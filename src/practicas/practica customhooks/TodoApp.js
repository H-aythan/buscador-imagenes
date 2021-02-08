// import {useState} from 'react'
import useTodo from './hooks/useTodo'

const intialTodos=[
    {id:1,title:'Learn React'},
    {id:2,title:'Learn Node'}
]

const TodoApp = () => {
    const[todos,addTodo,deleteTodo]=useTodo(intialTodos)
    
    return (
        <div>
            <button onClick={()=>addTodo({title:"learn express"})}>
               add   
            </button>
            <ul>
                {todos.map(todo=>
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={()=>deleteTodo(todo.id)}>
                            Delete   
                        </button>
                    </li> 
                    )}
                
            </ul>
        </div>
    )
}

export default TodoApp
