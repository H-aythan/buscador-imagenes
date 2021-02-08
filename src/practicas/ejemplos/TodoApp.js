import React, { useReducer, useState } from 'react'
const types={
    add:'add',
    update:'update',
    delete:'delete'
}
const initialTodos=[
    {id:1,title:"todo 1"},
    {id:2,title:"todo 2"}
]
const reducer =(state,action)=>{
    switch(action.type){
        case types.delete:
            return state.filter(todo=>todo.id!==action.payload)
        case types.add:
            return [...state,{id:state.length+1,title:action.payload}]
        case types.update:{
            const todoEdit=action.payload;
            return state.map(todo=>todo.id===todoEdit.id?todoEdit:todo);
        }
        default:
            return state
                
       
            
    }
}
const TodoApp = () => {
    const [state,dispath]=useReducer(reducer,initialTodos)
    const [text,setText]=useState('');
    
    const submit=(e)=>{
        e.preventDefault();
        
        dispath({type:types.add,payload:text})
    }

    return (
        <div>
            <h3>Todo app</h3>
            
            <form onSubmit={submit}>
                <input
                placeholder="todo"
                value={text}
                onChange={e=>setText(e.target.value)}
                />

                <button type="submit">
                add  
                </button>  
            </form>

            <ul>
                {state.map(todo=>{
                    return(
                    <li key={todo.id}>
                       {todo.title}
                       <button onClick={()=>dispath({
                           type:types.delete,
                           payload:todo.id
                           })}>//revisar la salida de datos
                           delete
                       </button>
                       <button onClick={()=>dispath({
                           type:types.update,
                           payload:{...todo,title:text}
                           })}>
                           update
                       </button>
                    </li> 
                    )
                })}
                
            </ul>
        </div>
    )
}

export default TodoApp
