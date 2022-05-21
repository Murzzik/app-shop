import React, {MouseEvent, useState} from "react";
import {Button, Col, Form, Input, Row} from "antd";


interface GitHubRepositorySearchForm {
    onSearch: (name: string) => void
}

export const RepoSearchForm: React.FC<GitHubRepositorySearchForm> = ({ onSearch }) => {
    const [searchName, setSearchName] = useState('')

    const onChangeRepoTitle = (e: any) => setSearchName(e.target.value)

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
      onSearch(searchName)
        setSearchName('')
    };
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
        </Row>
    )
}
