import React, { useEffect } from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store';
import { githubRepositoryDetail } from '../modules/githubDetailRepository/action';
import './RepositoryDetailCard.css'

const RepositoryCard: React.FC = () => {
    const dispatch: any = useDispatch();
    const {item}: any = useSelector((state: StoreState) => state.gitHubDetailRepositories);
    const {repoParam} = useParams();
    const [owner, repositoryName] = repoParam?.split('+') || [];
    useEffect(() => {
        if(owner && repositoryName && !item) {
            dispatch(githubRepositoryDetail(owner, repositoryName));
        }
    }, [item]);
    return (
        <>
            {item ?
                <div className="repositoryCardWrapper">
                    <Card
                        className="repositoryCard"
                        hoverable
                        cover={<img alt="example"
                                    src={item.owner.avatar_url} />}
                    >
                        <Meta title={item.owner.login} description={item.description} />
                    </Card>
                </div>
            : null}
        </>
    );
};

export default RepositoryCard;

