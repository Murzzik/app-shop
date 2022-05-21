import React from "react";
import {RepoSearchForm} from "../components/RepoSearchForm";
import {bindActionCreators, Dispatch} from "redux";
import {searchGithubRepositories} from "../modules/github/action";
import {connect} from "react-redux";
import {StoreState} from '../store';

interface GitRepoProps {
    onSearch: (name: string) => void
}

export const GitRepositoriesContainer: React.FC<GitRepoProps> = ({onSearch}) => {

    const onSearchRepositories = (name: string) => {
        onSearch(name)
    }
    return (
        <>
            <RepoSearchForm onSearch={onSearchRepositories}/>
        </>
    )
};

const mapStateToProps = (state: StoreState) => ({
    list: state.gitHubRepositories
})
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
    {onSearch: searchGithubRepositories}, dispatch);

export const GithubRepositories = connect(mapStateToProps, mapDispatchToProps)(GitRepositoriesContainer)
