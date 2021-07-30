import { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  Container,
  SimpleGrid,
  Box,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import {
  actions,
  selectTodos,
  selectFormInput,
  Todo,
  FormInput
} from '../store/reducers/todo-reducer';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../components/TodoItem';

export default function Home() {
  const bg = useColorModeValue('white', 'grey');
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const getTodos = async (): Promise<void> => {
    try {
      const result: AxiosResponse = await axios.get('/api/get');
      const todos: Todo[] = result.data;
      dispatch(actions.setTodos(todos));
    } catch (err) {
      console.log(err);
    }
  };

  const createTodo = async () => {};

  useEffect(() => {
    getTodos();
  }, []);

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
      <Heading>Your List</Heading>
      {console.log(todos)}
      <SimpleGrid w="100%" gap={1} minChildWidth="1em" gridAutoRows="1fr">
        {todos.length &&
          todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
      </SimpleGrid>
    </Container>
  );
}
