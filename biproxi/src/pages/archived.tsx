import { useEffect } from 'react';
import Link from 'next/link';
import { getArchivedPosts } from '../store/actions';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(title: string, status: string, created_at: number, last_updated_at: number){
  return { title, status, created_at, last_updated_at };
}

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
      <TableContainer>
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
  console.log(state)
  return { posts: state.posts };
}

export default connect(mapStatetoProps, { getArchivedPosts })(ArchivedPosts);