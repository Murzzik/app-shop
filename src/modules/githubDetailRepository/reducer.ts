import {GithubRepositoryItem} from "../github/types";
import {AnyAction} from "redux";
import {
    GITHUB_DETAIL_REPOSITORY_ERROR,
    GITHUB_DETAIL_REPOSITORY_REQUEST,
    GITHUB_DETAIL_REPOSITORY_SUCCESS
} from "./action";

export interface GithubDetailRepositoryState {
    item: GithubRepositoryItem[] | null,
    error?: Error,
}

const initialState: GithubDetailRepositoryState = {
    item: null
}

export const gitHubDetailRepositories = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case GITHUB_DETAIL_REPOSITORY_REQUEST:
            return {
                ...state
            };
        case GITHUB_DETAIL_REPOSITORY_SUCCESS:
            return {
                ...state,
                item: action.payload
            };
        case GITHUB_DETAIL_REPOSITORY_ERROR:
            return {
                ...state,
                error: action.payload,
            };
    }
    return state;
}