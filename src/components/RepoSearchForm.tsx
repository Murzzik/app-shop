import React, { ChangeEvent, useState } from 'react';
import { Form, Pagination, Spin } from 'antd';
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
    const { list, isLoading, total_repositories_count } = useSelector((state: StoreState) => state.gitHubRepositories);
    const onChangeRepositoryTitle = (e: ChangeEvent<HTMLInputElement>) => setSearchName(e.target.value);
    const [pageSize, setPageSize] = useState<number>(10);

    const onClick = () => {
        dispatch(searchGithubRepositories(searchName, 1, pageSize));
    };
    const handlePagination = (currentPage: number) => {
        dispatch(searchGithubRepositories(searchName, currentPage, pageSize));
    };
    const handleShowSizeChange = (currentPage: number, pageSize: number) => {
        setPageSize(pageSize);
        dispatch(searchGithubRepositories(searchName, currentPage, pageSize));
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
            <Spin className="loadingSpin" spinning={isLoading} size="large" tip="Loading...">
                <div className="itemsContainer">
                    {list.map((item: GithubRepositoryItem) => <RepositoriesItems key={item.id} item={item} />)}
                </div>
            </Spin>
            {
                list.length ?
                    <Pagination
                        className="paginationBar"
                        showSizeChanger
                        onShowSizeChange={handleShowSizeChange}
                        pageSizeOptions={['5', '10', '25']}
                        total={(total_repositories_count <= 1000 && total_repositories_count) || 1000}
                        onChange={handlePagination}
                    />
                    : null
            }
        </div>
    );
};
