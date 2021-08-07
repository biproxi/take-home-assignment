import styled from "styled-components";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(168, 173, 182);
  display: grid;
  place-items: center;
`;

const StyledContainer = styled.div`
  height: 900px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(232, 234, 237);
  border-radius: 12px;
  padding: 32px 0;
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
    <StyledDiv>
      <StyledContainer>
        <TodoInput />
        <StyledTodoContainer>
          <TodoList />
        </StyledTodoContainer>
      </StyledContainer>
    </StyledDiv>
  );
};