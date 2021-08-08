import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos, selectTodos } from "store/slices/TodosSlice";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

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
