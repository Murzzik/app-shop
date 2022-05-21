import {Dispatch} from 'redux';
import {searchRepositories} from './api';

export const SEARCH_GITHUB_REPOSITORIES = 'SEARCH_GITHUB_REPOSITORIES';
export const SEARCH_GITHUB_REPOSITORIES_ERROR = 'SEARCH_GITHUB_REPOSITORIES_ERROR';

export const searchGithubRepositories = (name: string) => async (dispatch: Dispatch) => {
    try {
        const list = await searchRepositories(name);
        dispatch({
            type: SEARCH_GITHUB_REPOSITORIES,
            payload: list,
        });
    } catch (error) {
        dispatch({
            type: SEARCH_GITHUB_REPOSITORIES_ERROR,
            payload: error,
        })
    }
}
