import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

function TodoList() {

  // set the state for the todos and setTodos using useState
  const [todos] = useState([
    { task: "create todo app", completed: false },
    { task: "create pull request", completed: false }
  ]);

  // loop through our todos and create todo component
  const todosList = todos.map((todo) => (
    // todo component
    <Todo 
      todo={todo}
    />
  ));

  return (
    <div>
      <h1>Biproxi Todo List</h1>
      <ul>
        <li>{todosList}</li>
      </ul>
      <NewTodoForm />
    </div>
  );
}

export default TodoList;
