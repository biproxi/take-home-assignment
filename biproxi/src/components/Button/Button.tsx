import styled from "styled-components";

const Button = styled.a`
  background: ${(props: { theme: { colors: { primary: string; }; }; }) => props.theme.colors.primary};
  color: ${(props: { theme: { colors: { white: string; }; }; }) => props.theme.colors.white};
  font-size: 1.4rem;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  margin: 0 1.2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${(props: { theme: { colors: { secondary: string; }; }; }) => props.theme.colors.secondary};
  }
`;

export default Button;
