import { useDispatch, useSelector } from "react-redux";
import { toggleEdit } from "store/slices/TodoInput";
import {
  addInput,
  clearEditInput,
  selectTodosInputEdit,
} from "store/slices/TodosInputEdit";
import { updateTodo } from "store/slices/TodosSlice";
import { Button, StyledContainer } from "../styles/sharedStyledComponents";
import styled from "styled-components";
import { useEffect } from "react";
import { Todo } from "types/todo";

const StyledInput = styled.input`
  background: none;
  border: none;
  margin-left: 0.75rem;
  flex: 1;
`;

export const EditTodo = ({ createdAt, title, status, lastUpdatedAt }: Todo) => {
  const dispatch = useDispatch();
  const todosInputEdit = useSelector(selectTodosInputEdit);

  useEffect(() => {
    if (!todosInputEdit.value) {
      dispatch(addInput({ value: title }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, title]);

  const handleSave = () => {
    dispatch(
      updateTodo({
        createdAt,
        status,
        lastUpdatedAt: Math.floor(Date.now() / 1000),
        title: todosInputEdit.value,
      })
    );
    dispatch(clearEditInput());
    dispatch(toggleEdit(0));
  };

  return (
    <StyledContainer>
      <StyledInput
        type='text'
        value={todosInputEdit.value}
        onChange={e => dispatch(addInput({ value: e.target.value }))}
      />
      <Button onClick={handleSave}>Save</Button>
    </StyledContainer>
  );
};
