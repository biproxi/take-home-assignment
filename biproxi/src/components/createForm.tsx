import { useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import axios from 'axios';
import { addNewPostState } from '../store/hooks';

const CreateForm = (props: any) => {

  const dispatch = useDispatch();
  const inputRef = useRef({});


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let title = inputRef.current.value;
    props.addNewPostState(title)
    // try{
    //   const addForm = await axios.post('/api/addPost', {title})
    //   const response = addForm.data;
    //   console.log(response)
    // } catch(err) {
    //   console.error(err)
    // }

  };

  return(
    <form onSubmit = {handleSubmit}>
      <input
        type = "text"
        ref = {inputRef}
        placeholder =  "Enter your title here!"
      />
      <button type = "submit">Submit Form</button>
    </form>
  )
};

const mapStatetoProps = (state: any) => {
  return { todos: state.todos }
};

export default connect(null, { addNewPostState })(CreateForm);