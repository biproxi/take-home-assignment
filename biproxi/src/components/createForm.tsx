
import { useRef } from 'react';
import axios from 'axios';

const CreateForm = () => {
  const inputRef = useRef();

  const handleSubmit = async () => {
    try{
      let title = inputRef.current.value;
      const addForm = await axios.post('/api/addPost', {title})
      const response = addForm.data;
      console.log(response)
    } catch(err) {
      console.error(err)
    }

  };

  return(
    <form onSubmit = {handleSubmit}>
      <input
        type = "text"
        ref = {inputRef}
      />
      <button type = "submit">Submit Form</button>
    </form>
  )
};

// export default connect(null, { getPosts })(CreateForm);
export default CreateForm;