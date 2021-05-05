import React from 'react';
import { TodoList } from './features/todoList/TodoList';
import './App.css';
import { loadTodoList } from './features/todoList/todoListSlice';
import { store } from './app/store';

store.dispatch(loadTodoList())

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./biproxi.png" className="App-logo" alt="logo" />
        <span>Todo-er</span>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
