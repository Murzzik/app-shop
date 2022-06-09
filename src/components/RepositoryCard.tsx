import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store';
import { githubRepositoryDetail } from '../modules/githubDetailRepository/action';
import './RepositoryDetailCard.css';
import { Descriptions } from 'antd';

const RepositoryCard: React.FC = () => {
    const dispatch: any = useDispatch();
    const { item }: any = useSelector((state: StoreState) => state.gitHubDetailRepositories);
    const { repoParam } = useParams();
    const [owner, repositoryName] = repoParam?.split('+') || [];
    useEffect(() => {
        if(owner && repositoryName && !item) {
            dispatch(githubRepositoryDetail(owner, repositoryName));
        }
    }, [item]);
    return (
        <>
            {item ?
                <div className="detailCardWrapper">
                    <a href={item.owner.html_url} target="_blank" rel="noreferrer">
                        <img alt="example" src={item.owner.avatar_url} />
                    </a>
                    <Descriptions className="descriptionWrapper" title="User Info" layout="vertical" column={4}
                                  bordered>
                        <Descriptions.Item label="User name">{item.owner.login}</Descriptions.Item>
                        <Descriptions.Item label="Repository name">{item.name}</Descriptions.Item>
                        <Descriptions.Item label="Repository link">
                            <a href={item.svn_url} target="_blank" rel="noreferrer">{item.name}</a>
                        </Descriptions.Item>
                        <Descriptions.Item label="Subscribers count">{item.subscribers_count}</Descriptions.Item>
                        <Descriptions.Item label="Repository description">{item.description}</Descriptions.Item>
                    </Descriptions>
                </div>
                : null}
        </>
    );
};
export default RepositoryCard;

