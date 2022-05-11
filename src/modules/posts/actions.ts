import { Dispatch } from 'redux';
import { getPosts } from './api';

export const FETCH_POSTS = 'posts/FETCH_POSTS';
// export const FETCH_POSTS_SUCCESS = 'posts/FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'posts/FETCH_POSTS_ERROR';

export const fetchPosts = () => async (dispatch: Dispatch) => {
    try {
        const posts = await getPosts();

        dispatch({
            type: FETCH_POSTS,
            payload: posts,
        })
    } catch (error) {
        dispatch({
            type: FETCH_POSTS_ERROR,
            payload: error,
        });
    }
};
