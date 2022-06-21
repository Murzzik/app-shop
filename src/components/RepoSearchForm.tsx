import React, { ChangeEvent, useState } from 'react';
import { Form, Pagination, Spin, Skeleton } from 'antd';
import { searchGithubRepositories } from '../modules/github/action';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store';
import { RepositoriesItems } from './GithubRepositoryItem/GithubRepositoryItem';
import { GithubRepositoryItem } from '../modules/github/types';
import './RepoSearchForm.css';
import Search from 'antd/lib/input/Search';

export const INITIAL_PAGE_SIZE = 10;
const MAX_PAGES_AMOUNT = 1000;

export const GithubSearchRepositories: React.FC = () => {
    const dispatch: any = useDispatch();
    const {list, isLoading, totalRepositoriesCount, pagination} = useSelector((state: StoreState) => state.githubRepositories);
    const [searchName, setSearchName] = useState('');

    const onChangeRepositoryTitle = (e: ChangeEvent<HTMLInputElement>) => setSearchName(e.target.value);
    const totalPagesAmount = totalRepositoriesCount <= MAX_PAGES_AMOUNT && totalRepositoriesCount;

    const getData = (searchName: string, pagination: any) => {
        dispatch(searchGithubRepositories(searchName, pagination));
    }

    // const onSearch = () => {
    //     dispatch(searchGithubRepositories(searchName, size));
    // };
    // const onChangeCurrentPage = (page: number) => {
    //     dispatch(searchGithubRepositories(searchName, size, page));
    // };
    //
    // const onChangePageSize = (page: number, size: number) => {
    //     setSize(size);
    //     dispatch(searchGithubRepositories(searchName, size, page));
    // };

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
                            onSearch={(searchName) => getData(searchName, pagination)}
                            onChange={onChangeRepositoryTitle}
                    />
                </Form>
                <Spin className="loadingSpin" spinning={isLoading} size="large" tip="Loading...">
                    <div className="itemsContainer">
                        {list && list.map((item: GithubRepositoryItem) => <RepositoriesItems key={item.id} item={item} />)}
                    </div>
                </Spin>
                {
                        list &&
                        <Pagination
                                className="paginationBar"
                                showSizeChanger
                                onShowSizeChange={(page, size) => getData(searchName, {page, size})}
                                pageSizeOptions={['5', '10', '25']}
                                total={totalPagesAmount || MAX_PAGES_AMOUNT}
                                onChange={(page) => getData(searchName, {page, size: pagination.size})}
                        />
                }
            </div>
    );
};
