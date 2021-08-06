import axios from 'axios';

export const createPost = (post: string) => {
  return {
    type: "ADD_POST",
    payload: post
  };
};

export const getPosts = () => async dispatch => {
  const response = await axios.get('/api/getPosts');
  console.log(response);

  dispatch({ type: 'GET_POSTS', payload: response.data})
};