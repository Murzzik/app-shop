import { Dispatch } from 'redux';
import { searchRepositories } from './api';

export const SEARCH_GITHUB_REPOSITORIES_REQUEST = 'SEARCH_GITHUB_REPOSITORIES_REQUEST';
export const SEARCH_GITHUB_REPOSITORIES_SUCCESS = 'SEARCH_GITHUB_REPOSITORIES_SUCCESS';
export const SEARCH_GITHUB_REPOSITORIES_ERROR = 'SEARCH_GITHUB_REPOSITORIES_ERROR';

export const searchGithubRepositories = (name: string) => async (dispatch: Dispatch) => {
    dispatch({
        type: SEARCH_GITHUB_REPOSITORIES_REQUEST,
    });

    try {
        const list = await searchRepositories(name);
        dispatch({
            type: SEARCH_GITHUB_REPOSITORIES_SUCCESS,
            payload: list,
        });
    } catch (error) {
        dispatch({
            type: SEARCH_GITHUB_REPOSITORIES_ERROR,
            payload: error,
        });
    }
};
