import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../store/actions';
import axios from 'axios';

const PostList = (props: any) => {
  useEffect(() => {
    props.getPosts();
  },[])

  const editPost = (id: number) => {
    console.log("edit test", id)
  };

  const deletePost = async (id: number) => {
    try{
      console.log("remove test", id)
      const deleteResponse = await axios.delete(`/api/deletePost/?id=${id}`)
      console.log(deleteResponse.data)
    } catch(err) {
      console.error(err)
    }
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
              <button onClick = {() => editPost(post.id)}>Edit Post</button>
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