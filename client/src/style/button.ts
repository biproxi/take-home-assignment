import styled from "styled-components";

export const StyledButton = styled.button`
  & {
    border: none;
    background-color: gold;
    padding: .5rem;
    border-radius: .25rem;
  }

  &:hover {
    background-color: goldenrod;
  }
  
  a:link {
    text-decoration: none;
  }
`
