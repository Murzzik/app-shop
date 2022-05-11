import setupClient from '../../api';

const api = setupClient('https://jsonplaceholder.typicode.com');

export const getPosts = () => api.get('/posts');
