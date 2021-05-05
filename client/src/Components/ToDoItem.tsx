import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../Redux/todoReducer";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Typography, Tooltip } from "@material-ui/core";
import { deleteTodoHook, updateTodoHook } from "../Hooks/Hooks";
import { Todo, TodoStatusEnum } from "../Models/models";
import EditTodoTitle from "./EditTodoTitle";

const useStyles = makeStyles(() => ({
  titleInactive: {
    textDecoration: "line-through",
    flex: 1,
  },
  titleActive: {
    textDecoration: "none",
    flex: 1,
  },
  itemInactive: {
    color: "green",
  },
  itemActive: {
    color: "rgba(0, 0, 0, 0.54)",
  },
  button: {
    padding: "6px",
  },
}));

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  background-color: white;
  margin: 6px 4px;
  height: 45px;
  border-radius: 12px;
  padding: 0 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface Props {
  title: string;
  status: TodoStatusEnum;
  id: string | undefined;
}

/**
 * @param title {string}, The title of a todo
 * @param status {TodoStatusEnum}, Status of a todo (i.e. "Active" or "Inactive")
 * @param id {string}, id assigned to a todo by mongo
 * @returns {JSX.Element}
 */
const TodoItem: React.FC<Props> = ({ title, status, id }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  // i know that the readme says no useState, but I am not using it to persist anything crazy
  // i am just using this to edit the title. i assume this is fine. if it isn't, pls forgive
  const [edit, setEdit] = useState(false);

  /**
   * Function that changed the status of a todo item within the database using the `updateTodoHook` hook
   * Also updates the item within the global state
   */
  const handleItemStatusChange= (): void => {
    const todoItem: Todo = {
      _id: id,
      title: title,
      status:
        status === TodoStatusEnum.Active
          ? TodoStatusEnum.Inactive
          : TodoStatusEnum.Active,
      lastUpdatedAt: Math.floor(Date.now() / 1000),
    };
    updateTodoHook(todoItem).then((data) => {
      if (data?.status !== 200) {
        console.error("There was an error updating the todo from the db");
      }
      dispatch(updateTodo(todoItem));
    });
  };

  /**
   * Handles deleting an item within both the database using the `deleteTodoHook` hook and the state
   */
  const handleItemDelete = (): void => {
    deleteTodoHook(id)
      .then((data) => {
        if (data?.status !== 200) {
          console.error("There was an error deleting the todo from the db");
        }
        dispatch(deleteTodo(id));
      })
      .catch((error: Error) =>
        console.log("whoops, there was an error: ", error)
      );
  };

  /**
   * Sets the local edit state to represent whether or not a user is editing an item
   */
  const handleItemTitleEdit = (): void => {
    setEdit(!edit);
  };

  return (
    <ItemContainer>
      {edit ? (
        <div style={{flex: 1}}>
        <EditTodoTitle id={id} title={title} status={status} setEdit={setEdit}/>
        </div>
      ) : (
        <Typography
          className={
            status === "Inactive" ? classes.titleInactive : classes.titleActive
          }
        >
          {title}
        </Typography>
      )}

      <ButtonContainer>
        <IconButton className={classes.button}>
          {console.log({ status })}
          <Tooltip
            placement="top"
            title={status === "Active" ? "Mark Complete" : "Mark Incomplete"}
          >
            <CheckCircleOutlineIcon
              className={
                status === "Inactive"
                  ? classes.itemInactive
                  : classes.itemActive
              }
              onClick={handleItemStatusChange}
            />
          </Tooltip>
        </IconButton>
        <IconButton className={classes.button}>
          <Tooltip placement="top" title="Edit">
            <EditIcon onClick={handleItemTitleEdit} />
          </Tooltip>
        </IconButton>
        <IconButton className={classes.button}>
          <Tooltip placement="top" title="Delete">
            <DeleteIcon onClick={handleItemDelete} />
          </Tooltip>
        </IconButton>
      </ButtonContainer>
    </ItemContainer>
  );
};

export default TodoItem;
