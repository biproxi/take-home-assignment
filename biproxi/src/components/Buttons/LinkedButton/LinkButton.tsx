import styled from "styled-components";
import {JSXElementConstructor, ReactNode} from "react";

const StyledButton = styled.a`
  color: cadetblue;
  background-color: aliceblue;
  font-size: 1.4rem;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  margin: 0 1.2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: gainsboro;
    color: black;
  }
`;

const LinkButton: JSXElementConstructor<any> = (props: { children: string; to: string; }) => {
    return (
        <StyledButton href={props.to}>
            {props.children}
        </StyledButton>
    );
};

export default LinkButton;
