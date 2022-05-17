import { createClient } from '../../api';
import { Post } from './types';

const api = createClient('https://jsonplaceholder.typicode.com');

export const getPosts = () => api.get<Post[]>('/posts');

export interface CreatePostRequest {
    title: string;
    body: string;
    userId: number;
}

export interface CreatePostResponse {
    id: number;
}

export const postPost = (post: CreatePostRequest) => api.post<CreatePostResponse>('/posts', post);
