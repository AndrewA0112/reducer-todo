import React, { useState, useReducer } from 'react'

import { initialState, todoReducer } from '../reducers/todoReducer'

import './TodoList.css'

const TodoList = () => {
    const [ todoInput, setTodoInput ] = useState('');
    const [ state, dispatch ] = useReducer(todoReducer, initialState)
    
    const handleChanges = e => {
        setTodoInput(e.target.value);
    };

    const handleAdd = () => {
        setTodoInput('')
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input
                className='add-input'
                type='text'
                value={todoInput}
                name="todo"
                onChange={handleChanges}
            />
            <button className="btn" 
            onClick={() => {
                dispatch({ type: 'ADD_TODO', payload: todoInput})
                handleAdd()
            }}>Add</button>
            <button className="btn" onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>Clear</button>
            {
                state.todos.map(todo => {
                    return <h3 className={`todo${todo.completed ? ' completed' : ''}`} key={todo.id} onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id})}>{todo.item}</h3>
                })
            }
        </div>
    )
}

export default TodoList;