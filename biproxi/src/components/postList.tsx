import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../store/actions';

const PostList = (props: any) => {
  useEffect(() => {
    props.getPosts();
  },[])

  const renderList = () => {
    return props.posts.map((post: any) => (
      <article key = {post.id}>
        <div className = "content">
          <div className = "description">
            <h2>{post.title}</h2>
            <p>{post.status}</p>
            <p>{post.created_at}</p>
            <p>{post.last_updated_at}</p>
          </div>
        </div>
      </article>
    ))
  };

  return(
    <div>
      {renderList()}
    </div>
  )
};

const mapStatetoProps = (state) => {
  console.log(state)
  return { posts: state.posts };
};

export default connect(mapStatetoProps, { getPosts })(PostList);