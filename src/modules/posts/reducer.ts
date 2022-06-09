import { AnyAction } from 'redux';
import { CREATE_POST, CREATE_POST_ERROR, LOAD_POSTS, LOAD_POSTS_ERROR } from './services';
import { Post } from './types';

export interface PostsState {
    list: Post[];
    error?: Error;
}

const initialState: PostsState = {
    list: [],
};

export const posts = (state = initialState, action: AnyAction) => {
    switch(action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                list: action.payload,
            };

        case CREATE_POST:
            return {
                ...state,
                list: [action.payload, ...state.list],
            };

        case CREATE_POST_ERROR:
        case LOAD_POSTS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
    }

    return state;
};
