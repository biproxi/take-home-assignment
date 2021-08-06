import axios from 'axios';

export const createPost = (posts: string) => {
  return {
    type: "ADD_POST",
    payload: posts
  };
};

export const getPosts = () => async dispatch => {
  const response = await axios.get('/api/getPosts');

  dispatch({ type: 'GET_POSTS', payload: response.data})
};