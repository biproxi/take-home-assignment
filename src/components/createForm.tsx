import { connect } from 'react-redux';
import { addNewPostState, updateFormTitle } from '../store/hooks';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: space-around;
  width: 15vw;
`;

const CreateForm = (props: any) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.addNewPostState(props.todos.title)
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
      <button type = "submit">Submit Form</button>
    </Form>
  )
};

const mapStateToProps = (state: any) => {
  return { todos: state.todos }
};

export default connect(mapStateToProps, { updateFormTitle,addNewPostState })(CreateForm);