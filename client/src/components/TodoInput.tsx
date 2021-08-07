import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../store/slices/TodosSlice";
import { clearInput, selectTodosInput } from "store/slices/TodoInput";
import { TodoStatusEnum } from "types/todo";
import { addInput } from "store/slices/TodoInput";

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
  //const [input, setInput] = useState("");
  const todosInput = useSelector(selectTodosInput);
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(
      create({
        title: todosInput.value,
        status: TodoStatusEnum.Inactive,
        lastUpdatedAt: Math.floor(Date.now() / 1000),
        createdAt: Math.floor(Date.now() / 1000),
      })
    );
    dispatch(clearInput());
  };
  return (
    <StyledInputContainer onSubmit={e => e.preventDefault()}>
      <StyledInput
        type='text'
        value={todosInput.value}
        onChange={e => dispatch(addInput({ value: e.target.value }))}
      />
      <Button onClick={addTodo}>Add</Button>
    </StyledInputContainer>
  );
};
