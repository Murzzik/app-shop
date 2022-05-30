import React, { ChangeEvent, useState } from 'react';
import { Form } from 'antd';
import { searchGithubRepositories } from '../modules/github/action';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store';
import { RepositoriesItems } from './GithubRepositoryItem/GithubRepositoryItem';
import { GithubRepositoryItem } from '../modules/github/types';
import './RepoSearchForm.css';
import Search from 'antd/lib/input/Search';

export const GithubSearchRepositories: React.FC = () => {
    const dispatch: any = useDispatch();
    const [searchName, setSearchName] = useState('');
    const { list, isLoading } = useSelector((state: StoreState) => state.gitHubRepositories);

    const onChangeRepositoryTitle = (e: ChangeEvent<HTMLInputElement>) => setSearchName(e.target.value);

    const onClick = () => {
        dispatch(searchGithubRepositories(searchName));
        setSearchName('');
    };

    return (
            <div className="mainContainer">
                <Form>
                    <h2 className="formHeaderTitle">Search Repositories</h2>
                    <Search
                            className="searchInput"
                            placeholder="Enter repository name"
                            enterButton="Search"
                            size="large"
                            value={searchName}
                            loading={isLoading}
                            onSearch={onClick}
                            onChange={onChangeRepositoryTitle}
                    />
                </Form>
                <div className="itemsContainer">
                    {list.map((item: GithubRepositoryItem) => <RepositoriesItems key={item.id} item={item} />)}
                </div>
                {/*<Pagination defaultCurrent={1} total={50} />*/}
            </div>
    );
};
