import { createClient } from '../../api';
import { Post } from './types';

const api = createClient('https://jsonplaceholder.typicode.com');

export const getPosts = () => api.get<Post[]>('/posts');
