import styled, { StyledInterface } from "styled-components";
import { useDispatch } from "react-redux";
import { Todo, TodoStatusEnum } from "types/todo";
import { remove, toggle } from "../store/slices/TodosSlice";
import { EditTodo } from "./EditTodo";

interface CustomStyledParagraph {
  inActive: boolean;
}

const StyledParagraph = styled.p<CustomStyledParagraph>`
  flex: 1;
  text-decoration: ${({ inActive }) => (inActive ? "line-through" : "unset")};
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  background-color: white;
  margin: 6px 4px;
  height: 40px;
  border-radius: 12px;
`;

export const TodoItem = ({ title, status, lastUpdatedAt, createdAt }: Todo) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(toggle(createdAt));
  };
  const handleDelete = () => {
    dispatch(remove(createdAt));
  };
  return (
    <StyledContainer>
      {/* {toggle editTodo here when edit button is clicked} */}
      <input
        type='checkbox'
        onChange={handleCheck}
        checked={status === TodoStatusEnum.Inactive}
      />
      <StyledParagraph inActive={status === TodoStatusEnum.Inactive}>
        {title}
      </StyledParagraph>
      <button onClick={handleDelete}>Delete</button>
      <button>Edit</button>
    </StyledContainer>
  );
};
