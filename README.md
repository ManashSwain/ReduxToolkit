Todo App 

A simple and efficient Todo App built with React and Redux Toolkit.

Table of Contents

    Introduction
    Features
    Demo
    Jargons to understand
    steps to setup redux toolkit
    Contributing


Introduction

This Todo App allows users to add and delete Todos. It is built using React for the UI and Redux Toolkit for state management, ensuring a smooth and efficient user experience.

Features

    Add new todos
    Delete existing todos

Demo

A live demo of the app can be found here:
https://redux-toolkit-ten-alpha.vercel.app/

Jargons to understand : 


    1.Store - is what holds all the data your application uses.
    2.Reducer - is what manipulates that data when it receives an action.
    3.Action - is what tells reducer to manipulate the store data, it carries the name and (optionally) some data.
    4.useSelector: A hook that allows you to read data from the Redux store. It takes a selector function as an argument and returns the selected state. It also re-renders the component when the selected state changes.
    5.useDispatch: A hook that provides the dispatch function, which is used to send actions to the Redux store. This updates the state via reducers.


Steps to set up redux toolkit :

1. Install Redux Toolkit and React-Redux

   Add the Redux Toolkit and React-Redux packages to your project:

    npm install @reduxjs/toolkit react-redux

2. Create a Redux Store

    import { configureStore } from '@reduxjs/toolkit'

       export const store = configureStore({
        reducer: {},
        })

3. Provide the Redux Store to React

    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'
    import './index.css'
    import { store } from '../src/app/store.js'
    import { Provider } from 'react-redux'

     ReactDOM.createRoot(document.getElementById('root')).render(
       <Provider store={store}>
         <App />
       </Provider>,
       )

4. Create a Redux State Slice

    import { createSlice , nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos : [{id : 1 , text : "Todos will be displayed here"}]
}



export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo : (state , action)=>{
     const todo = {
        id : nanoid(),
        text : action.payload
     } 
     state.todos.push(todo);
    },
    removeTodo : (state , action)=>{
      state.todos = state.todos.filter((todo)=>(
        todo.id !== action.payload 
      ))
    }
  },
})


export const {addTodo , removeTodo  } = todoSlice.actions

export default todoSlice.reducer




5. Add Slice Reducers to the Store
 
  import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
  reducer: todoReducer ,
})



6. Use Redux State and Actions in React Components

 I have created two components AddTodo.jsx and Todos.jsx 
 with the help of useSelector and useDispatch Hook we will be adding todos and removing todos 

 AddTodo.jsx :

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


Todos.jsx : 

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



Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

    Fork the repository.
    Create a new branch (git checkout -b feature-branch).
    Make your changes.
    Commit your changes (git commit -m 'Add new feature').
    Push to the branch (git push origin feature-branch).
    Open a pull request.














