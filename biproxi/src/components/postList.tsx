import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../store/actions';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import EditFormModal from './editFormModal';
import { useRouter } from 'next/router';

const PostList = (props: any) => {

  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    props.getPosts();
  },[])

  const editPost = async (id: number, title: string, status: string) => {
    router.push({
      pathname: '/edit',
      query: { id, title , status }
    })
    // try{
    //   console.log("edit test", id)
    //   const editResponse = await axios.put(`/api/deletePost/?id=${id}`)
    //   console.log(editResponse.data);
    // } catch(err){
    //   console.error(err)
    // }
  };

  const deletePost = async (id: number) => {
    try{
      const deleteResponse = await axios.delete(`/api/deletePost/?id=${id}`)
      console.log(deleteResponse.data)
    } catch(err) {
      console.error(err)
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <div>
      {props.posts.map((post: any) => (
        <article key = {post.id}>
          <div className = "content">
            <div className = "description">
              <h2>{post.title}</h2>
              <p>{post.status}</p>
              <p>{post.created_at}</p>
              <p>{post.last_updated_at}</p>
              <button onClick = {() => editPost(post.id, post.title, post.status)}>Edit Post</button>
              <button onClick = {() => deletePost(post.id)}>Delete Post</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
};

const mapStatetoProps = (state: any) => {
  console.log(state)
  return { posts: state.posts };
};

export default connect(mapStatetoProps, { getPosts })(PostList);