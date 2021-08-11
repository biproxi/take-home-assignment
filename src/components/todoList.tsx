import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostState, deletePostState } from '../store/hooks';
import { useRouter } from 'next/router';
import styled from 'styled-components';
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
    props.getPostState()
  })

  const editPost = (id: number, title: string, status: string) => {
    router.push({
      pathname: '/edit',
      query: { id, title , status }
    })
  };

  const deletePost = (id: number) => {
    props.deletePostState(id)
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
            {props.todos.todos.map((post: any) => (
              <TableRow key = {post.id}>
                <TableCell align = "center">{post.title}</TableCell>
                <TableCell align = "center">{post.status}</TableCell>
                <TableCell align = "center">{post.created_at}</TableCell>
                <TableCell align = "center">{post.last_updated_at}</TableCell>
                <TableCell align = "center"
                  style = {{
                    display: "flex",
                    justifyContent: "space-evenly"
                  }}
                >
                  <OptionButton onClick = {() => editPost(post.id, post.title, post.status)}>Edit Post</OptionButton>
                  <OptionButton onClick = {() => deletePost(post.id)}>Delete</OptionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </TableContainer>
  )
};

const mapStatetoProps = (state: any) => {
  return { todos: state.todos };
};

export default connect(mapStatetoProps, { getPostState, deletePostState })(TodoList);