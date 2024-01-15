import { ADD_POST, DELETE_POST, LOAD_POSTS, UPDATE_POST } from "../actionTypes/actionTypes";

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