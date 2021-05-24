import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import {v4 as uuid} from "uuid"; 

function TodoList() {

  // set the state for the todos and setTodos using useState
  const [todos, setTodos] = useState([
    { id: uuid(), task: "create todo app", status: false },
    { id: uuid(), task: "create pull request", status: false }
  ]);

  // adding a new todo from the form and adding it to the todos object
  const create = (newTodo) => {
    // using a spread operator that makes a copy of the todos object with the new todo
    setTodos([...todos, newTodo]);
  };

  // removing a todo
  const remove = (id) => {
    // filter out todos with id
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // using an id to determine what we are updating
  // using updatedTask to determine what the new task is and then updates the state
  const update = (id, updatedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // using id to detemine what we are updating
  // changing todo to completed and returning the new array
  const toggleStatus = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // loop through our todos and create todo component
  const todosList = todos.map((todo) => (
    // todo component
    <Todo 
      todo={todo}
      key={todo.id}
      remove={remove}
      update={update}
      toggleStatus={toggleStatus}
    />
  ));

  return (
    <div>
      <h1>Biproxi Todo List</h1>
      <ul>
        <li>{todosList}</li>
      </ul>
      <NewTodoForm createTodo={create} />
    </div>
  );
}

export default TodoList;
