import React, { useState } from 'react';
import TodoForm from './TodoForm';

const Todo = ({ todos, completeTodo, removeTodo, editTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  
  const submitUpdate = value => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index} >
      <div className='todo-row'  onClick={() => completeTodo(todo.id)}>
        <p key={todo.id}> {todo.text}</p>
      </div>
      <div className='icons'>
        <button className='edit-icon' onClick={() => setEdit({ id: todo.id, value: todo.text })}>
        </button>
        <button className="delete-icon tooltip" onClick={() => removeTodo(todo.id)}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="binIconTitle" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> <title id="binIconTitle">Bin</title> <path d="M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10"/> </svg>
        </button>
      </div>
    </div>
  ));
};

export default Todo;
