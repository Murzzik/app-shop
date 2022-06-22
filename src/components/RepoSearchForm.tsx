import React, { ChangeEvent, useState } from 'react';
import { Form, Pagination, Spin } from 'antd';
import { searchGithubRepositories } from '../modules/github/action';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store';
import { RepositoriesItems } from './GithubRepositoryItem/GithubRepositoryItem';
import { GithubRepositoryItem } from '../modules/github/types';
import './RepoSearchForm.css';
import Search from 'antd/lib/input/Search';

export const INITIAL_PAGE_SIZE = 10;
const MAX_PAGES_DISPLAYED = 1000; // the GitHub Search API provides up to 1,000 results for each search

export const GithubSearchRepositories: React.FC = () => {
    const dispatch: any = useDispatch();
    const {
        list,
        isLoading,
        totalRepositoriesCount,
        pagination,
    } = useSelector((state: StoreState) => state.githubRepositories);
    const [repositoryQuery, setRepositoryQuery] = useState('');

    const onChangeRepositoryTitle = (e: ChangeEvent<HTMLInputElement>) => setRepositoryQuery(e.target.value);

    const totalPagesAmount = Math.min(MAX_PAGES_DISPLAYED, totalRepositoriesCount);

    const searchRepositories = (query: string, size: number, page: number) => {
        dispatch(searchGithubRepositories(query, size, page));
    };

    const onSearch = (query: string) => {
        searchRepositories(query, pagination.size, 1);
    };
    const onPaginationChange = (page: number, size: number) => {
        searchRepositories(repositoryQuery, size, page);
    };

    // TODO: Menu with Link or Navigate
    return (
        <div className="mainContainer">
            <Form>
                <h2 className="formHeaderTitle">Search Repositories</h2>
                <Search
                    className="searchInput"
                    placeholder="Enter repository name"
                    enterButton="Search"
                    size="large"
                    value={repositoryQuery}
                    loading={isLoading}
                    onSearch={onSearch}
                    onChange={onChangeRepositoryTitle}
                />
            </Form>
            <Spin className="loadingSpin" spinning={isLoading} size="large" tip="Loading...">
                <div className="itemsContainer">
                    {list.map((item: GithubRepositoryItem) => <RepositoriesItems key={item.id} item={item} />)}
                </div>
            </Spin>
            {
                !!list.length &&
                <Pagination
                    className="paginationBar"
                    showSizeChanger
                    pageSizeOptions={['5', '10', '25']}
                    total={totalPagesAmount || MAX_PAGES_DISPLAYED}
                    onChange={onPaginationChange}
                />
            }
        </div>
    );
};
