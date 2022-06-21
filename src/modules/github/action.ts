import { Dispatch } from 'redux';
import { searchRepositories } from './api';

export const SEARCH_GITHUB_REPOSITORIES_REQUEST = 'SEARCH_GITHUB_REPOSITORIES_REQUEST';
export const SEARCH_GITHUB_REPOSITORIES_SUCCESS = 'SEARCH_GITHUB_REPOSITORIES_SUCCESS';
export const SEARCH_GITHUB_REPOSITORIES_ERROR = 'SEARCH_GITHUB_REPOSITORIES_ERROR';

export const searchGithubRepositories = (name: string, size: number, page = 1) => async (dispatch: Dispatch) => {
    dispatch({
        type: SEARCH_GITHUB_REPOSITORIES_REQUEST,
    });

    try {
        const list = await searchRepositories(name, size, page);
        dispatch({
            type: SEARCH_GITHUB_REPOSITORIES_SUCCESS,
            payload: list,
            pagination: size, page
        });
    }
    catch(error) {
        dispatch({
            type: SEARCH_GITHUB_REPOSITORIES_ERROR,
            payload: error,
        });
    }
};
