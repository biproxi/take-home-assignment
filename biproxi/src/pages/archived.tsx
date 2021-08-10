import { useEffect } from 'react';
import Link from 'next/link';
import { getArchivedPosts } from '../store/actions';
import { connect } from 'react-redux';

const ArchivedPosts = (props: any) => {
  useEffect(() => {
    props.getArchivedPosts();
  },[])

  return(
    <div>
      <Link href = '/'>
        <button>Return to home page</button>
      </Link>
      {props.posts.map((post: any) => (
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
      ))}
    </div>
  )
};

const mapStatetoProps = (state: any) => {
  console.log(state)
  return { posts: state.posts };
}

export default connect(mapStatetoProps, { getArchivedPosts })(ArchivedPosts);