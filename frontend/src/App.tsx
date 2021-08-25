import React from 'react';
import './App.css';
import {store} from "./state/store/store";
import {log} from "util";

// This feels redundant having it in both the reducer and here but for now I am going to let it slide
enum TodoStatusEnum {
    Active = 'Active', // the todo has is not completed
    Inactive = 'Inactive', // the todo is completed
    Archived = 'Archived', // the todo is archived
};

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
