import React from 'react';
import './GithubRepositoryItem.module.css';

export const RepositoriesItem: React.FC<any> = (props: any) => {
    const { item } = props;
    return (
        <div className="itemContainer">
            <p>{item.full_name}</p>
            <p>{item.description}</p>
        </div>
    );
};