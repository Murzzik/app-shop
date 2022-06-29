import React from 'react';
import { Descriptions, Image } from 'antd';
import { GithubRepositoryItem } from '../modules/github/types';

interface IRepositoryCardForRenderProps {
    item: GithubRepositoryItem;
}

export const RepositoryCardForRender = (props: IRepositoryCardForRenderProps) => {
    const { item } = props;
    return (
        <div className="detailCardWrapper">
            <Image alt="example" src={item.owner.avatar_url} />
            <Descriptions className="descriptionWrapper"
                          title="Repository info"
                          layout="vertical"
                          bordered
            >
                <Descriptions.Item label="User name">
                    <a href={item.owner.html_url}>{item.owner.login}</a>
                </Descriptions.Item>
                <Descriptions.Item label="Repository name">
                    <a href={item.svn_url} target="_blank" rel="noreferrer noopener">
                        {item.name}
                    </a>
                </Descriptions.Item>
                <Descriptions.Item label="Subscribers count">{item.subscribers_count}</Descriptions.Item>
                <Descriptions.Item label="Repository description">{item.description}</Descriptions.Item>
            </Descriptions>
        </div>
    );
};