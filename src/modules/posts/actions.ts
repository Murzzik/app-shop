import { Dispatch } from 'redux';
import { getPosts } from './api';

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
    } catch (error) {
        dispatch({
            type: LOAD_POSTS_ERROR,
            payload: error,
        });
    }
};

// dispatch({ type: 'something' }); // usual dispatch without redux-thunk middleware
// dispatch((dispatch: Dispatch) => { ... }); // thanks to redux-thunk middleware (see src/store.ts)
// dispatch(loadPosts())
