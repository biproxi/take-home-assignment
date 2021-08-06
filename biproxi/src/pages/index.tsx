import { useEffect } from 'react';
import CreateForm from '../components/createForm';
import PostList from '../components/postList';
import axios from 'axios';

const Home = () => {

  // useEffect(() => {
  //   const renderPosts = async() => {
  //     try{
  //       const getPosts = await axios.get('/api/getPosts');
  //       const response = getPosts;
  //       console.log(response.data)
  //     } catch(err) {
  //       console.error(err)
  //     }
  //   }

  //   renderPosts();
  // }, [])

  return (
    <div>
      <CreateForm />
      <PostList />
    </div>
  )
}

export default Home;