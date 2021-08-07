import styled from "styled-components";

const StyledInputContainer = styled.form`
  height: 50px;
  width: 80%;
  border-radius: 12px;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  background: none;
  border: none;
  margin-left: 12px;
  flex: 1;
`;

const Button = styled.button`
  margin: 8px;
  background-color: rgb(214, 213, 213);
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 50px;
`;

export const EditTodo = () => {
  const handleSave = () => {
    console.log("saved todo");
  };
  return (
    <StyledInputContainer onSubmit={e => e.preventDefault()}>
      <StyledInput type='text' value={""} />
      <Button onClick={handleSave}>Save</Button>
    </StyledInputContainer>
  );
};
