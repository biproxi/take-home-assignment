import { useDispatch, useSelector } from "react-redux";
import { addInput, clearInput, selectTodosInput } from "store/slices/TodoInput";
import styled from "styled-components";
import { TodoStatusEnum } from "types/todo";
import { insertTodo } from "../store/slices/TodosSlice";
import { Button, StyledInput } from "../styles/sharedStyledComponents";

const StyledInputContainer = styled.div`
  height: 3.125rem;
  width: 90%;
  border-radius: 0.75rem;
  background-color: white;
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

export const TodoInput = () => {
  const todosInput = useSelector(selectTodosInput);
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(
      insertTodo({
        title: todosInput.value,
        status: TodoStatusEnum.Active,
        lastUpdatedAt: Math.floor(Date.now() / 1000),
        createdAt: Math.floor(Date.now() / 1000),
      })
    );
    dispatch(clearInput());
  };
  return (
    <StyledInputContainer>
      <StyledInput
        type='text'
        value={todosInput.value}
        onChange={e => dispatch(addInput({ value: e.target.value, edit: 0 }))}
      />
      <Button onClick={addTodo}>Add</Button>
    </StyledInputContainer>
  );
};
