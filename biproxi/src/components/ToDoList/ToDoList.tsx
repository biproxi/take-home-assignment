import {Todo, TodoList} from "../../index";
import {ToDoItem} from "../ToDoItem/ToDoItem";
import {useState} from "react";

const parseTodoList = (todoList: Todo[]) => {
    if (todoList.length === 0) {
        return <p>No todos</p>
    }
    return todoList.map((todo: Todo) => {
        return <ToDoItem key={todo.createdAt} todo={todo}/>
    })
};
export const ToDoList= (props: TodoList) => {
  const [todos] = useState(props.todos);
  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {parseTodoList(todos)}
      </ul>
    </div>
  );
};