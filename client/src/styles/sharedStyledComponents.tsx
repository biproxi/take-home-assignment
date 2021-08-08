import styled from "styled-components";

export const Button = styled.button`
  margin: 0.5rem;
  cursor: pointer;
  background-color: #3f3fe1;
  color: white;
  border: none;
  border-radius: 0.625rem;
  height: 1.875rem;
  width: 3.125rem;
  :active {
    background-color: #2424cf;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  background-color: white;
  margin: 0.375rem 0.25rem;
  height: 2.5rem;
  border-radius: 0.75rem;
`;

export const StyledInput = styled.input`
  background: none;
  border: none;
  margin-left: 0.75rem;
  flex: 1;
  :focus {
    outline: none;
  }
`;
