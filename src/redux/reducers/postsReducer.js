import {
  ADD_POST,
  DELETE_POST,
  LOADING,
  LOAD_POSTS,
  SAVE_POST,
  UNSAVE_POST,
  UPDATE_POST,
} from "../actionTypes/actionTypes";

const initialState = {
  posts: [],
  loading: false,
  savePosts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        loading: false
      };

    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
        loading: false
      };

    case SAVE_POST:
      return {
        ...state,
        savePosts: [action.payload, ...state.savePosts],
      };

    case UNSAVE_POST:
      return {
        ...state,
        savePosts: state.savePosts.filter((post) => post.id !== action.payload),
      };

    default:
      return state;
  }
};

export default postsReducer;
