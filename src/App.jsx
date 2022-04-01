import React, {useState} from 'react'
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

function App() {

  const [todos,setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([
      todo, ...todos
    ]);
  }

  // -----------------------------------------------------------------------------

  const editTodo = (todoId, newValue) => {
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    setTodos([...todos].filter(todo => todo.id !== id));
  };

  const completeTodo = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    }));
  };

  return (
    <div className='todo-app'>
      <h1>todo Lista</h1>
      <TodoForm onSubmit={addTodo}/>
      <div className='container margin-top'>
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}/>
      </div>
    </div>
  )
}

export default App