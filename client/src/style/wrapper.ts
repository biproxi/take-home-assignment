import styled from "styled-components";

export const StyledTodoWrapper = styled.div`
  & {
    width: 600px;
    margin: 1rem auto;
    padding: 1rem;
    background-color: azure;
    border-radius: 1rem;
  }

  & header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
    margin-bottom: 2rem;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 0;
    margin-bottom: 0;
  }
`
