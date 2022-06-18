import React, { ChangeEvent, useState } from 'react';
import { Form, Pagination, Spin } from 'antd';
import { searchGithubRepositories } from '../modules/github/action';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store';
import { RepositoriesItems } from './GithubRepositoryItem/GithubRepositoryItem';
import { GithubRepositoryItem } from '../modules/github/types';
import './RepoSearchForm.css';
import Search from 'antd/lib/input/Search';

const INITIAL_PAGE_SIZE = 10;
const MAX_PAGES_AMOUNT = 1000;

export const GithubSearchRepositories: React.FC = () => {
    const dispatch: any = useDispatch();
    const [searchName, setSearchName] = useState('');
    const {list, isLoading, totalRepositoriesCount} = useSelector((state: StoreState) => state.gitHubRepositories);
    const onChangeRepositoryTitle = (e: ChangeEvent<HTMLInputElement>) => setSearchName(e.target.value);
    const [pageSize, setPageSize] = useState<number>(INITIAL_PAGE_SIZE);

    const totalPagesFound =  (totalRepositoriesCount <= MAX_PAGES_AMOUNT && totalRepositoriesCount);

    const onSearch = () => {
        dispatch(searchGithubRepositories(searchName, pageSize));
    };
    const onChangeCurrentPage = (currentPage: number) => {
        dispatch(searchGithubRepositories(searchName, pageSize, currentPage));
    };
    const onShowPageSizeChange = (pageSize: number, currentPage: number) => {
        setPageSize(pageSize);
        dispatch(searchGithubRepositories(searchName, pageSize, currentPage));
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
                            value={searchName}
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
                        list.length &&
                        <Pagination
                                className="paginationBar"
                                showSizeChanger
                                onShowSizeChange={onChangeCurrentPage}
                                pageSizeOptions={['5', '10', '25']}
                                total={totalPagesFound || MAX_PAGES_AMOUNT}
                                onChange={onShowPageSizeChange}
                        />
                }
            </div>
    );
};
