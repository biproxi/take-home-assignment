import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Todo } from "types/todo";
import { toggle } from "../store/slices/TodosSlice";

const StyledParagraph = styled.p`
  flex: 1;
  .status {
    text-decoration: line-through;
  }
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
  const handleCheck = () => {
    dispatch(toggle(createdAt));
  };
  return (
    <StyledContainer>
      <input type='checkbox' onChange={handleCheck} />
      <StyledParagraph className={status ? "status" : ""}>
        {title}
      </StyledParagraph>
    </StyledContainer>
  );
};
