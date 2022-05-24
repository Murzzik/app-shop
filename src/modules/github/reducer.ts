import { SEARCH_GITHUB_REPOSITORIES, SEARCH_GITHUB_REPOSITORIES_ERROR } from './action';
import { AnyAction } from 'redux';
import { GithubRepository } from './types';

export interface GithubRepositoryState {
    list: GithubRepository[],
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
