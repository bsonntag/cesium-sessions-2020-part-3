import React, { useState } from 'react';

export function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  function removeTodo(indexToRemove) {
    const newTodos = todos.filter((todo, index) => {
      return index !== indexToRemove;
    });
    setTodos(newTodos);
  }

  return (
    <main>
      <h1>To-do app</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTodo = event.target.elements.todo.value;
          addTodo(newTodo);
          event.target.reset();
        }}
      >
        <label>
          New to-do
          <input name='todo' />
        </label>
        <button type='submit'>Create</button>
      </form>

      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button
                onClick={() => {
                  removeTodo(index);
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
