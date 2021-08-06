import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../store/actions';

const PostList = (props) => {
  useEffect(() => {
    props.getPosts();
  },[])

  const renderList = () => {
    // return props.posts.map(post => (
    //   <article key = {post.id}>
    //     <div className = "content">
    //       <div className = "description">
    //         <h2>{post.title}</h2>
    //         <p>{post.body}</p>
    //       </div>
    //       <UserHeader userId = {post.userId} />
    //     </div>
    //   </article>
    // ))
  };

  return(
    <div>
      {/* {renderList()} */}
    </div>
  )
};

const mapStatetoProps = (state) => {
  console.log(state)
  return { post: state.post };
};

export default connect(mapStatetoProps, { getPosts })(PostList);