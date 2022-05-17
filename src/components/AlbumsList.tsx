import React from 'react';
import { Album } from '../modules/albums/types';
import {Card, Col, Row} from 'antd';

interface AlbumsListProps {
    albumsList: Album[];
}

export const AlbumsList: React.FC<AlbumsListProps> = ({albumsList}) => (
        <Row>
            {albumsList.map(albums => (
                <Col key={albums.id} span={6}>
                    <Card title={albums.title} size="small">
                        <span>{albums.userId}</span>
                    </Card>
                </Col>
            ))}
        </Row>
    );

