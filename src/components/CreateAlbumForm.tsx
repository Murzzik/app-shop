import { CreateAlbumRequest } from '../modules/albums/api';
import React, { useState, MouseEvent } from 'react';
import { Button, Col, Form, Input, Row } from 'antd';

interface CreateAlbumForm {
    onCreate: (album: CreateAlbumRequest) => void;
}

export const CreateAlbumForm: React.FC<CreateAlbumForm> = ({ onCreate }) => {
    const [title, setTitle] = useState('');

    const onChangeTitle = (e: any) => setTitle(e.target.value);

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const album: CreateAlbumRequest = {
            title,
            userId: 0,
        };
        onCreate(album);
        setTitle('');
    };

    return (
        <Row>
            <Col span={8}>
                <Form>
                    <h2>Create album</h2>
                    <Input
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={onChangeTitle} />
                    <Button onClick={onClick}>Create</Button>
                </Form>
            </Col>
        </Row>
    );
};
