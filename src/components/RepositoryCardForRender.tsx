import React from 'react';
import { Descriptions, Image } from 'antd';
import { GithubRepositoryItem } from '../modules/github/types';

interface RepositoryCardForRenderProps {
    item: GithubRepositoryItem;
}

export const RepositoryCardForRender = (props: RepositoryCardForRenderProps) => {
    return (
        <div className="detailCardWrapper">
            <Image alt="example" src={props.item.owner.avatar_url} />
            <Descriptions className="descriptionWrapper"
                          title="Repository info"
                          layout="vertical"
                          bordered
            >
                <Descriptions.Item label="User name">
                    <a href={props.item.owner.html_url}>{props.item.owner.login}</a>
                </Descriptions.Item>
                <Descriptions.Item label="Repository name">
                    <a href={props.item.svn_url} target="_blank" rel="noreferrer noopener">
                        {props.item.name}
                    </a>
                </Descriptions.Item>
                <Descriptions.Item label="Subscribers count">{props.item.subscribers_count}</Descriptions.Item>
                <Descriptions.Item label="Repository description">{props.item.description}</Descriptions.Item>
            </Descriptions>
        </div>
    );
};
