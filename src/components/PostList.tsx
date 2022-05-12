import { Card, Col, Row } from 'antd';
import React from 'react';
import { Post } from '../modules/posts/types';

interface PostListProps {
    list: Post[];
}

export const PostList: React.FC<PostListProps> = ({ list }) => (
    <Row>
        {list.map(post => (
            <Col key={post.id} span={6}>
                <Card title={post.title} size="small">
                    <span>{post.body}</span>
                </Card>
            </Col>
        ))}
    </Row>
);
