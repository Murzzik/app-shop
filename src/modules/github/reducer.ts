import {
    SEARCH_GITHUB_REPOSITORIES_REQUEST,
    SEARCH_GITHUB_REPOSITORIES_SUCCESS,
    SEARCH_GITHUB_REPOSITORIES_ERROR,
} from './action';
import { AnyAction } from 'redux';
import { GithubRepositoryItem } from './types';
import { INITIAL_PAGE_SIZE } from '../../components/RepoSearchForm';

export interface GithubRepositoriesState {
    list: GithubRepositoryItem[],
    error?: Error,
    isLoading: boolean,
    totalRepositoriesCount: number,
    pagination: {
        page: number;
        size: number;
    };
}

const initialState: GithubRepositoriesState = {
    list: [],
    totalRepositoriesCount: 0,
    isLoading: false,
    pagination: {
        page: 1,
        size: INITIAL_PAGE_SIZE,
    },
};

export const githubRepositories = (state = initialState, action: AnyAction) => {
    switch(action.type) {
        case SEARCH_GITHUB_REPOSITORIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case SEARCH_GITHUB_REPOSITORIES_SUCCESS:
            return {
                ...state,
                totalRepositoriesCount: action.payload.response.total_count,
                list: action.payload.response.items,
                pagination: { page: action.payload.pagination.page, size: action.payload.pagination.size },
                isLoading: false,
            };
        case SEARCH_GITHUB_REPOSITORIES_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
    }
    return state;
};
