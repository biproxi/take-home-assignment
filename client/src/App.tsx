import { useSelector } from "react-redux";
import styled from "styled-components";
import { TodoInput } from "./components/TodoInput";
import { TodoItem } from "./components/TodoItem";
import { selectTodos } from "./store/slices/TodosSlice";

const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(168, 173, 182);
  display: grid;
  place-items: center;
`;

const StyledContainer = styled.div`
  height: 700px;
  width: 500px;
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

function App() {
  const todos = useSelector(selectTodos);
  return (
    <StyledDiv>
      <StyledContainer>
        <StyledTodoContainer>
          {todos.map(todo => (
            <TodoItem
              key={todo.createdAt}
              title={todo.title}
              status={todo.status}
              lastUpdatedAt={todo.lastUpdatedAt}
              createdAt={todo.createdAt}
            />
          ))}
        </StyledTodoContainer>
        <TodoInput />
      </StyledContainer>
    </StyledDiv>
  );
}

export default App;
