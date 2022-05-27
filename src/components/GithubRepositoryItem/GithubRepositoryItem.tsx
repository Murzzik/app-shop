import React from 'react';
import './GithubRepositoryItem.module.css';
import { Card } from 'antd';
import { GithubRepositoryItem } from '../../modules/github/types';

export interface RepositoryItemProps {
    item: GithubRepositoryItem;
}

export const RepositoriesItem: React.FC<RepositoryItemProps> = (props: RepositoryItemProps) => {
    const { Meta } = Card;
    const { item } = props;
    const description = item.description ? item.description.substring(0, 125) : '';
    return (
        <div className="repositoryCardWrapper">
            <Card
                className="repositoryCard"
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.owner.avatar_url} />}
            >
                <Meta title={item.full_name} description={description} />
            </Card>
        </div>
    );
};

// <div className="itemContainer">
//     <p>{item.full_name}</p>
//     <p>{item.description}</p>
// </div>