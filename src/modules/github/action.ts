import { Dispatch } from 'redux';
import { getRepo } from './api';

export const LOAD_GIT_REPO = 'LOAD_GIT_REPO';
export const LOAD_GIT_REPO_ERROR = 'LOAD_GIT_REPO_ERROR';

export const loadRepo = (s: string) => async (dispatch: Dispatch) => {
    try {
        const list = await getRepo(s);

        dispatch({
            type: LOAD_GIT_REPO,
            payload: list,
        });
    } catch (error) {
        dispatch({
            type: LOAD_GIT_REPO_ERROR,
            payload: error,
        })
    }
}
