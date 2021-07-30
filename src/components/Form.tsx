import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
  Box
} from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectFormInput } from '../store/reducers/todo-reducer';

const Form = () => {
  const dispatch = useDispatch();
  const formInput = useSelector(selectFormInput);

  const submitTodo = async () => {
    try {
      const result: AxiosResponse = await axios.post('/api/post', {
        title: formInput
      });
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateForm = (event: React.ChangeEvent<any>): void => {
    const input = event.target.value;
    dispatch(actions.setFormInput(input));
  };

  return (
    <Box>
      <Heading>Submit To-do</Heading>
      <FormControl id="title">
        <FormLabel>Add a new to-do to the list as needed</FormLabel>
        <Input value={formInput} onChange={updateForm} type="title" />
      </FormControl>
      <Button
        size="sm"
        colorScheme="blue"
        border="2px"
        onClick={() => submitTodo()}
      >
        Add To-do
      </Button>
    </Box>
  );
};

export default Form;
