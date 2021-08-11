import { connect } from 'react-redux';
import { addNewTodoState, updateFormTitle } from '../store/hooks';
import styled from 'styled-components';
import { SubmitButton } from '../styled-components/elements';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 10vh;
  border: 1px solid;
  margin-bottom: 2vh;
`;

const CreateForm = (props: any) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.addNewTodoState(props.todos.title)
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.updateFormTitle(event.target.value)
  };

  return(
    <Form onSubmit = {handleSubmit}>
      <input
        type = "text"
        placeholder =  "Enter your title here!"
        onChange = {handleTitleChange}
        required
      />
      <SubmitButton type = "submit">Submit New Todo</SubmitButton>
    </Form>
  )
};

const mapStateToProps = (state: any) => {
  return { todos: state.todos }
};

export default connect(mapStateToProps, { updateFormTitle,addNewTodoState })(CreateForm);