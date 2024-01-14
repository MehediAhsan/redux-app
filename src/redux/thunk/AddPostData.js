import { addPost } from "../actions/postAction";

const addPostData = (post) => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await res.json();

    dispatch(addPost(data));
  };
};

export default addPostData;