import { LOAD_POSTS } from "../actionTypes/actionTypes"

export const loadPost = (data) => {
    return {
        type: LOAD_POSTS,
        payload: data,
    }
}