import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Todo, TodoStatusEnum } from "types/todo";
import { EditTodo } from "./EditTodo";
import { selectTodosInput, toggleEdit } from "store/slices/TodoInput";
import { Button, StyledContainer } from "../styles/sharedStyledComponents";
import { MdCreate, MdClear } from "react-icons/md";
import { destroyTodo, updateTodo } from "store/slices/TodosSlice";

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
  height: 1.25rem;
  width: 1.25rem;
`;

export const TodoItem = ({ title, status, lastUpdatedAt, createdAt }: Todo) => {
  const dispatch = useDispatch();

  const todosInput = useSelector(selectTodosInput);

  const handleToggle = () => {
    let newStatus = TodoStatusEnum.Active;
    if (status === TodoStatusEnum.Active) {
      newStatus = TodoStatusEnum.Inactive;
    } else {
      newStatus = TodoStatusEnum.Active;
    }
    dispatch(
      updateTodo({
        createdAt,
        status: newStatus,
        lastUpdatedAt: Math.floor(Date.now() / 1000),
        title,
      })
    );
  };

  return (
    <>
      {todosInput.edit === createdAt ? (
        <EditTodo
          createdAt={createdAt}
          status={status}
          title={title}
          lastUpdatedAt={lastUpdatedAt}
        />
      ) : (
        <StyledContainer>
          <StyledCheckBox
            type='checkbox'
            onChange={handleToggle}
            checked={status === TodoStatusEnum.Inactive}
          />
          <StyledParagraph inActive={status === TodoStatusEnum.Inactive}>
            {title}
          </StyledParagraph>
          <Button onClick={() => dispatch(toggleEdit(createdAt))}>
            <MdCreate />
          </Button>
          <Button onClick={() => dispatch(destroyTodo(createdAt))}>
            <MdClear />
          </Button>
        </StyledContainer>
      )}
    </>
  );
};
