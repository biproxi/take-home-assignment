import React from 'react';
import './App.css';
import {store} from "./state/store/store";
import {Todo, TodoStatusEnum} from "./types";

const test = {
    title: "test",
    status: TodoStatusEnum.Active,
    lastUpdatedAt: 12345,
    createdAt: 12334545
};

store.dispatch({type: "ADD_TODO", payload: test});
console.log(store.getState());

function App() {
  return (
    <>
      <input type="text" name="item" placeholder="Add a todo item"/>
      <button>Add todo</button>
    </>
  );
}

export default App;
