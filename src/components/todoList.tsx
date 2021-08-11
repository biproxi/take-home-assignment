import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodoState, deleteTodoState } from '../store/hooks';
import { useRouter } from 'next/router';
import { OptionButton } from '../styled-components/elements';
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


const TodoList = (props: any) => {

  const router = useRouter();
  const classes = useStyles();

  useEffect(() => {
    props.getTodoState()
  }, [])

  const editTodo = (id: number, title: string, status: string) => {
    router.push({
      pathname: '/edit',
      query: { id, title , status }
    })
  };

  const deleteTodo = (id: number) => {
    props.deleteTodoState(id)
  };

  return(
    <TableContainer component = {Paper}>
        <Table className = {classes.table} aria-label = "archived table">
          <TableHead>
            <TableRow>
              <TableCell align = "center">Title</TableCell>
              <TableCell align = "center">Status</TableCell>
              <TableCell align = "center">Created At</TableCell>
              <TableCell align = "center">Last Updated At</TableCell>
              <TableCell align = "center">Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.todos.todos.map((Todo: any) => (
              <TableRow key = {Todo.id}>
                <TableCell align = "center">{Todo.title}</TableCell>
                <TableCell align = "center">{Todo.status}</TableCell>
                <TableCell align = "center">{Todo.created_at}</TableCell>
                <TableCell align = "center">{Todo.last_updated_at}</TableCell>
                <TableCell align = "center"
                  style = {{
                    display: "flex",
                    justifyContent: "space-evenly"
                  }}
                >
                  <OptionButton onClick = {() => editTodo(Todo.id, Todo.title, Todo.status)}>Edit Todo</OptionButton>
                  <OptionButton onClick = {() => deleteTodo(Todo.id)}>Delete</OptionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </TableContainer>
  )
};

const mapStatetoProps = (state: any) => {
  console.log(state)
  return { todos: state.todos };
};

export default connect(mapStatetoProps, { getTodoState, deleteTodoState })(TodoList);