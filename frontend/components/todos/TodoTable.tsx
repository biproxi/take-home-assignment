import { useQuery } from '@apollo/client';
import { GET_ALL_TODOS } from 'graphql-actions/queries/todos';
import React from 'react';
import {
  GetAllTodos,
  GetAllTodos_returnAllTodos,
} from 'graphql-actions/queries/types/GetAllTodos';
import { TodoItem } from './TodoItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export const TodoTable: React.FC = () => {
  const { data, loading, error } = useQuery<GetAllTodos>(GET_ALL_TODOS);

  if (loading) return null;

  if (error) {
    console.error(
      'An error occurred during the execution of the GET_ALL_TODOS operation: ',
      error
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Created Date (Unix Timestamp)</TableCell>
            <TableCell align="right">
              Last Updated Date (Unix Timestamp)
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.returnAllTodos.map((todo: GetAllTodos_returnAllTodos) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              status={todo.status}
              createdDate={todo.createdAt}
              lastUpdatedDate={todo.lastUpdatedAt}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
