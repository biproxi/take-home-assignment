import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostState, deletePostState } from '../store/hooks';
import axios from 'axios';
import { useRouter } from 'next/router';
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

const PostList = (props: any) => {

  const router = useRouter();
  const classes = useStyles();

  useEffect(() => {
    props.getPostState()
  },[])

  const editPost = (id: number, title: string, status: string) => {
    router.push({
      pathname: '/edit',
      query: { id, title , status }
    })
  };

  const deletePost = (id: number) => {
    props.deletePostState(id)
    // try{
    //   const deleteResponse = await axios.delete(`/api/deletePost/?id=${id}`)
    //   console.log(deleteResponse.data)
    // } catch(err) {
    //   console.error(err)
    // }
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
                <TableCell align = "center">
                  <button onClick = {() => editPost(post.id, post.title, post.status)}>Edit Post</button>
                  <button onClick = {() => deletePost(post.id)}>Delete</button>
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

export default connect(mapStatetoProps, { getPostState, deletePostState })(PostList);