import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "store/slices/TodosSlice";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      {todos.map(todo => (
        <TodoItem
          key={todo.createdAt}
          title={todo.title}
          status={todo.status}
          lastUpdatedAt={todo.lastUpdatedAt}
          createdAt={todo.createdAt}
        />
      ))}
    </>
  );
};
