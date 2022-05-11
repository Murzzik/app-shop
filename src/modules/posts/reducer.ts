import { Action } from 'redux';
import { FETCH_POSTS } from './actions';

interface ShopAction extends Action {
    payload?: unknown;
}

export interface Post {
    id: number;
}

export interface PostsState {
    loading: boolean;
    list: Post[];
}

const initialState: PostsState = {
    loading: true,
    list: [],
};

export const posts = (state = initialState, action: ShopAction) => {
    if (action.type === FETCH_POSTS) {
        return {
            loading: false,
            list: action.payload,
        };
    }

    return state;

    // switch (action.type) {
    //     case FETCH_POSTS:
    //         return {
    //             list: [],
    //             loading: true
    //         };
    //     case FETCH_POSTS_SUCCESS:
    //         return {
    //             loading: false,
    //             list: action.payload,
    //         };
    // }
    //
    // return state;
};
