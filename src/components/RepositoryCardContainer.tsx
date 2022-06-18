import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store';
import { githubRepositoryDetail } from '../modules/githubDetailRepository/action';
import './RepositoryDetailCard.css';
import { RepositoryCard } from './RepositoryCard';

export const RepositoryCardContainer: React.FC = () => {
    const dispatch: any = useDispatch();
    const {item} = useSelector((state: StoreState) => state.githubRepository);
    const {repoParam} = useParams();
    const [owner, repositoryName] = repoParam?.split('+') || [];

    useEffect(() => {
        if(owner && repositoryName && !item) {
            dispatch(githubRepositoryDetail(owner, repositoryName));
        }
    }, [item, owner, repositoryName]);

    return (
            <>
                {item && <RepositoryCard item={item} />}
            </>
    );
};

