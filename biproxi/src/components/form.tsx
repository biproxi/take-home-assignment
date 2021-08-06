// import { connect } from 'react-redux';
// import { createPost } from '../actions/posts';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import axios from 'axios';

const Form = (props: any) => {

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
      console.log(formValues)
      const createPost = await axios.post('/create',{ formValues });
      const response = createPost;
      console.log(response)
    } catch(err) {
      console.error(err)
    }

  };

  return(
    <form onSubmit = {props.handleSubmit(onSubmit)}>
     <Field name = "title" label = "Title" component = {renderInput}/>
     <Field name = "status" label = "Status" component = {renderInput}/>
     {/* <Field name = "lastUpdatedAt"/>
     <Field name = "createdAt"/> */}
     <p>{Math.round((new Date()).getTime() /1000)}</p>
     <button type = "submit">Submit</button>
    </form>
  )
};


export default reduxForm({ form: 'create-form' })(Form);