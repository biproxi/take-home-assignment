import { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  Container,
  SimpleGrid,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';
import { actions, selectTodos, Todo } from '../store/reducers/todo-reducer';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../components/TodoItem';
import Form from '../components/Form';

export default function Home() {
  const bg = useColorModeValue('white', 'grey');
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const getTodos = async (): Promise<void> => {
    try {
      const result: AxiosResponse = await axios.get('/api/get');
      const todos: Todo[] = result.data.data;
      dispatch(actions.setTodos(todos));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, [getTodos, dispatch, todos]);

  return (
    <Container
      h="100%"
      p="1rem"
      borderRadius="8px"
      justifyContent="center"
      alignItems="center"
      justifyItems="center"
      maxW="80%"
      bg={bg}
    >
      <Form />
      <Heading>Your List</Heading>
      <SimpleGrid w="100%" gap={1} gridAutoRows="1fr">
        {todos.length > 0 &&
          todos.map((todo: Todo) => <TodoItem key={todo.id} {...todo} />)}
      </SimpleGrid>
    </Container>
  );
}
