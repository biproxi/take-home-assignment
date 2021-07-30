import { Box, Text } from '@chakra-ui/react';

const Todoitem = ({ id, title }) => {
  const updateTodo = async () => {};

  const deleteTodo = async () => {};

  return (
    <Box>
      <Text>
        {id} {title}
      </Text>
    </Box>
  );
};

export default Todoitem;
