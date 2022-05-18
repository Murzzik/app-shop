import {CreateRepoRequest} from "../modules/github/api";
import React, {useState , MouseEvent} from "react";
import {Button, Col, Form, Input, Row} from "antd";


interface RepoSearchForm {
    onSearch: (gitRepo: CreateRepoRequest) => void
}

export const RepoSearchForm: React.FC<RepoSearchForm> = ({ onSearch }) => {
    const [repoTitle, setRepoTitle] = useState('')

    const onChangeRepoTitle = (e: any) => setRepoTitle(e.target.value)

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        const gitRepo: CreateRepoRequest = {
            total_count: 5,
            incomplete_results: true,
            items: [{full_name: repoTitle, id: 1}]
        }
      onSearch(gitRepo)
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
