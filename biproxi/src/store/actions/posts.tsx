export const createPost = (post: any) => {
  return {
    type: "ADD_POST",
    payload: post
  };
};