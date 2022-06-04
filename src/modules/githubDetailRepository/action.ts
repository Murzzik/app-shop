import { Dispatch } from 'redux';
import {detailRepository} from "./api";

export const GITHUB_DETAIL_REPOSITORY_REQUEST = 'GITHUB_DETAIL_REPOSITORY_REQUEST';
export const GITHUB_DETAIL_REPOSITORY_SUCCESS = 'GITHUB_DETAIL_REPOSITORY_SUCCESS';
export const GITHUB_DETAIL_REPOSITORY_ERROR = 'GITHUB_DETAIL_REPOSITORY_ERROR';

export const githubRepositoryDetail = (owner: string, repositoryName: string) => async (dispatch: Dispatch) => {
    dispatch({
        type: GITHUB_DETAIL_REPOSITORY_REQUEST,
    });

    try {
        const item = await detailRepository(owner, repositoryName);
        dispatch({
            type: GITHUB_DETAIL_REPOSITORY_SUCCESS,
            payload: item,
        });
    } catch (error) {
        dispatch({
            type: GITHUB_DETAIL_REPOSITORY_ERROR,
            payload: error,
        })
    }
}