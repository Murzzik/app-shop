import React, {MouseEvent, useState} from "react";
import {Button, Col, Form, Input, Row} from "antd";
import {GithubRepository} from "../modules/github/types";


interface RepoSearchForm {
    onSearch: (name: string) => void
}

export const RepoSearchForm: React.FC<RepoSearchForm> = ({ onSearch }) => {
    const [repoTitle, setRepoTitle] = useState('')

    const onChangeRepoTitle = (e: any) => setRepoTitle(e.target.value)

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        const GithubRepositoriesList = repoTitle
      onSearch(GithubRepositoriesList)
    };
    return (
        <Row>
            <Col span={8}>
                <Form>
                    <h2>Search Repo</h2>
                    <Input placeholder = "Title"
                            name={'Repo Name'}
                            value={repoTitle}
                            onChange={onChangeRepoTitle}>
                    </Input>
                    <Button onClick={onClick}>Search Repo</Button>
                </Form>
            </Col>
        </Row>
    )
}
