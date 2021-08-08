import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Todo, TodoStatusEnum } from "types/todo";
import { remove, toggle } from "../store/slices/TodosSlice";
import { EditTodo } from "./EditTodo";
import { selectTodosInput, toggleEdit } from "store/slices/TodoInput";
import { Button, StyledContainer } from "../styles/sharedStyledComponents";
import { MdCreate, MdClear } from "react-icons/md";

interface CustomStyledParagraph {
  inActive: boolean;
}

const StyledParagraph = styled.p<CustomStyledParagraph>`
  flex: 1;
  margin-left: 1rem;
  text-decoration: ${({ inActive }) => (inActive ? "line-through" : "unset")};
`;

const StyledCheckBox = styled.input`
  margin-left: 1rem;
`;

export const TodoItem = ({ title, status, lastUpdatedAt, createdAt }: Todo) => {
  const dispatch = useDispatch();

  const todosInput = useSelector(selectTodosInput);

  const handleCheck = () => {
    dispatch(toggle(createdAt));
  };

  return (
    <>
      {todosInput.edit === createdAt ? (
        <EditTodo createdAt={createdAt} title={title} />
      ) : (
        <StyledContainer>
          <StyledCheckBox
            type='checkbox'
            onChange={handleCheck}
            checked={status === TodoStatusEnum.Inactive}
          />
          <StyledParagraph inActive={status === TodoStatusEnum.Inactive}>
            {title}
          </StyledParagraph>
          <Button onClick={() => dispatch(toggleEdit(createdAt))}>
            <MdCreate />
          </Button>
          <Button onClick={() => dispatch(remove(createdAt))}>
            <MdClear />
          </Button>
        </StyledContainer>
      )}
    </>
  );
};
