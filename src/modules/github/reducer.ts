import { SEARCH_GITHUB_REPOSITORIES, SEARCH_GITHUB_REPOSITORIES_ERROR } from './action';
import { AnyAction } from 'redux';
import { GithubRepositoryItem } from './types';

export interface GithubRepositoryState {
    list: GithubRepositoryItem[],
    error?: Error,
}

const initialState: GithubRepositoryState = {
    list: [],
};

export const gitHubRepositories = (state = initialState, action: AnyAction) => {
    switch(action.type) {
        case SEARCH_GITHUB_REPOSITORIES:
            return {
                ...state,
                list: action.payload.items,
            };
        case SEARCH_GITHUB_REPOSITORIES_ERROR:
            return {
                ...state,
                error: action.payload,
            };
    }
    return state;
};
