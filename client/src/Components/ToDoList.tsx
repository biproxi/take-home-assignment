import React, { Fragment, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { useSelector } from "react-redux";
import { fetchTodos } from "../Redux/todoReducer";
import TodoItem from "./ToDoItem";

import { useDispatch } from "react-redux";
import { setComplete, setTodo } from "../Redux/todoReducer";
import { Todo } from "../Models/models";

import { getTodosHook } from "../Hooks/Hooks";

const ListWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**
 * Functional component that fetches todos from the database and renders each todo item
 * @returns {JSX.Element}
 */
const ToDoList: React.FC = () => {
  // const todoList = useSelector(fetchTodos);
  const dispatch = useDispatch();

  /**
   * Function that fetches the todos from the database using `getTodosHook()` and sets global state with todo objects
   */
  const fetchTodoList = (): void => {
    getTodosHook()
      .then(({ data: { todoList } }: Todo[] | any) => {
        // yeah i could just straight up use the data fetched instead of setting redux state, but what is the fun in that ;)
        dispatch(setTodo(todoList))
      })
      .catch((error: Error) => console.error(error));
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const todoList: Todo[] = useSelector(fetchTodos)

  return (
    <Fragment>
      <ListWrapper>
        {todoList?.map((todoItem: Todo) => (
          <TodoItem title={todoItem.title} status={todoItem.status} id={todoItem._id}/>
        ))}
      </ListWrapper>
    </Fragment>
  );
};

export default ToDoList;
