import React from 'react';
import { Card } from 'antd';
import { GithubRepositoryItem } from '../../modules/github/types';
import { useNavigate } from 'react-router-dom';

export interface RepositoryItemProps {
    item: GithubRepositoryItem;
}

export const RepositoriesItems: React.FC<RepositoryItemProps> = (props: RepositoryItemProps) => {
    const { Meta } = Card;
    const { item } = props;
    const description = item.description ? item.description.substring(0, 125) : '';

    const navigate = useNavigate();
    const handleOnClick = () => navigate(`/github/${item.owner.login}+${item.name}`)

    return (
            <div className="repositoryCardWrapper">
                <Card
                        onClick={handleOnClick}
                        className="repositoryCard"
                        hoverable
                        cover={<img alt="example" src={item.owner.avatar_url} />}
                >
                    <Meta title={item.full_name} description={description} />
                </Card>
            </div>
    );
};

