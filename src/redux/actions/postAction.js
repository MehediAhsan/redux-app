import { ADD_POST, LOAD_POSTS } from "../actionTypes/actionTypes"

export const loadPost = (data) => {
    return {
        type: LOAD_POSTS,
        payload: data,
    }
}

export const addPost = (post) => ({
    type: ADD_POST,
    payload: post,
  });