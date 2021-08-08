import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../store/slices/TodosSlice";
import { clearInput, selectTodosInput } from "store/slices/TodoInput";
import { TodoStatusEnum } from "types/todo";
import { addInput } from "store/slices/TodoInput";
import { Button } from "../styles/sharedStyledComponents";

const StyledInputContainer = styled.form`
  height: 3.125rem;
  width: 90%;
  border-radius: 0.75rem;
  background-color: white;
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

const StyledInput = styled.input`
  background: none;
  border: none;
  margin-left: 0.75rem;
  flex: 1;
`;

export const TodoInput = () => {
  const todosInput = useSelector(selectTodosInput);
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(
      create({
        title: todosInput.value,
        status: TodoStatusEnum.Active,
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
        onChange={e => dispatch(addInput({ value: e.target.value, edit: 0 }))}
      />
      <Button onClick={addTodo}>Add</Button>
    </StyledInputContainer>
  );
};
