import styled from "styled-components";
import { TodoHeader } from "./TodoHeader";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 1.5rem;
  background-color: #fff;
  display: grid;
  place-items: center;
`;

const StyledContainer = styled.div`
  width: 37.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0a0b39;
  border-radius: 12px;
  padding: 3rem 3rem;
`;

const StyledTodoContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TodoApp = () => {
  return (
    <>
      <TodoHeader />
      <StyledDiv>
        <StyledContainer>
          <TodoInput />
          <StyledTodoContainer>
            <TodoList />
          </StyledTodoContainer>
        </StyledContainer>
      </StyledDiv>
    </>
  );
};
