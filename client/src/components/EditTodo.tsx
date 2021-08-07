import { useDispatch, useSelector } from "react-redux";
import { toggleEdit } from "store/slices/TodoInput";
import {
  addInput,
  clearEditInput,
  selectTodosInputEdit,
} from "store/slices/TodosInputEdit";
import { edit } from "store/slices/TodosSlice";
import styled from "styled-components";

const StyledInputContainer = styled.div`
  height: 50px;
  width: 80%;
  border-radius: 12px;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  background: none;
  //border: none;
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

interface EditTodoProp {
  createdAt: number;
  title: string;
}

export const EditTodo = ({ createdAt, title }: EditTodoProp) => {
  const dispatch = useDispatch();
  const todosInputEdit = useSelector(selectTodosInputEdit);
  //console.log("======", todosInputEdit.value);

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
    console.log("saved todo");
  };

  return (
    <StyledInputContainer>
      <StyledInput
        type='text'
        value={todosInputEdit.value || title}
        onChange={e => dispatch(addInput({ value: e.target.value }))}
      />
      <Button onClick={handleSave}>Save</Button>
    </StyledInputContainer>
  );
};
