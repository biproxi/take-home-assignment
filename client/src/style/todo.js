import styled from "styled-components";

export const StyledTodoItem = styled.li`
  & {
    padding: 1rem;
    list-style: none;
    border-radius: .25rem;
    background-color: gainsboro;
  }
  
  .todo-details {
    display: flex;
    align-content: space-around;
    justify-content: space-between;
  }

  .todo-details .status {
    display: flex;
    gap: .5rem;
  }

  .todo-details p {
    margin: .5rem 0;
  }
`
