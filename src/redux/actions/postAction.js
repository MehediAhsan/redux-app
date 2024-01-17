import {
  ADD_POST,
  DELETE_POST,
  LOADING,
  LOAD_POSTS,
  SAVE_POST,
  UNSAVE_POST,
  UPDATE_POST,
} from "../actionTypes/actionTypes";

export const loadPost = (data) => {
  return {
    type: LOAD_POSTS,
    payload: data,
  };
};

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId,
});

export const updatePost = (post) => ({
  type: UPDATE_POST,
  payload: post,
});

export const savePost = (selectedPost) => ({
  type: SAVE_POST,
  payload: selectedPost,
});

export const unsavePost = (id) => ({
  type: UNSAVE_POST,
  payload: id,
});

export const loading = () => ({
  type: LOADING,
  payload: true,
});
