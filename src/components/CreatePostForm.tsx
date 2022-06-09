import { Button, Col, Form, Input, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { MouseEvent, useState } from 'react';
import { CreatePostRequest } from '../modules/posts/api';

interface CreatePostForm {
    onCreate: (post: CreatePostRequest) => void;
}

export const CreatePostForm: React.FC<CreatePostForm> = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onChangeTitle = (e: any) => setTitle(e.target?.value);
    const onChangeBody = (e: any) => setBody(e.target?.value);

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const post: CreatePostRequest = {
            title,
            body,
            userId: 1,
        };
        onCreate(post);
        setTitle('');
        setBody('');
    };
    return (
        <Row>
            <Col span={8}>
                <Form>
                    <h2>Create post</h2>
                    <Input
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={onChangeTitle}
                    />
                    <TextArea
                        placeholder="Body"
                        name="body"
                        onChange={onChangeBody}
                        value={body}
                    />
                    <Button onClick={onClick}>Create</Button>
                </Form>
            </Col>
        </Row>
    );
};

// In parent component
// <CreatePostForm onCreate={onCreatePost} />
