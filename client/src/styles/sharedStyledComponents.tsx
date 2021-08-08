import styled from "styled-components";

export const Button = styled.button`
  margin: 0.5rem;
  cursor: pointer;
  background-color: #ededed;
  border: none;
  border-radius: 0.625rem;
  height: 1.875rem;
  width: 3.125rem;
  :active {
    background-color: #e5e5e5;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  background-color: white;
  margin: 6px 4px;
  height: 40px;
  border-radius: 12px;
`;
