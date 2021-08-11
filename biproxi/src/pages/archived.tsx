import { useEffect } from 'react';
import Link from 'next/link';
import { getArchivedState } from '../store/hooks';
import { connect } from 'react-redux';
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

const ArchivedPosts = (props: any) => {

  const classes = useStyles();

  useEffect(() => {
    props.getArchivedState();
  },[])

  return(
    <div>
      <Link href = '/' passHref>
        <button>Return to home page</button>
      </Link>
      <TableContainer component = {Paper}>
        <Table className = {classes.table} aria-label = "archived table">
          <TableHead>
            <TableRow>
              <TableCell align = "center">Title</TableCell>
              <TableCell align = "center">Status</TableCell>
              <TableCell align = "center">Created At</TableCell>
              <TableCell align = "center">Last Updated At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.todos.map((todo: any) => (
              <TableRow key = {todo.id}>
                <TableCell align = "center">{todo.title}</TableCell>
                <TableCell align = "center">{todo.status}</TableCell>
                <TableCell align = "center">{todo.created_at}</TableCell>
                <TableCell align = "center">{todo.last_updated_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

const mapStatetoProps = (state: any) => {
  return { todos: state.todos.archivedTodos };
}

export default connect(mapStatetoProps, { getArchivedState })(ArchivedPosts);