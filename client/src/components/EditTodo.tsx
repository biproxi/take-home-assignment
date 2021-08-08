import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleEdit } from "store/slices/TodoInput";
import {
  addInput,
  clearEditInput,
  selectTodosInputEdit,
} from "store/slices/TodosInputEdit";
import { updateTodo } from "store/slices/TodosSlice";
import { Todo } from "types/todo";
import {
  Button,
  StyledContainer,
  StyledInput,
} from "../styles/sharedStyledComponents";

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
