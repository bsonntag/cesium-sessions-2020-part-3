import React, { useState } from 'react';

function AddTodoForm(props) {
  const { onNewTodo } = props;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const newTodo = event.target.elements.todo.value;
        onNewTodo(newTodo);
        event.target.reset();
      }}
    >
      <label>
        New to-do
        <input name='todo' />
      </label>
      <button type='submit'>Create</button>
    </form>
  );
}

function TodoList(props) {
  const { todos, onRemoveTodo } = props;
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            {todo}
            <button
              onClick={() => {
                onRemoveTodo(index);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
}

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

      <AddTodoForm
        onNewTodo={(newTodo) => {
          addTodo(newTodo);
        }}
      />

      <TodoList
        todos={todos}
        onRemoveTodo={(index) => {
          removeTodo(index);
        }}
      />
    </main>
  );
}
