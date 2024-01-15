import { updatePost } from "../actions/postAction";


const updatePostData = (post,id) => {
  return async (dispatch) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await res.json();

    dispatch(updatePost(data));
  };
};

export default updatePostData;