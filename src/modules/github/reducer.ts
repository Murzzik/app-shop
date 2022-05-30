import { SEARCH_GITHUB_REPOSITORIES_REQUEST, SEARCH_GITHUB_REPOSITORIES_SUCCESS,SEARCH_GITHUB_REPOSITORIES_ERROR } from './action';
import { AnyAction } from 'redux';
import { GithubRepositoryItem } from './types';

export interface GithubRepositoryState {
    list: GithubRepositoryItem[],
    error?: Error,
    isLoading: boolean
}

const initialState: GithubRepositoryState = {
    list: [],
    isLoading: false
};

export const gitHubRepositories = (state = initialState, action: AnyAction) => {
    switch(action.type) {
        case SEARCH_GITHUB_REPOSITORIES_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case SEARCH_GITHUB_REPOSITORIES_SUCCESS:
            return {
                ...state,
                list: action.payload.items,
                isLoading: false
            };
        case SEARCH_GITHUB_REPOSITORIES_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
    }
    return state;
};
