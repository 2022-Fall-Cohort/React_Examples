import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  console.log('App Rendered');
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    console.log('getItem - localStorage');
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    console.log('setItem - localStorage');
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    console.log('toggleTodo');
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    e.preventDefault();
    console.log('handleAddTodo');
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos(e) {
    e.preventDefault();
    console.log('handleClearTodos');
    if (todos.length === 0) return todos;
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <form>
        <input ref={todoNameRef} type="text" />
        <button onClick={handleAddTodo} type="submit">
          Add Todo
        </button>
        <button onClick={handleClearTodos}>Clear Complete</button>
      </form>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
