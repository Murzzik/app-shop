import { AnyAction } from 'redux';
import { LOAD_POSTS, LOAD_POSTS_ERROR } from './actions';
import { Post } from './types';

export interface PostsState {
    list: Post[];
    error?: Error;
}

const initialState: PostsState = {
    list: [],
};

export const posts = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                list: action.payload,
            };
        case LOAD_POSTS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
    }

    return state;
};
