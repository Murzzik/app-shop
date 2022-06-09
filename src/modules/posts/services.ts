import { Dispatch } from 'redux';
import { CreatePostRequest, getPosts, postPost } from './api';
import { Post } from './types';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POSTS_ERROR = 'LOAD_POSTS_ERROR';

// thunk
export const loadPosts = (/*page: number, limit: number*/) => async (dispatch: Dispatch) => {
    try {
        const list = await getPosts();

        dispatch({
            type: LOAD_POSTS,
            payload: list,
        });
    }
    catch(error) {
        dispatch({
            type: LOAD_POSTS_ERROR,
            payload: error,
        });
    }
};

// dispatch({ type: 'something' }); // usual dispatch without redux-thunk middleware
// dispatch((dispatch: Dispatch) => { ... }); // thanks to redux-thunk middleware (see src/store.ts)
// dispatch(loadPosts())

export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';

export const createPost = (postRequest: CreatePostRequest) => async (dispatch: Dispatch) => {
    try {
        const response = await postPost(postRequest);

        const post: Post = {
            ...postRequest,
            ...response,
        };

        dispatch({
            type: CREATE_POST,
            payload: post,
        });
    } catch (error) {
        dispatch({
            type: CREATE_POST_ERROR,
            payload: error,
        });
    }
};
