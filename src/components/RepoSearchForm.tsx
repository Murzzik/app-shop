import React, { MouseEvent, useState } from 'react';
import { Button, Col, Form, Input, Row } from 'antd';
import { searchGithubRepositories } from '../modules/github/action';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store';
import { RepositoriesItem } from './GithubRepositoryItem/GithubRepositoryItem';
import { GithubRepository } from '../modules/github/types';

export const GithubSearchRepositories: React.FC = () => {
    const dispatch: any = useDispatch();
    const [searchName, setSearchName] = useState('');
    const { list } = useSelector((state: StoreState) => state.gitHubRepositories);

    const onChangeRepoTitle = (e: any) => setSearchName(e.target.value);

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(searchGithubRepositories(searchName));
        setSearchName('');
    };

    return (
        <Row>
            <Col span={8}>
                <Form>
                    <h2>Search Repo</h2>
                    <Input
                        placeholder="Title"
                        name={'Repo Name'}
                        value={searchName}
                        onChange={onChangeRepoTitle}
                    />
                    <Button onClick={onClick}>Search Repo</Button>
                </Form>
            </Col>
            {list.map((item: GithubRepository) => <RepositoriesItem key={item.id} item={item} />)}
        </Row>
    );
};
