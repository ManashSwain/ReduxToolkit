import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
  return (
    <>
    <h2>My Todos</h2>
    <div className="allTodos">
   {todos.map((todo)=>(
     <li key={todo.id} className='items'>
        {todo.text}
        <button className='remove' onClick={()=>{dispatch(removeTodo(todo.id))}}>X</button>
     </li>
   ))}
   </div>
    </>
  )
}

export default Todos
