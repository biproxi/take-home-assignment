import { useDispatch, useSelector } from "react-redux";
import { toggleEdit } from "store/slices/TodoInput";
import {
  addInput,
  clearEditInput,
  selectTodosInputEdit,
} from "store/slices/TodosInputEdit";
import { edit } from "store/slices/TodosSlice";
import { Button, StyledContainer } from "../styles/sharedStyledComponents";
import styled from "styled-components";

const StyledInput = styled.input`
  background: none;
  border: none;
  margin-left: 0.75rem;
  flex: 1;
`;

interface EditTodoProp {
  createdAt: number;
  title: string;
}

export const EditTodo = ({ createdAt, title }: EditTodoProp) => {
  const dispatch = useDispatch();
  const todosInputEdit = useSelector(selectTodosInputEdit);

  const handleSave = () => {
    console.log("the value ===", todosInputEdit.value);
    dispatch(
      edit({
        createdAt,
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
        value={todosInputEdit.value || title}
        onChange={e => dispatch(addInput({ value: e.target.value }))}
      />
      <Button onClick={handleSave}>Save</Button>
    </StyledContainer>
  );
};
