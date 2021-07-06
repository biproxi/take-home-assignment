import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import { TodoCTAButton } from './TodoCTAButton';
import { TodoStatus } from 'graphql-actions/types/graphql-global-types';
import { DELETE_TODO } from 'graphql-actions/mutations/todos';
import { GET_ALL_TODOS } from 'graphql-actions/queries/todos';
import { useMutation } from '@apollo/client';
import {
  DeleteTodo,
  DeleteTodoVariables,
} from 'graphql-actions/mutations/types/DeleteTodo';

export type TodoActionTypes = 'create' | 'edit' | 'delete';

export const todoActions: Record<TodoActionTypes, string> = {
  create: 'Create',
  edit: 'Edit',
  delete: 'Delete',
};

export type TodoItemProps = {
  id: string;
  title: string;
  status: TodoStatus;
  createdDate: number;
  lastUpdatedDate: number;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  status,
  createdDate,
  lastUpdatedDate,
}) => {
  const [deleteTodo] = useMutation<DeleteTodo, DeleteTodoVariables>(
    DELETE_TODO,
    {
      refetchQueries: [
        {
          query: GET_ALL_TODOS,
        },
      ],
    }
  );

  const removeTodo = async () => {
    try {
      const { data } = await deleteTodo({
        variables: {
          id: id,
        },
      });
      return {
        success: data.deleteTodo,
      };
    } catch (error) {
      console.error(
        'An error occurred while executing the DELETE_TODO operation: ',
        error
      );
      return {
        success: false,
      };
    }
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell align="right">{status}</TableCell>
      <TableCell align="right">{createdDate}</TableCell>
      <TableCell align="right">{lastUpdatedDate}</TableCell>
      <TableCell>
        <TodoCTAButton
          actionToPerform="edit"
          todoStatus={status}
          todoTitle={title}
          todoId={id}
        />
      </TableCell>
      <TableCell>
        <Button variant="contained" color="secondary" onClick={removeTodo}>
          {todoActions['delete']}
        </Button>
      </TableCell>
    </TableRow>
  );
};
