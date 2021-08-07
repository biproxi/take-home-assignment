import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { create } from "../store/slices/TodosSlice";
import { TodoStatusEnum } from "types/todo";

const StyledInputContainer = styled.form`
  height: 50px;
  width: 80%;
  border-radius: 12px;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  background: none;
  border: none;
  margin-left: 12px;
  flex: 1;
`;

const Button = styled.button`
  margin: 8px;
  background-color: rgb(214, 213, 213);
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 50px;
`;

export const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(
      create({
        title: input,
        status: TodoStatusEnum.Inactive,
        lastUpdatedAt: Math.floor(Date.now() / 1000),
        createdAt: Math.floor(Date.now() / 1000),
      })
    );
  };
  return (
    <StyledInputContainer onSubmit={e => e.preventDefault()}>
      <StyledInput
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <Button onClick={addTodo}>Add</Button>
    </StyledInputContainer>
  );
};
