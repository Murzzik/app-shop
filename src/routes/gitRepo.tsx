import {CreateRepoRequest} from "../modules/github/api";
import React, {useEffect} from "react";
import {RepoSearchForm} from "../components/RepoSearchForm";
import {bindActionCreators, Dispatch} from "redux";
import {loadRepo} from "../modules/github/action";
import {connect} from "react-redux";
import {searchGitRepo} from "../modules/github/services";
import {StoreState} from "../store";

interface GitRepoProps {
    onLoadRepos: (s: string) => void
    onSearch: (gitRepo: CreateRepoRequest) => void
}

export const GitRepoContainer: React.FC<GitRepoProps> = ({onSearch, onLoadRepos}) => {

    const onSearchRepo = (gitRepo: CreateRepoRequest) => {
        onLoadRepos(gitRepo.items[0].full_name)
        onSearch(gitRepo)
    }
    return (
        <>
            <RepoSearchForm onSearch={onSearchRepo}/>
        </>
    )
};

const mapStateToProps = (state: StoreState) => ({
    list: state.gitRepos.list
})
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
    {onSearch: searchGitRepo,
    onLoadRepos: loadRepo
}, dispatch);

export const GitRepo = connect(mapStateToProps, mapDispatchToProps)(GitRepoContainer)
