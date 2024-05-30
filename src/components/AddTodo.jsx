import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import {addTodo } from '../features/todo/todoSlice'


const AddTodo = () => {
    const [input, setInput]= useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
       e.preventDefault();
       dispatch(addTodo(input));
       setInput("");
    }
  return (
    <>
    <div className="container">
    <form onSubmit={handleSubmit}>
    <input 
    type="text"
    placeholder='Enter your todo...'
    value={input}
    onChange={(e)=>{setInput(e.target.value)}}
     />
     <button>Add Todo</button>
     </form>
     </div>
    </>
  )
}

export default AddTodo
