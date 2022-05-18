import { GitRepo } from './types';
import { AnyAction } from 'redux';
import { LOAD_GIT_REPO, LOAD_GIT_REPO_ERROR } from './action';


export interface GitRepoState {
    list: GitRepo[];
    error?: Error
}

const initialState: GitRepoState = {
    list: []
};

export const gitRepos = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case LOAD_GIT_REPO:
            return {
                ...state,
                list: [action.payload, ...state.list]
            }
        case LOAD_GIT_REPO_ERROR:
            return {
                ...state,
                error: action.payload
            }
    }
    return state
}
