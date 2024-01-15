import { deletePost } from "../actions/postAction";

const deletePostData = (postId) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();

    console.log(data)
      dispatch(deletePost(postId));
    
  };
};

export default deletePostData;
