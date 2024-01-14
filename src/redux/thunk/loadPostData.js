import { loadPost } from "./../actions/postAction";

const loadPostData = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    if (data.length) {
      dispatch(loadPost(data));
    }
  };
};

export default loadPostData;
