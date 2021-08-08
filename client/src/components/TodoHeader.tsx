import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: #0a0b39;
  padding: 1rem;
  h1 {
    color: white;
  }
`;

export const TodoHeader = () => {
  return (
    <StyledHeader>
      <h1>BiProxi Redux Todos</h1>
    </StyledHeader>
  );
};
