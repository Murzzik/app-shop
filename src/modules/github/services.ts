import {CreateRepoRequest, gitRepoPost} from "./api";
import {Dispatch} from "redux";
import {GitRepo} from "./types";

export const SEARCH_GIT_REPO = 'SEARCH_GIT_REPO'
export const SEARCH_GIT_REPO_ERROR = 'SEARCH_GIT_REPO_ERROR'

export const searchGitRepo = (repoRequest: CreateRepoRequest) => async (dispatch: Dispatch) => {
    try {
        const response = await gitRepoPost(repoRequest)

        const gitRepo: GitRepo = {
            ...repoRequest,
            ...response
        }
        dispatch({
            type: SEARCH_GIT_REPO,
            payload: gitRepo,
        });
    } catch (error) {
        dispatch({
            type: SEARCH_GIT_REPO_ERROR,
            payload: error,
        })
    }
}
