import { Box, Text, Button } from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';

const Todoitem = ({ id, title }) => {
  //   const updateTodo = async () => {
  //     try {
  //       const result = await axios.

  //     }
  //     catch (err) {
  //       console.log(err);
  //     }
  //   };

  const deleteTodo = async (id) => {
    try {
      const result: AxiosResponse = await axios.delete(`/api/delete?id=${id}`);
      console.log(result.data.todo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box shadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px">
      <Text>
        {id} {title}
      </Text>
      <Button
        size="sm"
        onClick={() => deleteTodo(id)}
        colorScheme="blue"
        border="2px"
      >
        Delete
      </Button>
    </Box>
  );
};

export default Todoitem;
