import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, TextField, IconButton, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// import ITodo from '../../backend/types/todoInterface'
import { setTodo } from "../Redux/todoReducer";
import styled from "styled-components";
import { addTodoHook } from "../Hooks/Hooks";
import configureStore from "../Redux/store";
import { Todo, TodoStatusEnum } from "../Models/models";

const useStyles = makeStyles(() => ({
  addButtonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const TextFieldWrapper = styled.div`
  display: flex;
`;

/**
 * Functional component that renders the input field on the todo list
 * Also contains logic for adding an item to the database and state
 * @returns {JSX.Element}
 */
const ToDoTextField: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState("");

  /**
   * Adds a new item to the database, as well as global state
   */
  const addTodoItem = (): void => {
    // omit id because the database will assign one
    const formData: Omit<Todo, "_id"> = {
      title: userInput,
      status: TodoStatusEnum.Active,
      lastUpdatedAt: Math.floor(Date.now() / 1000),
      createdAt: Math.floor(Date.now() / 1000),
    };
    addTodoHook(formData)
      .then((data) => {
        if (data?.status !== 201) {
          console.error("Todo was not saved. sowwy :(");
        }
        const todoList: Array<Todo> = data?.data?.todos;
        // Add the new todo's array to state
        dispatch(setTodo(todoList))
      })
      .catch((error: Error) => console.error(error));
  };

  return (
    <Fragment>
      <TextFieldWrapper>
        <form autoComplete="off">
          <TextField
            id="standard-basic"
            onChange={(e) => setUserInput(e.target.value)}
          />
        </form>
        <IconButton
          aria-label="add"
          onClick={addTodoItem}
          className={classes.addButtonWrapper}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </TextFieldWrapper>
    </Fragment>
  );
};

export default ToDoTextField;
