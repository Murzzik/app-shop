import { GithubRepositoryItem } from '../github/types';
import { AnyAction } from 'redux';
import {
    GITHUB_DETAIL_REPOSITORY_ERROR,
    GITHUB_DETAIL_REPOSITORY_REQUEST,
    GITHUB_DETAIL_REPOSITORY_SUCCESS,
} from './action';

export interface GithubDetailRepositoryState {
    item: GithubRepositoryItem | null,
    isLoading: boolean,
    error?: Error,
}

const initialState: GithubDetailRepositoryState = {
    item: null,
    isLoading: false,
};

export const githubRepository = (state = initialState, action: AnyAction) => {
    switch(action.type) {
        case GITHUB_DETAIL_REPOSITORY_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GITHUB_DETAIL_REPOSITORY_SUCCESS:
            return {
                ...state,
                item: action.payload,
                isLoading: false,
            };
        case GITHUB_DETAIL_REPOSITORY_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
    }
    return state;
};