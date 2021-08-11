import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getArchivedState } from '../store/hooks';
import { connect } from 'react-redux';
import { BackButton, OptionButton } from '../styled-components/elements';
import { makeStyles,
         Table,
         TableBody,
         TableCell,
         TableContainer,
         TableHead,
         TableRow,
         Paper } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ArchivedTodos = (props: any) => {

  const router = useRouter();
  const classes = useStyles();

  useEffect(() => {
    props.getArchivedState();
  }, [])

  const editTodo = (id: number, title: string, status: string) => {
    router.push({
      pathname: '/edit',
      query: { id, title , status }
    })
  };

  return(
    <div>
      <Link href = '/' passHref>
        <BackButton>Go Back</BackButton>
      </Link>
      <TableContainer component = {Paper}>
        <Table className = {classes.table} aria-label = "archived table">
          <TableHead>
            <TableRow>
              <TableCell align = "center">Title</TableCell>
              <TableCell align = "center">Status</TableCell>
              <TableCell align = "center">Created At</TableCell>
              <TableCell align = "center">Last Updated At</TableCell>
              <TableCell align = "center">Edit Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.todos.map((todo: any) => (
              <TableRow key = {todo.id}>
                <TableCell align = "center">{todo.title}</TableCell>
                <TableCell align = "center">{todo.status}</TableCell>
                <TableCell align = "center">{todo.created_at}</TableCell>
                <TableCell align = "center">{todo.last_updated_at}</TableCell>
                <TableCell align = "center">
                  <OptionButton onClick = {() => editTodo(todo.id, todo.title, todo.status)}>Edit Todo</OptionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

const mapStateToProps = (state: any) => {
  return { todos: state.todos.archivedTodos };
}

export default connect(mapStateToProps, { getArchivedState })(ArchivedTodos);