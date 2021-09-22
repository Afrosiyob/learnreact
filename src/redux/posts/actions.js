import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from "../actions";

export const getPosts = () => ({
    type: GET_POSTS,
    payload: null
})

export const getPostsSuccess = (response) => ({
    type: GET_POSTS_SUCCESS,
    payload: response
})

export const getPostsError = (error) => ({
    type: GET_POSTS_ERROR,
    payload: error
})