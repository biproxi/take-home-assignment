export const createPost = (post: string) => {
  return {
    type: "ADD_POST",
    payload: post
  };
};