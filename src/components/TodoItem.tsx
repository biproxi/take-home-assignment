import { Box, Text, Button, Select } from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import React from 'react';

type TodoItemProps = {
  id: number;
  title: string;
  createdAt: number;
  lastUpdatedAt: number;
};
const Todoitem = ({ id, title, createdAt, lastUpdatedAt }: TodoItemProps) => {
  const updateTodo = async (update: string): Promise<void> => {
    try {
      const result = await axios.put('/api/update', {
        id: id,
        update: update
      });
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (): Promise<void> => {
    try {
      const result: AxiosResponse = await axios.delete(`/api/delete?id=${id}`);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatus = (event: React.ChangeEvent<any>) => {
    const newStatus = event.target.value;
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
      <Select onChange={updateStatus}>
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
