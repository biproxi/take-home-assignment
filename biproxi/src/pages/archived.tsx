import { useEffect } from 'react';
import Link from 'next/link';
import { getArchivedPosts } from '../store/actions';
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
    props.getArchivedPosts();
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
            {props.posts.map((post: any) => (
              <TableRow key = {post.id}>
                <TableCell align = "center">{post.title}</TableCell>
                <TableCell align = "center">{post.status}</TableCell>
                <TableCell align = "center">{post.created_at}</TableCell>
                <TableCell align = "center">{post.last_updated_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

const mapStatetoProps = (state: any) => {
  return { posts: state.posts };
}

export default connect(mapStatetoProps, { getArchivedPosts })(ArchivedPosts);