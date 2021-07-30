import { Box, Text, Button, Select } from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectStatus, actions } from '../store/reducers/todo-reducer';

const Todoitem = ({ id, title, createdAt, lastUpdatedAt, status }) => {
  const dispatch = useDispatch();
  const dropDownStatus = useSelector(selectStatus);

  const updateTodo = async (update): Promise<void> => {
    try {
      console.log(update);
      const result = await axios.put('/api/update', {
        id: id,
        update: update
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (): Promise<void> => {
    try {
      const result: AxiosResponse = await axios.delete(`/api/delete?id=${id}`);
      console.log(result.data.todo);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatus = (event: React.ChangeEvent<any>) => {
    const newStatus = event.target.value;
    console.log(newStatus);
    // dispatch(actions.setStatus(newStatus));
    updateTodo(newStatus);
  };

  return (
    <Box
      p={4}
      mt={1}
      shadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
    >
      <Text>{`${id}: ${title}`}</Text>
      <Text>{`Created On: ${createdAt}`}</Text>
      <Text>{`Last Updated: ${lastUpdatedAt}`}</Text>
      <Select onChange={updateStatus} placeholder={status}>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Archived">Archived</option>
      </Select>
      <Button
        size="sm"
        onClick={() => deleteTodo()}
        colorScheme="blue"
        border="2px"
      >
        Delete
      </Button>
    </Box>
  );
};

export default Todoitem;
