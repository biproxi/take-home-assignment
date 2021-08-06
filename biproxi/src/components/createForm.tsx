// import { connect } from 'react-redux';
// import { createPost } from '../actions/posts';
import { useEffect } from 'react';
import { reduxForm, Field } from 'redux-form';
import axios from 'axios';

const CreateForm = (props: any) => {

  const renderInput = (formProps: any) => {
    return (
      <div className = "field">
        <label>{formProps.label} </label>
        <input {...formProps.input} />
      </div>
    )
  };

  const onSubmit = async (formValues: any) => {
    try{
      const addForm = await axios.post('/api/addPost', {formValues})
      const response = addForm;
      console.log(response)
    } catch(err) {
      console.error(err)
    }

  };

  return(
    <form onSubmit = {props.handleSubmit(onSubmit)}>
     <Field name = "title" label = "Title" component = {renderInput}/>
     <button type = "submit">Submit</button>
    </form>
  )
};


export default reduxForm({ form: 'create-form' })(CreateForm);