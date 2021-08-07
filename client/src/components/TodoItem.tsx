import styled, { StyledInterface } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Todo, TodoStatusEnum } from "types/todo";
import { remove, toggle } from "../store/slices/TodosSlice";
import { EditTodo } from "./EditTodo";
import { selectTodosInput, toggleEdit } from "store/slices/TodoInput";
import React from "react";

interface CustomStyledParagraph {
  inActive: boolean;
}

const StyledParagraph = styled.p<CustomStyledParagraph>`
  flex: 1;
  text-decoration: ${({ inActive }) => (inActive ? "line-through" : "unset")};
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  background-color: white;
  margin: 6px 4px;
  height: 40px;
  border-radius: 12px;
`;

export const TodoItem = ({ title, status, lastUpdatedAt, createdAt }: Todo) => {
  const dispatch = useDispatch();

  const todosInput = useSelector(selectTodosInput);

  const handleCheck = () => {
    dispatch(toggle(createdAt));
  };

  return (
    <StyledContainer>
      {/* {toggle editTodo here when edit button is clicked} */}
      {todosInput.edit === createdAt ? (
        <EditTodo createdAt={createdAt} title={title} />
      ) : (
        <>
          <input
            type='checkbox'
            onChange={handleCheck}
            checked={status === TodoStatusEnum.Inactive}
          />
          <StyledParagraph inActive={status === TodoStatusEnum.Inactive}>
            {title}
          </StyledParagraph>
          <button onClick={() => dispatch(remove(createdAt))}>Delete</button>
          <button onClick={() => dispatch(toggleEdit(createdAt))}>Edit</button>
        </>
      )}
    </StyledContainer>
  );
};
