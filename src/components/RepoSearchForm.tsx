import React, {MouseEvent, useState} from "react";
import {Button, Col, Form, Input, Row} from "antd";
import {StoreState} from "../store";
import {bindActionCreators, Dispatch} from "redux";
import {searchGithubRepositories} from "../modules/github/action";
import {connect} from "react-redux";


interface GitHubRepositorySearchForm {
    onSearch?: (name: string) => void
    list?: any
}

export const GithubSearchRepositoriesForm: React.FC<GitHubRepositorySearchForm> = (props) => {
    const [searchName, setSearchName] = useState('')

    const onChangeRepoTitle = (e: any) => setSearchName(e.target.value)

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        props.onSearch && props.onSearch(searchName)
        console.log(props.list)
        setSearchName('')
    };
    const getList = () => {
        console.log(props.list)
        return <p></p>
    }
    return (
        <Row>
            <Col span={8}>
                <Form>
                    <h2>Search Repo</h2>
                    <Input placeholder = "Title"
                            name={'Repo Name'}
                            value={searchName}
                            onChange={onChangeRepoTitle}>
                    </Input>
                    <Button onClick={onClick}>Search Repo</Button>
                </Form>
            </Col>
            {props.list ? getList() : null}
        </Row>
    )
}

const mapStateToProps = (state: StoreState) => ({
    list: state.gitHubRepositories
})
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
    {onSearch: searchGithubRepositories}, dispatch);
export const GithubSearchRepositories = connect(mapStateToProps, mapDispatchToProps)(GithubSearchRepositoriesForm)
